# 🎓 **Student-Teacher Appointment Booking System**

A **MERN stack** project designed to streamline appointment bookings between students and teachers. It provides an **admin dashboard**, tools for **teachers** to manage their schedules, and an intuitive interface for **students** to book appointments.

---

## 📚 **Table of Contents**

- [✨ Features](#-features)
- [🧩 System Modules](#-system-modules)
  - [🔑 Admin](#-admin)
  - [👨‍🏫 Teacher](#-teacher)
  - [👩‍🎓 Student](#-student)
- [💻 Tech Stack Used](#-tech-stack-used)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [🔒 Login Access](#-login-access)
- [🙏 Thank You](#-thank-you)

---

## ✨ **Features**

- **Admin**: Manage teachers, approve student registrations.
- **Teacher**: Schedule and manage appointments, send email alerts, view messages, and appointments.
- **Student**: Book appointments, send alerts and messages to teachers.

---

## 🧩 **System Modules**

### 🔑 **Admin**

- Add Teachers (Name, Department, Subject, etc.).
- Update/Delete Teachers.
- Approve Student Registrations.

### 👨‍🏫 **Teacher**

- Login & Manage Schedules.
- Approve/Cancel Appointments.
- Send Email Alerts to Students.
- View Messages & Appointments.

### 👩‍🎓 **Student**

- Register & Login.
- Book Appointments.
- Send Email Alerts & Messages to Teachers.

---

## 💻 **Tech Stack Used**

### 🌐 **Frontend**

- **Vite** (Bundler)
- **TailwindCSS** (Styling)
- **React Icons** (Icons)
- **React Router Dom** (Routing)
- **React Toastify** (Notifications)
- **Axios** (API Requests)

### ⚙️ **Backend**

- **Express.js** (API Framework)
- **JWT** (Authentication)
- **Nodemailer** (Emails)
- **Bcrypt** (Password Encryption)

---

## ⚙️ **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sumit-nagrikar/student-teacher-appointment-booking-system
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory:

   ```env
   DB_URL=<your-database-url>
   JWT_KEY=<your-jwt-key>
   PORT=5000

   # Mail credentials
   MAIL_HOST=smtp.gmail.com
   MAIL_USER=<your-email>
   MAIL_PASS=<your-email-password>
   ```

   Create a `.env.local` file in the `frontend` directory:

   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

5. **Run the backend server:**

   ```bash
   cd backend
   npm run dev
   ```

6. **Run the frontend server:**

   ```bash
   cd frontend
   npm run dev
   ```

7. Open the application at `http://localhost:5173/`.

---

## 🚀 **Usage**

1. **Admin**:

   - Log in to manage teachers and approve student registrations.

2. **Teacher**:

   - Log in to manage appointments, view messages, and send email alerts.

3. **Student**:
   - Register and book appointments.
   - Send alerts and messages to teachers.

---

## 🔒 **Login Access**

### 🧑‍🎓 **Student**

```bash
Email: student@gmail.com
Password: pass123
```

### 👨‍🏫 **Teacher**

```bash
Email: teacher@gmail.com
Password: pass123
```

### 🛠️ **Admin**

```bash
Email: admin@gmail.com
Password: admin
```

## 🙏 Thank You!
