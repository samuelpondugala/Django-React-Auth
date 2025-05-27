# 🔐 Full-Stack Login Authentication System

This project is a full-stack login and registration system built using **Django + Django REST Framework** for the backend and **React.js** for the frontend. It supports user registration, login, logout, authentication using JWT (JSON Web Tokens), and protected routes.

---

## 🛠 Tech Stack

**Frontend:**

* React.js
* Axios
* React Router DOM
* Bootstrap / Tailwind CSS (customize based on your use)

**Backend:**

* Django
* Django REST Framework
* Simple JWT (for token-based authentication)
* CORS Headers

---

## ✨ Features

* User Registration with validation
* User Login with JWT access/refresh tokens
* Secure password hashing
* Token refresh endpoint
* Logout functionality (frontend)
* Protected routes in React
* Custom user model (optional)
* CORS configuration between frontend and backend

---

## 📁 Project Structure

```
project-root/
├── backend/
│   ├── manage.py
│   ├── auth_api/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   └── backend/
│       ├── settings.py
│       └── urls.py
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   └── ProtectedPage.js
    │   ├── App.js
    │   ├── api.js
    └── package.json
```

---

## 🔧 Installation & Setup

### 1. Backend (Django + DRF)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Create a superuser (optional):

```bash
python manage.py createsuperuser
```

**Make sure to add CORS settings and REST Framework JWT settings in `settings.py`.**

---

### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
```

Update your Axios base URL to point to your Django backend (e.g., `http://localhost:8000/api/`).

---

## 🔐 API Endpoints

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | `/api/register/`      | Register a new user    |
| POST   | `/api/token/`         | Obtain access token    |
| POST   | `/api/token/refresh/` | Refresh access token   |
| GET    | `/api/user/`          | Get authenticated user |

---

## 📦 Dependencies

### Backend:

* Django
* djangorestframework
* djangorestframework-simplejwt
* django-cors-headers

### Frontend:

* React
* Axios
* React Router DOM

---

## 🧪 Screenshots

> You can add your UI screenshots here!

---

## 🙋‍♂️ Author

**David Samuel Pondugala**
Full Stack Developer | UI/UX Designer

---

## 📃 License

This project is licensed under the MIT License.

