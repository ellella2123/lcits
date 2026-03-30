from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class Result(Base):
    __tablename__ = "results"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id", ondelete="CASCADE"))
    result_data = Column(String)
    file_path = Column(String)