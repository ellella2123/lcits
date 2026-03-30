from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.sample_tracking import TrackingUpdate
from app.services.tracking_service import update_status

router = APIRouter()

@router.put("/{client_id}")
def update(client_id: int, data: TrackingUpdate, db: Session = Depends(get_db)):
    return update_status(db, client_id, data.status)