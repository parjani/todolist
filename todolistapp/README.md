# To-Do List

A simple and interactive To-Do List Application built using React + Vite.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Dynamic rendering using `map()`
- Responsive and user-friendly UI

---

## Technologies Used

- React.js
- Vite
- JavaScript (ES6)
- CSS

---

## Project Structure

```bash
todolistapp/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ToDoItem.jsx
│   │   └── ToDoList.jsx
│   │
│   ├── utils/
│   │   └── todolistdata.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md

```
## Getting Started

### 1️ Clone the Repository

```bash
git clone <your-github-repository-link>
```

### 2️ Navigate to Project Folder

```bash
cd todolistapp
```

### 3️ Install Dependencies

```bash
npm install
```

### 4️ Run the Development Server

```bash
npm run dev
```

### 5️ Open in Browser

```bash
http://localhost:5173
```

---

## Components Used

### App Component
- Manages application state

### Header Component
- Displays application title

### ToDoList Component
- Renders all todo items dynamically using `map()`
- Handles add, edit, delete, and complete functionality

### ToDoItem Component
- Displays individual todo item
- Handles edit/delete/complete actions

---

## Screenshots

### List Page and Add New ToDo

<img width="1917" height="865" alt="image" src="https://github.com/user-attachments/assets/12205f85-d068-4ea4-9036-7ea42b448fe1" />

### Edit, Delete and Mark Complete
<img width="1917" height="862" alt="image" src="https://github.com/user-attachments/assets/8fcb7fca-b3f6-406c-9b2f-ff706de9627f" />

### Mobile and Tablet Responsive
<img width="356" height="741" alt="image" src="https://github.com/user-attachments/assets/5b47f4c9-74b3-4951-b88d-7512a22f6704" />
<img width="472" height="637" alt="image" src="https://github.com/user-attachments/assets/a38f1802-e483-41bd-8931-21be13ae7d35" />



---

## Functionalities

### Add Task
Users can add new tasks using the input field.

### Edit Task
Users can edit existing tasks.

### Mark as Completed
Tasks can be marked as completed.

### Delete Task
Users can remove tasks from the list.

---

## React Concepts Used

- Functional Components
- useState Hook
- Props
- Event Handling
- Conditional Rendering
- Dynamic List Rendering

---

## Build Command

```bash
npm run build
```

---

## GitHub Link
https://github.com/parjani/todolist

