# Frontend Task Tracker

## Overview

This project is a **Task Management Frontend Application** built using **React (Vite)**.
It allows users to **register, login, and manage tasks** through a simple and responsive UI.

Since backend APIs were not provided, a **mock API layer using LocalStorage** was implemented to simulate authentication and task management.

---

## Tech Stack

* React (Vite)
* React Router
* Context API
* Tailwind CSS
* Jest / React Testing Library

---

## Features

* User Registration
* User Login
* Protected Routes
* Dashboard for logged-in users
* Create and Delete Tasks
* Form Validation
* Responsive UI
* Mark Tasks as Completed
* Admin Role: View & Manage all users' tasks
  

---

## Project Setup

Install dependencies:

npm install

Run the development server:

npm run dev

The application will run at:

http://localhost:5173

---

## Running Tests

npm run test

---
Admin Feature

Role-based access control is implemented using the role field in LocalStorage.

Admin Users:

Can see all tasks from every user.

Can edit, delete, or mark any task as completed.

Regular Users:

Can only see their own tasks.

Can manage their tasks individually.

Example usage in the dashboard:

Admin sees a list of all users’ tasks with user email displayed.

Regular users see only their tasks.
## Screenshots
### Home Page
<img width="1896" height="913" alt="Screenshot 2026-03-06 144146" src="https://github.com/user-attachments/assets/d14d5273-8e73-400f-b566-9972cffe43bc" />

### Register Page
<img width="1891" height="909" alt="image" src="https://github.com/user-attachments/assets/b49a904b-0446-49c1-ace0-ace17cef9578" />



### Login Page
<img width="1900" height="916" alt="Screenshot 2026-03-06 143954" src="https://github.com/user-attachments/assets/9dd1aa81-281c-4b52-8ae8-8baa44fba64b" />

### Dashboard
<img width="1899" height="905" alt="Screenshot 2026-03-06 155927" src="https://github.com/user-attachments/assets/75bf9e4b-901f-4318-8135-dbd0b629ed10" />

### Task Management
<img width="1897" height="918" alt="image" src="https://github.com/user-attachments/assets/3866b216-7da8-4bfc-8263-6f49292186b6" />




---

## Notes

This project simulates backend APIs using **LocalStorage**, allowing the frontend to function independently without requiring a backend server.
