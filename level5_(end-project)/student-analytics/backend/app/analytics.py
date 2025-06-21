from sqlalchemy.orm import Session
from sqlalchemy import func
from .models import Student

def get_average_score(db: Session):
    return db.query(func.avg(Student.score)).scalar()

def get_gender_distribution(db: Session):
    return db.query(Student.gender, func.count(Student.id)).group_by(Student.gender).all()
