#!/bin/bash

echo "Starting LCITS Backend..."

python -m app.core.init_db

uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload