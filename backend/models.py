import database
from sqlalchemy import Column, Integer, String

Base = database.Base
SessionLocal = database.SessionLocal

class Entry(Base):
    __tablename__ = "entries"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=False, nullable=False)
    phone = Column(String, nullable=True)         # new
    question1 = Column(String, nullable=True)     # new (“yes” or “no”)