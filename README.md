# 🔐 SecureAuth - Email OTP Authentication System

SecureAuth is a secure authentication system built with **React.js** and **Django** that provides user registration, login, email verification using One-Time Password (OTP), password reset, and JWT-based authentication.

The project demonstrates modern authentication practices by verifying users through email before allowing account access, making it suitable as a portfolio and learning project.

---

## 🚀 Features

### User Registration
- Register using username, email, phone number, password, and role.
- Server-side validation for all fields.
- Duplicate email and username validation.
- Password strength validation.

### Email OTP Verification
- 6-digit OTP sent to the registered email.
- OTP expires after a limited time.
- User account is created only after successful OTP verification.

### Secure Login
- JWT Authentication using Access Token and Refresh Token.
- Login only after email verification.
- Proper validation and error handling.

### Forgot Password
- Request password reset using email.
- OTP verification before password reset.
- Secure password update.

### Logout
- JWT Refresh Token Blacklisting.
- Secure logout implementation.

### Form Validation
- Frontend validation.
- Backend validation.
- Field-specific error messages.
- Toast notifications.

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Toastify
- Tailwind CSS

### Backend
- Django
- Django REST Framework Simple JWT
- Django Cache Framework
- SMTP Email Service

### Database
- SQLite (Development)
- MySQL (Production Ready)

---

## 🔐 Authentication Flow

1. User registers.
2. Backend validates user data.
3. OTP is generated.
4. OTP is sent to the user's email.
5. User verifies OTP.
6. Account is activated.
7. User logs in.
8. JWT Access & Refresh Tokens are generated.
9. User can securely access protected resources.

---

## 📁 Project Structure

```
SecureAuth/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── routes/
│   └── App.jsx
│
├── backend/
│   ├── accounts/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚡ API Endpoints

| Method | Endpoint | Description |
|----------|-------------------------|------------------------------|
| POST | `/accounts/register/` | Register User |
| POST | `/accounts/verify-otp/` | Verify Email OTP |
| POST | `/accounts/login/` | User Login |
| POST | `/accounts/logout/` | User Logout |
| POST | `/accounts/forgot-password/` | Send Password Reset OTP |
| POST | `/accounts/verify-reset-otp/` | Verify Reset OTP |
| POST | `/accounts/reset-password/` | Reset Password |

---

## 🔒 Security Features

- Email OTP Verification
- JWT Authentication
- Refresh Token Blacklisting
- Password Hashing
- Server-side Validation
- Client-side Validation
- Duplicate User Prevention
- OTP Expiration
- Secure Password Reset
- Protected Authentication Flow

---

## 📷 Screenshots

Add screenshots of:

- Login Page
- Registration Page
- OTP Verification
- Forgot Password
- Reset Password

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/duttasagar/email-otp-authentication.git
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Future Enhancements

- Google Authentication
- GitHub Authentication
- Remember Me
- Multi-Factor Authentication (MFA)
- User Profile Management
- Account Lock After Multiple Failed Attempts
- Password Strength Meter
- Email Change Verification

---

## Author

**Sagar Dutta**

Full Stack Developer

---

## License

This project is developed for educational and portfolio purposes.