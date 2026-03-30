from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class SampleTracking(Base):
    __tablename__ = "sample_tracking"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id", ondelete="CASCADE"))
    status = Column(String, default="Pending")