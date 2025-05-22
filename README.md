# ✨ PixelCrafter

Welcome to **PixelCrafter**, your gateway to AI-generated art!  
A modern web app built with **React**, **MongoDB**, **Razorpay**, and the magic of **ClipDrop API**. 🎨🤖

---

## 🌟 Features

- 🧠 **AI Image Generation** using [ClipDrop](https://clipdrop.co/)  
- 🔐 **Authentication System** (Signup/Login with JWT)  
- 🎁 **5 Free Credits** on signup for instant AI art  
- 💳 **Razorpay Payments** to top-up your credits  
- 📦 **MongoDB Integration** for securely storing user data & usage  
- ⚛️ **React Frontend** with a sleek and responsive interface  
- 🚀 **Fast & Fun** way to create stunning image with ease!

---

## 🕹️ How It Works

1. **Sign Up** → Get 5 credits instantly  
2. **Enter a prompt** → Let ClipDrop's AI work its magic  
3. **Download your art** or bask in its generative glory  
4. **Out of credits?** No worries — top-up instantly with Razorpay!

---

## 🧠 Tech Stack

| Layer        | Tech                   |
|-------------|------------------------|
| Frontend     | React (Vite)    |
| Backend      | Node.js, Express       |
| Database     | MongoDB + Mongoose     |
| AI API       | ClipDrop API           |
| Auth         | JWT                    |
| Payments     | Razorpay               |
| Hosting      | Vercel (Frontend,Backend)

---

## ⚙️ Requirements

- **Node.js** v14 or higher  
- **npm** or **yarn**  
- **MongoDB** URI (Atlas)  
- **ClipDrop API Key**  
- **Razorpay Key ID & Secret Key**

---

## 🔐 .env Configuration

Create a `.env` file in the root of your **backend** directory and add the following:

```env
MONGODB_URI="your_mongodb_connection_string"
JWT_SECRET="your_super_secret_key"
CLIPDROP_API="api_key"
RAZORPAY_KEY_ID="rzp_api_key"
RAZORPAY_KEY_SECRET="rzp_secret_key"
CURRENCY=INR

