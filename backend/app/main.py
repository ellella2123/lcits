from fastapi import FastAPI
from app.core.database import Base, engine

# Import all models to register them
from app.models import user, client, test, sample_tracking, result

from app.routes import auth, clients, tracking, results, search

Base.metadata.create_all(bind=engine)

app = FastAPI(title="LCITS API")

app.include_router(auth.router, prefix="/auth")
app.include_router(clients.router, prefix="/clients")
app.include_router(tracking.router, prefix="/tracking")
app.include_router(results.router, prefix="/results")
app.include_router(search.router, prefix="/search")

@app.get("/")
def root():
    return {"message": "LCITS API Running"}