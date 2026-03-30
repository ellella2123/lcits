from pydantic import BaseModel
from datetime import datetime

class ClientCreate(BaseModel):
    full_name: str
    age: int
    gender: str
    phone: str
    email: str
    address: str
    test_requested: str
    sample_type: str

class ClientResponse(BaseModel):
    lab_id: str
    full_name: str
    created_at: datetime

    class Config:
        from_attributes = True