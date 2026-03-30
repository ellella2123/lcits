from app.core.database import Base, engine
from app.models import user, client, test, sample_tracking, result

def init():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    init()
    print("Database initialized successfully.")