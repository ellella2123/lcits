from sqlalchemy.orm import Session
from app.models.sample_tracking import SampleTracking

def update_status(db: Session, client_id: int, status: str):
    record = db.query(SampleTracking).filter(SampleTracking.client_id == client_id).first()
    
    if not record:
        record = SampleTracking(client_id=client_id, status=status)
        db.add(record)
    else:
        record.status = status

    db.commit()
    return record