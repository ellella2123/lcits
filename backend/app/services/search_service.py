from sqlalchemy.orm import Session
from app.models.client import Client

def search_clients(db: Session, query: str):
    return db.query(Client).filter(
        (Client.lab_id.contains(query)) |
        (Client.full_name.contains(query)) |
        (Client.phone.contains(query))
    ).all()