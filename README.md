# ☕️ GICafe Café Employee Manager 

<div style="display: flex; justify-content: space-between;">

  <div style="flex: 0 0 48%; display: flex; flex-direction: column;">
    <img width="48%" alt="image" src="https://github.com/user-attachments/assets/72358869-1b00-49ef-bfdf-868b39812a10" style="margin-bottom: 10px;">
    <img width="48%" alt="image" src="https://github.com/user-attachments/assets/61bfdbd9-e6cf-4266-ae58-205e2b089282" style="margin-bottom: 10px;">
  </div>

  <div style="flex: 0 0 48%; display: flex; flex-direction: column;">
    <img width="48%" alt="image" src="https://github.com/user-attachments/assets/e4996cb3-f94c-495f-af24-2c6573e3642c">
    <img width="48%" alt="image" src="https://github.com/user-attachments/assets/7ce72528-7d41-4aa8-8144-f6e3c39caf6e">
  </div>

</div>

## Table of Contents
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Running the Application](#running-the-application)
   - [Development Mode](#development-mode)
   - [Production Mode](#production-mode)
5. [Docker Instructions](#docker-instructions)
6. [Database Seeding](#database-seeding)
7. [Running Tests](#running-tests)
8. [API Endpoints](#api-endpoints)
9. [Frontend Pages](#frontend-pages)
10. [Folder Structure](#folder-structure)
11. [What I Have Learned](#what-i-have-learned)
12. [Known Issues](#known-issues)


## Introduction
GICafe Café Employee Manager is a Full Stack Mobile Responsive web application designed to manage cafés and their employees. It provides a user-friendly interface for viewing, adding, editing, and deleting both cafés and employees. The application is built with a React frontend and a Node.js backend, utilizing modern web technologies and best practices.

**Hosted on:** [http://3.25.141.25:3000/](http://3.25.141.25:3000/)
> Note: Best viewed on Chrome, zoomed out at 75%. Incompatible with Safari due to a package issue.

## Tech Stack ⚙️

### Backend
- Node.js 
- Express.js
- MongoDB

### Frontend
- React.js
- Tanstack Router for views management
- Tanstack Query for state-management/fetch
- AG Grid for tables
- Material-UI for CSS framework

## 🛠️ Getting Started 

### Prerequisites

- Node.js (v18.x or above)
- npm (usually comes with Node.js)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/cafe-employee-manager.git
   cd cafe-employee-manager
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following content:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

## 🚀 Running the Application

### Development Mode

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Production Mode

1. Build the frontend:
   ```
   cd frontend
   npm run build
   ```

2. Start the backend server (which will serve the frontend build):
   ```
   cd ../backend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:5000`

## 🐳 Docker Instructions 

To run the application using Docker:

1. Ensure Docker and Docker Compose are installed on your system.

2. Build and start the containers:
   ```
   docker-compose up --build
   ```

3. The application will be available at `http://localhost:3000`

To stop the containers:
```
docker-compose down
```

## Database Seeding 🌱

To seed the database with initial data:

```
npm run seed
```

This command will populate your database with sample cafés and employees.

## 🧪 Running Tests 

![image](https://github.com/user-attachments/assets/85056d1a-056a-4688-af25-409308070992)

To run the Jest unit tests:

```
npm run test
```

This will execute all test suites and display the results in the console.

## 📡 API Endpoints 

- GET `/cafes?location=<location>`: Get all cafés, optionally filtered by location
- GET `/employees?cafe=<café>`: Get all employees, optionally filtered by café
- POST `/cafe`: Create a new café
- POST `/employee`: Create a new employee
- PUT `/cafe`: Update an existing café
- PUT `/employee`: Update an existing employee
- DELETE `/cafe`: Delete an existing café
- DELETE `/employee`: Delete an existing employee

For detailed request/response formats, please refer to the API documentation.

## 📄 Frontend Pages 

1. **Café Page**
   - Displays a list of cafés in a table
   - Allows filtering by location
   - Provides "Add New Café" functionality
   - Edit and Delete options for each café

2. **Employee Page**
   - Displays a list of employees in a table
   - Provides "Add New Employee" functionality
   - Edit and Delete options for each employee

3. **Add/Edit Café Page**
   - Form for adding or editing café details
   - Input validation for all fields
   - Unsaved changes warning

4. **Add/Edit Employee Page**
   - Form for adding or editing employee details
   - Input validation for all fields
   - Unsaved changes warning

## Folder Structure 📂

```plaintext
cafe-employee-management/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       └── services/
│
├── server/
│   ├── assets/
│   ├── config/
│   ├── controllers/
│   ├── helpers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seeders/
│   ├── test/
│   └── utils/
│
├── README.md
└── docker-compose.yml
```

## 📚 What I Have Learned

### 1. **Unit Testing with Jest**
   - Gained proficiency in writing unit tests using **Jest** to ensure code quality and reliability. This practice has enhanced my debugging skills and improved overall application stability.

### 2. **State Management with Tanstack Query**
   - Learned how to manage server state effectively using **Tanstack Query**, allowing for seamless data fetching, caching, and synchronization in my React application.

### 3. **Routing with Tanstack Router**
   - Implemented navigation in the application with **Tanstack Router**, gaining insights into creating dynamic routes and managing view states efficiently.

### 4. **Data Display with Ag-Grid**
   - Utilized **Ag-Grid** for rendering complex data tables, learning how to configure grid options, enable sorting and filtering, and optimize performance for large datasets.

These experiences have significantly strengthened my skills in building robust, testable applications with modern technologies.



## Known Issues

- The application is currently incompatible with Safari due to a package issue.
- For optimal viewing, use Chrome browser zoomed out to 75%.



