from typing import Optional
from pydantic import BaseModel, EmailStr

class EntryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    question1: str

class Entry(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: Optional[str] = None
    question1: str

    class Config:
        orm_mode = True