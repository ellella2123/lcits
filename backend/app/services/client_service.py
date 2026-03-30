from sqlalchemy.orm import Session
from app.models.client import Client
from app.utils.lab_id_generator import generate_lab_id

def create_client(db: Session, data):
    lab_id = generate_lab_id(db)

    client = Client(
        lab_id=lab_id,
        full_name=data.full_name,
        age=data.age,
        gender=data.gender,
        phone=data.phone,
        email=data.email,
        address=data.address,
        test_requested=data.test_requested,
        sample_type=data.sample_type
    )

    db.add(client)
    db.commit()
    db.refresh(client)
    return client