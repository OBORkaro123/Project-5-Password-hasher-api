# Express Password Hasher API (MVC + Local MongoDB)

A simple but powerful **Node.js + Express** MVC web app that:
- Accepts a password through a webpage
- Hashes it securely using **bcrypt**
- Stores it in a **MongoDB** database 
- Displays the resulting hash and creation date

- 
# Structure
```
 express-mvc-hash-mongo-local/
│
├── controllers/
│   └── authController.js       
│
├── models/
│   └── userModel.js             
│
├── routes/
│   └── authRoutes.js            
│
├── views/
│   ├── layout.ejs               
│   ├── index.ejs                
│   └── result.ejs               
│
├── public/
│   └── style.css               
│
├── .env.example                 
├── .gitignore                   
├── package.json                 
├── server.js                    
└── README.md 
```
# Note: this structure writing was made with ai...
```
```


# Setup & Installation

# 1. Clone the Repository
```
bash
git clone github.com/OBORkaro123/Project-5-Password-hasher-api.git
cd express-mvc-hash-mongo-local
```
# 2. Install Dependencies
```

Bash
npm install
```
# 3. Configure Environment Variables
```
Copy .env.example → .env and fill in your details 
your choice of port
```
# 4. Run the App
```
Bash
npm start
or, if using nodemon:
Bash
npm run dev
Then open 👉 http://localhost:[Yourmport] 

```
# Features
 MVC structure (Model–View–Controller)
 Uses bcrypt for secure hashing
 Stores hashes in local MongoDB
 Simple, mobile-friendly UI (EJS templates)
 Fully GitHub-ready

 
# Tech Stack
 Node.js (v18+)
 Express.js
 bcrypt
 MongoDB 
 EJS
 dotenv
 body-parser


# How It Works
 User opens /
 Enters a password in the form
 The app hashes it using bcrypt
 Hash data are saved to MongoDB
 Result page displays:
 Hash value
 Database ID
 Timestamp

 
# Notes
 Works best with Node.js v18+
 Don’t expose stored hashes publicly
 Use this only for educational or development purposes

 
# License
 MIT © 2025  

 
# Author
 Created with ❤️ by [Obor Oghenekparobor Karo / OBORkaro123]
 GitHub: https://github.com/OBORkaro123 
