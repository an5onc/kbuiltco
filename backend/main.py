from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models, schemas, database
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://an5onc.github.io", "https://an5onc.github.io/kbuiltco"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=database.engine)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/entries")
def create_entry(entry: schemas.EntryCreate, db: Session = Depends(get_db)):
    if entry.phone:
        if not entry.phone.isnumeric():
            raise HTTPException(status_code=400, detail="Phone must be numeric")
        if len(entry.phone) != 10:
            raise HTTPException(status_code=400, detail="Phone must be exactly 10 digits")
        if entry.question1 not in ("yes", "no"):
            raise HTTPException(status_code=400, detail="question1 must be 'yes' or 'no'")

    # 👇 Prevent duplicate entries
    existing_entry = db.query(models.Entry).filter(
        (models.Entry.email == entry.email) | (models.Entry.phone == entry.phone)
    ).first()

    if existing_entry:
        raise HTTPException(
            status_code=400,
            detail="You have already been entered in the raffle, only one entry is allowed."
        )

    new_entry = models.Entry(
        name=entry.name,
        email=entry.email,
        phone=entry.phone,
        question1=entry.question1
    )
    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)
    return {"message": "Entry submitted!"}

@app.get("/random_winner")
def random_winner(db: Session = Depends(get_db)):
    entries = db.query(models.Entry).all()
    if not entries:
        return {"message": "No entries yet."}
    winner = random.choice(entries)
    return {
        "name": winner.name,
        "email": winner.email,
        "phone": getattr(winner, "phone", None),
        "question1": getattr(winner, "question1", None),
    }

@app.get("/entries")
def get_all_entries(db: Session = Depends(get_db)):
    entries = db.query(models.Entry).order_by(models.Entry.name.asc()).all()
    return [
        {
            "id": e.id,
            "name": e.name,
            "email": e.email,
            "phone": e.phone,
            "question1": e.question1,
        }
        for e in entries
    ]

@app.get("/")
def root():
    return {"status": "API running", "routes": ["/entries", "/random_winner"]}