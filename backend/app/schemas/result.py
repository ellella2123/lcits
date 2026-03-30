from pydantic import BaseModel

class ResultCreate(BaseModel):
    client_id: int
    result_data: str