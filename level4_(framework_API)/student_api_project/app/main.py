from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Student(BaseModel):
    name: str
    age: int

students: List[Student] = []

@app.get("/students")
def get_students():
    return students

@app.post("/students")
def add_student(student: Student):
    students.append(student)
    return student
