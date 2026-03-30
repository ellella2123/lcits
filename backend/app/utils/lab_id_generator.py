from datetime import datetime
from sqlalchemy.orm import Session
from app.models.client import Client

def generate_lab_id(db: Session):
    year = datetime.utcnow().year
    last = db.query(Client).order_by(Client.id.desc()).first()
    
    if not last:
        number = 1
    else:
        number = last.id + 1

    return f"LAB-{year}-{str(number).zfill(4)}"