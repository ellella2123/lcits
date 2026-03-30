from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.search_service import search_clients

router = APIRouter()

@router.get("/")
def search(q: str, db: Session = Depends(get_db)):
    return search_clients(db, q)