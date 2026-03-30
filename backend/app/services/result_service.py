from sqlalchemy.orm import Session
from app.models.result import Result

def create_result(db: Session, data):
    result = Result(
        client_id=data.client_id,
        result_data=data.result_data,
        file_path=""
    )
    db.add(result)
    db.commit()
    db.refresh(result)
    return result