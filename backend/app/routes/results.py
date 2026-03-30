from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.result import ResultCreate
from app.services.result_service import create_result

router = APIRouter()

@router.post("/")
def create(data: ResultCreate, db: Session = Depends(get_db)):
    return create_result(db, data)