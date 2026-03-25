ToDo Backend 
(Node.js + Express + MongoDB + JWT)

A simple and scalable Todo Backend API built using Node.js, Express, MongoDB Atlas, and JWT Authentication.
This API supports user registration, login, and full CRUD operations for todo items.

🚀 Features
🔐 Authentication

User Registration

User Login

JWT Token Authentication

Protected Routes

📝 Todo Management

Create Todo

Get All Todos

Update Todo

Delete Todo

Mark Todo as Read

🗄️ Database

MongoDB Atlas (Cloud Database)

Mongoose ODM

📁 Folder Structure
src/
 ├── config/
 │    └── db.js
 ├── controllers/
 │    ├── authController.js
 │    └── todoController.js
 ├── middleware/
 │    └── authMiddleware.js
 ├── models/
 │    ├── User.js
 │    └── Todo.js
 ├── routes/
 │    ├── authRoutes.js
 │    └── todoRoutes.js
 └── server.js

⚙️ Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

bcrypt for password hashing

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/<your-username>/ToDo-backend.git
cd ToDo-backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Start the server
npm run dev


Server runs on:
👉 http://localhost:5000

📚 API Endpoints
🔐 Auth Routes (/api/auth/)
Method	Route	Description
POST	/register	Register new user
POST	/login	Login existing user
📝 Todo Routes (/api/todos/) — Protected

Add header:

Authorization: Bearer <your-token>

Method	Route	Description
POST	/	Create Todo
GET	/	Get all Todos
PUT	/:id	Update Todo
DELETE	/:id	Delete Todo
PATCH	/:id/read	Mark as Read
🛠️ Example Request (Create Todo)
POST /api/todos
Headers:
Authorization: Bearer <token>

Body:
{
  "title": "Study DSA",
  "description": "Solve 5 problems daily"
}

🧪 Tools Used

Postman / Thunder Client for API testing

MongoDB Compass (optional)

✨ Future Enhancements

Pagination for todos

User profile route

Todo categories / labels

Dark mode frontend

Deploy backend to Render / Vercel

👨‍💻 Author

Priyanshu Raj
Backend + MERN Stack Developer
