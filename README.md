# Contact Management API

## 📌 Project Overview
This is a **Node.js & Express.js** based backend for a Contact Management Application. It provides RESTful API endpoints to create, retrieve, update, delete, and search contacts using MongoDB as the database.

## 🚀 Features
- **Create, Read, Update, Delete (CRUD) operations** for contacts
- **Data validation** using Joi/Express-validator
- **Error handling** for invalid requests
- **Search contacts** by name or email (Bonus feature)
- **Unit testing** with Jest/Mocha & Chai

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Validation**: Joi / Express-validator
- **Testing**: Jest, Mocha, Chai
- **Version Control**: Git & GitHub

## 📂 Folder Structure
```
contact-management-api/
│── src/
│   ├── controllers/
│   │   ├── contactController.js
│   ├── models/
│   │   ├── contactModel.js
│   ├── routes/
│   │   ├── contactRoutes.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   ├── config/
│   │   ├── db.js
│── tests/
│── server.js
│── package.json
│── README.md
│── .gitignore
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/contact-management-api.git
cd contact-management-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a **.env** file in the root directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Start the Server
```sh
npm start
```
Or in development mode with **nodemon**:
```sh
npm run dev
```

## 📌 API Endpoints

### 🔹 **1. Get All Contacts**
**GET** `/api/contacts`
#### 📥 Request:
```sh
GET http://localhost:5000/api/contacts
```
#### 📤 Response:
```json
[
  {
    "_id": "650f244e6d79a4c25bcb9ad1",
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "1234567890",
    "address": "123 Main St",
    "createdAt": "2024-02-10T10:00:00.000Z"
  }
]
```

### 🔹 **2. Get Contact by ID**
**GET** `/api/contacts/:id`
#### 📥 Request:
```sh
GET http://localhost:5000/api/contacts/650f244e6d79a4c25bcb9ad1
```

### 🔹 **3. Create a New Contact**
**POST** `/api/contacts`
#### 📥 Request:
```json
{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "phoneNumber": "9876543210",
  "address": "456 Elm St"
}
```
#### 📤 Response:
```json
{
  "_id": "650f255e6d79a4c25bcb9ad2",
  "name": "Alice Smith",
  "email": "alice@example.com",
  "phoneNumber": "9876543210",
  "address": "456 Elm St",
  "createdAt": "2024-02-10T11:00:00.000Z"
}
```

### 🔹 **4. Update a Contact**
**PUT** `/api/contacts/:id`
#### 📥 Request:
```json
{
  "name": "Alice Johnson",
  "email": "alicej@example.com"
}
```

### 🔹 **5. Delete a Contact**
**DELETE** `/api/contacts/:id`
#### 📤 Response:
```json
{
  "message": "Contact deleted successfully"
}
```

### 🔹 **6. Search Contacts** (Bonus Feature)
**GET** `/api/contacts/search?name=Alice&email=alice@example.com`
#### 📥 Request:
```sh
GET http://localhost:5000/api/contacts/search?name=Alice
```

## 🧪 Running Tests
To run unit tests, use:
```sh
npm test
```

## 🚀 Deployment
### **Deploy to Heroku (Example)**
```sh
git init
git add .
git commit -m "Initial commit"
heroku create your-app-name
git push heroku main
```

## 📝 License
This project is open-source and available under the **MIT License**.

---
### 📞 Need Help?
For any issues or contributions, create an issue on the [GitHub repository](https://github.com/your-username/contact-management-api).

Happy Coding! 🚀

