# 🍽️ YumReels – Food Reels Discovery Platform

YumReels is a social-media style web application inspired by Instagram Reels, built to enhance food discovery. Users can explore engaging food reels, interact with content, and visit food partner stores to discover the dishes they provide.

Features

Reel-scroll UI with smooth vertical video playback similar to Instagram Reels

Like and Save functionality for user engagement

Role-based features for User and Food Partner account types

Food Partners can upload, manage, and showcase food reels and their food items

Users can navigate from reels to Food Partner store pages showcasing available food items

Secure authentication using JWT with HttpOnly cookies

Responsive frontend optimized for fast media rendering

Tech Stack

| Category        | Technology                          |
| --------------- | ----------------------------------- |
| Frontend        | React (Vite), CSS                   |
| Backend         | Node.js, Express.js                 |
| Database        | MongoDB (Mongoose)                  |
| Auth            | JWT + HttpOnly Cookies              |
| Deployment      | Render (Backend), Vercel (Frontend) |
| Version Control | Git & GitHub                        |

System Architecture

Three main entities are implemented:

| Entity       | Description                                 |
| ------------ | ------------------------------------------- |
| User         | Views, likes, saves reels & visits stores   |
| Food Partner | Creates and manages food reels & food items |
| Food         | Food items displayed by food partners       |

Install Dependencies

Backend:

cd backend

npm install

npm start

Frontend:

cd frontend

npm install

npm run dev

Live Demo 
Frontend URL: zomato-food-reels-project.vercel.app
Backend API URL: https://zomato-foodreels.onrender.com

Future Enhancements

Comment feature on reels

Personalized reel recommendations

Push notifications

Analytics for Food Partners


