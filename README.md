# 🌐 Developer Portfolio API + Frontend

A minimal full-stack project that provides **REST APIs** to manage a developer’s profile (name, email, education, skills, projects, work experience, and links) along with a **React + Tailwind frontend** to:

- Search projects by skill  
- List all projects  
- View developer profile details  

---

## 🏗 Architecture

- **Backend:** Node.js + Express + MongoDB  
  - REST APIs for profile CRUD and search  
  - Query endpoints for skills and projects  
  - Health check endpoint  

- **Frontend:** React + TailwindCSS  
  - Minimal UI to search projects by skills  
  - Profile and project listing pages  

- **Data Model:** Profile includes nested arrays for `skills`, `projects`, and `work`  

---

## ⚙️ Setup

### 1. Local Setup

#### Clone repository

```bash
# clone repo
git clone https://github.com/junedmd/Assesment.git
cd Assesment

# install dependencies
npm install

### Backend 
cd server
npm start

### Frontend
cd client
npm run dev


---

## Enviromental Variable

### Create Env File server 

MONGO_URI= mongodb+srv://abdulqayyum3730:8U89jeGo478SEJEJ@cluster0.z3lmbpu.mongodb.net/assestment
PORT=5000

```

### Create Env File in client 
```
VITE_API_URL=https://assesment-93l5.onrender.com
```
--- 

### Production Setup

- **Backend:** Deployed on Render → [assesment-93l5.onrender.com](https://assesment-93l5.onrender.com)  
- **Frontend:** Deployed on Vercel → [assesment-ivory.vercel.app](https://assesment-ivory.vercel.app)  

```
---

### Schema

{
  "name": "Mohammad Juned",
  "email": "juned@example.com",
  "education": "B.Tech in Engineering",
  "skills": [
    { "name": "React", "level": "Advanced", "yearsOfExperience": 3 }
  ],
  "projects": [
    {
      "title": "Ott-Platform : MOVIES-HUB",
      "description": "Movie browsing & account management app",
      "link": [
        "https://github.com/junedmd/Movies",
        "https://movies-5aod.vercel.app/"
      ],
      "skills": ["React", "Node.js", "MongoDB", "Express.js"]
    }
  ],
  "work": [
    {
      "role": "Software Engineer",
      "company": "Infosys",
      "duration": "2023 - Present"
    }
  ],
  "links": {
    "github": "https://github.com/junedmd",
    "linkedin": "https://www.linkedin.com/in/mohammadjuned/",
    "portfolio": "https://juned.dev"
  }
}



---

```markdown
### Profile

- **POST** [`/api/profile`](https://assesment-93l5.onrender.com/api/profile) → Create profile  
- **GET** [`/api/profile`](https://assesment-93l5.onrender.com/api/profile) → Get profile  
- **PUT** [`/api/profile`](https://assesment-93l5.onrender.com/api/profile) → Update profile  

---

### Queries

- **GET** [`/api/projects?skill=React`](https://assesment-93l5.onrender.com/api/projects?skill=React) → Get projects by skill  
- **GET** [`/api/search?q=React`](https://assesment-93l5.onrender.com/api/search?q=React) → Search skills/projects/work  
- **GET** [`/api/skills/top`](https://assesment-93l5.onrender.com/api/skills/top) → Get top skills  
- **GET** [`/api/health`](https://assesment-93l5.onrender.com/api/health) → Health check  

---
### 🔗Live Demo

👉 [Frontend on Vercel](https://assesment-ivory.vercel.app)  
👉 [Backend on Render](https://assesment-93l5.onrender.com)  

📄 [My Resume](https://sapphire-lorrayne-98.tiiny.site)
