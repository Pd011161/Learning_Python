from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app import models, schemas, crud, analytics, database

models.Base.metadata.create_all(bind=database.engine)
app = FastAPI()

# เพิ่มตรงนี้!
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],            # หรือระบุ ["http://localhost:3000"] เฉพาะ dev frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/students/", response_model=schemas.Student)
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    return crud.create_student(db, student)

@app.get("/students/", response_model=list[schemas.Student])
def read_students(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_students(db, skip=skip, limit=limit)

@app.get("/students/{student_id}", response_model=schemas.Student)
def read_student(student_id: int, db: Session = Depends(get_db)):
    db_student = crud.get_student(db, student_id)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student

@app.put("/students/{student_id}", response_model=schemas.Student)
def update_student(student_id: int, student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = crud.update_student(db, student_id, student)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student

@app.delete("/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    if crud.delete_student(db, student_id):
        return {"ok": True}
    raise HTTPException(status_code=404, detail="Student not found")

# Analytics endpoints
@app.get("/analytics/average-score")
def average_score(db: Session = Depends(get_db)):
    avg = analytics.get_average_score(db)
    return {"average_score": avg}

@app.get("/analytics/gender-distribution")
def gender_distribution(db: Session = Depends(get_db)):
    dist = analytics.get_gender_distribution(db)
    return [{"gender": row[0], "count": row[1]} for row in dist]
