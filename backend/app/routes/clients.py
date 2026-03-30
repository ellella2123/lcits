from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.client import ClientCreate
from app.services.client_service import create_client

router = APIRouter()

@router.post("/")
def create(data: ClientCreate, db: Session = Depends(get_db)):
    return create_client(db, data)