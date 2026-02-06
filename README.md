# Neon To-Do App Walkthrough

## Project Overview
This is a full-stack To-Do List application built with:
- **Frontend**: Vanilla HTML/CSS/JS (no frameworks)
- **Backend**: Node.js + Express
- **Database**: Neon (PostgreSQL)
- **Deployment**: Netlify Functions (Serverless)

## 🛠️ Local Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Ensure you have a `.env` file in the root directory:
```env
DATABASE_URL=postgresql://[user]:[password]@[host]/[dbname]?sslmode=require
```

### 3. Database Initialization
If you haven't already, create the table:
```bash
node init_db.js
```

### 4. Run Locally
```bash
npm start
```
The app will resolve to `http://localhost:3000`.

## ☁️ Deployment Guide (Netlify)

The project is configured for Netlify using `serverless-http`.

### Steps to Deploy
1.  **Push to GitHub**:
    ```bash
    git add .
    git commit -m "Ready for deploy"
    git push origin main
    ```
2.  **Import to Netlify**:
    - Log in to [Netlify](https://app.netlify.com/).
    - Click **"Add new site"** -> **"Import from existing project"**.
    - Select **GitHub** and choose your repository.
3.  **Configure Environment Variables**:
    - **Crucial Step**: In the Netlify deploy settings, find "Environment variables".
    - Add `DATABASE_URL` and paste your Neon connection string.
4.  **Deploy**:
    - Click **"Deploy site"**.

## 📂 Project Structure
- `index.html`: The main frontend file.
- `server.js`: Express backend logic (adapted for serverless).
- `netlify/functions/`: Adapter for Netlify Functions.
- `netlify.toml`: Netlify configuration.
- `init_db.js`: Helper script to set up the DB table.
