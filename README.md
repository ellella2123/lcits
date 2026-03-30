# 🧪 Laboratory Client Identification & Tracking System (LCITS)

A production-ready, enterprise-grade healthcare SaaS platform for managing laboratory clients, tracking samples, and handling results in real-time.

---

## 🚀 FEATURES

- Secure JWT Authentication (Register/Login)
- Client Registration with Auto Lab ID
- Sample Tracking System (Real-time status updates)
- Result Management System
- Global Search (Lab ID, Name, Phone)
- Modern SaaS Dashboard UI (Dark Mode)
- Fully Responsive Design
- Azure Cloud Ready Deployment

---

## 🏗 PROJECT STRUCTURE

---root/
├── backend/
├── frontend/
├── database/
├── docs/
├── .env.example
├── README.md

## ⚙️ TECH STACK

### Frontend
- React (Vite)
- Tailwind CSS

### Backend
- FastAPI (Python)
- JWT Authentication

### Database
- SQLite (Local)
- Azure SQL (Production)

### Deployment
- Azure App Service (Backend)
- Azure Static Web Apps (Frontend)

---

## 🧪 RUN LOCALLY (BEGINNER FRIENDLY)

### 🔹 STEP 1: Install Requirements

#### Install Node.js
👉 https://nodejs.org

#### Install Python (3.10+)
👉 https://www.python.org/downloads/

---

### 🔹 STEP 2: SETUP BACKEND

```bash
cd backend
python -m venv venv

Activate environment:

Windows

venv\Scripts\activate

source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload