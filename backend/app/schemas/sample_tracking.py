from pydantic import BaseModel

class TrackingUpdate(BaseModel):
    status: str