# 🏡 PlotNest — Property Listing Made Simple

**PlotNest** is a complete property listing web app built with the MERN stack (MongoDB, Express, React, Node.js).  
It’s made for anyone who wants an easier way to **list**, **search**, and **manage** properties — all in one place.

---

## 💡 The Problem I Wanted to Solve

People who post or find properties usually face problems like:
- Complicated upload forms  
- Messy layouts  
- Slow or confusing search options  

So I created **PlotNest**, a clean and easy platform where:
- 🏠 Sellers can upload their property listings with images  
- 🔍 Buyers can find properties fast with filters and search  
- 👨‍💼 Admins can control and manage listings safely  

---

## ⚙️ What PlotNest Can Do

✅ Create, update, and delete property listings  
🖼️ Upload multiple images (saved on Cloudinary)  
🔐 Log in and sign up securely using cookies (JWT)  
👤 User profile with all your listings  
🔎 Smart search with filters (offer, type, furnished, parking)  
📊 Sorting & pagination for better browsing  
🛠️ Admin panel to view all users and listings  
☁️ Fully deployed on **Vercel** (Frontend + Backend)

---

## 🧠 A Small Problem That Taught Me a Lot

When I deployed the app, everything worked locally —  
but after going live, users couldn’t log in or access protected pages.  
The issue was caused by **cookies and CORS (cross-origin rules)**.

### ✅ My Fixes
**Backend**
```js
res.cookie("token", token, {
  httpOnly: true,
  sameSite: "None",
  secure: process.env.NODE_ENV === "production",
});
```
- Added `httpOnly` for safety.  
- Used `sameSite: 'None'` and `secure: true` in production.  
- Made sure cookies are cleared using the same rules.

**Frontend**
```js
axios.defaults.withCredentials = true;
```
- Ensures every request sends login credentials properly.

**Middleware**
- Verified user login **before checking roles**.  
- Fixed ownership issues by converting ObjectIds to strings.

💡 **Lesson Learned:**  
Small cookie settings can silently break authentication after deployment.  
Fixing them early saves hours of debugging and keeps users happy.

---

## 🌍 Live Demo and Source Code

🔗 **Live App:** [https://plot-nest-estate.vercel.app](https://plot-nest-estate.vercel.app)  
💻 **GitHub Repo:** [https://github.com/Muteeb-Haider55/PlotNest](https://github.com/Muteeb-Haider55/PlotNest)

---

## 🧪 Run Locally

Make sure both backend and frontend use local URLs:

- `api/.env`
  - `FRONTEND_URL=http://localhost:5173`
  - `MONGO=...`
  - `JWT_SECRET=...`
- `client/.env`
  - `VITE_API_BASE_URL=http://localhost:3000`

Start both apps in separate terminals:

- Backend
  - `cd api`
  - `npm install`
  - `npm run dev`
- Frontend
  - `cd client`
  - `npm install`
  - `npm run dev`

If login/listing API calls fail locally, check that:
- backend is running on port `3000`
- frontend is running on port `5173`
- `FRONTEND_URL` has no trailing slash


---

## 📚 What I Learned

- Always test **authentication and cookies** after deployment.  
- Verify **ownership and admin roles** properly.  
- Clear cookies using the same attributes you set them with.  
- Small setup details can cause big issues in production.

---

## 💬 Final Note

If you’re building your own web app and face similar issues with login, cookies, or deployment —  
feel free to **check my repo** or **message me**.  
I also added a short checklist in the case study folder to help others avoid the same problem.

---

