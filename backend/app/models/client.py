from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.core.database import Base

class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    lab_id = Column(String, unique=True, index=True)
    full_name = Column(String)
    age = Column(Integer)
    gender = Column(String)
    phone = Column(String)
    email = Column(String)
    address = Column(String)
    test_requested = Column(String)
    sample_type = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    tests = relationship("Test", backref="client", cascade="all, delete")
    tracking = relationship("SampleTracking", backref="client", uselist=False, cascade="all, delete")
    results = relationship("Result", backref="client", cascade="all, delete")