# <img src="https://github.com/Manmayarama/PixelCrafter/blob/main/client/src/assets/logo_icon.svg" alt="Logo" width="24" style="vertical-align: middle;"/> PixelCrafter

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
4. **Out of credits?** No worries top-up instantly with Razorpay!

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
- **MongoDB Atlas**  
- **ClipDrop API Key**  
- **Razorpay Key ID & Secret Key**

---

## 🛠️ Setup Instructions

To get PixelCrafter up and running on your local machine, follow these steps:

### 📥 Clone the repo

```bash
git clone [https://github.com/Manmayarama/PixelCrafter.git](https://github.com/Manmayarama/PixelCrafter.git)
cd PixelCrafter
```

## 📦 Install Dependencies

Navigate into the `client` and `server` directories to install their respective dependencies:

```bash
cd client && npm install      # Install frontend dependencies
cd server && npm install      # Install backend dependencies
```

## 🔐 .env Configuration

Create a `.env` file in the root of your **backend** directory and add the following:

```env
MONGODB_URI="your_mongodb_connection_string"
JWT_SECRET="your_super_secret_key"
CLIPDROP_API="api_key"
RAZORPAY_KEY_ID="rzp_api_key"
RAZORPAY_KEY_SECRET="rzp_secret_key"
CURRENCY=INR
```

## 🚀 Running the Application

### Start the Backend

From the `server` directory:

```bash
npm start
```
### Start the Frontend

From the `client` directory:

```bash
npm run dev
```
---

## 🖼️ Generated Images

Here are a few AI-generated images created using PixelCrafter:

<p align="center">
  <img src="https://github.com/Manmayarama/PixelCrafter/blob/main/client/src/assets/sample_img_1.png" alt="Generated Art 1" width="250"/>
  <img src="https://github.com/Manmayarama/PixelCrafter/blob/main/client/src/assets/sample_img_5.png" alt="Generated Art 2" width="250"/>
  <img src="https://github.com/Manmayarama/PixelCrafter/blob/main/client/src/assets/sample_img_2.png" alt="Generated Art 3" width="250"/>
</p>

---

## 📥 Try It

Try the live version:  
🔗 https://pixel-crafter-ai.vercel.app/

---
