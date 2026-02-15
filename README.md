# TaskFlow API

REST API built with Node.js, Express, PostgreSQL and Prisma.

Includes JWT authentication, bcrypt password hashing and full CRUD for tasks.

This project was developed as a backend portfolio API.

Tech stack:
- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt

Features:
- User registration and login
- JWT protected routes
- Password hashing with bcrypt
- Create / Read / Update / Delete tasks
- PostgreSQL persistence

Installation:

git clone https://github.com/Luchobent/taskflow-api.git  
cd taskflow-api  
npm install  

Create .env file:

DATABASE_URL="postgresql://USER@localhost:5432/taskflow"  
JWT_SECRET="your_secret"  
PORT=3000  

Run migrations:

npx prisma migrate dev  

Start server:

npm run dev  

Server runs on:

http://localhost:3000  

Auth endpoints:

POST /auth/register  
POST /auth/login  

Tasks endpoints (JWT required):

POST /tasks  
GET /tasks  
PATCH /tasks/:id  
DELETE /tasks/:id  

Authorization header:

Authorization: Bearer YOUR_TOKEN  

Example flow:

Register user → Login → receive JWT → use JWT to create/list/update/delete tasks.

This API demonstrates backend fundamentals including authentication, authorization, relational database modeling and RESTful CRUD operations.

Developed as a junior backend portfolio project.
