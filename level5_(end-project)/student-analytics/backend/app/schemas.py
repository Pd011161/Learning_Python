from pydantic import BaseModel

class StudentBase(BaseModel):
    name: str
    age: int
    gender: str
    score: float

class StudentCreate(StudentBase):
    pass

class Student(StudentBase):
    id: int
    class Config:
        orm_mode = True
