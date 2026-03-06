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

## Environment Variables

Create a `.env` file using the example below:

VITE_API_URL=http://localhost:5000

---

## Screenshots
### Home Page

![Home](./screenshots/Home.png)

### Register Page

![Register](./screenshots/Register.png)

### Login Page

![Login](./screenshots/Login.png)

### Dashboard

![Dashboard](./screenshots/Dashboard.png)

### Task Management

![Tasks](./screenshots/Task.png)

---

## Notes

This project simulates backend APIs using **LocalStorage**, allowing the frontend to function independently without requiring a backend server.
