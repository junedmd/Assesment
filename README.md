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
```

### Schema
```json
{
        "_id": "68bd709a7d344bf012df3b6a",
        "name": "Mohammad Juned Abdulqhayyum ",
        "email": "mohammadjuned074@gmail.com",
        "education": "M.Tech in Computer Science",
        "skills": [
            {
                "name": "JavaScript",
                "level": "Advanced",
                "yearsOfExperience": 4,
                "_id": "68bdb7117fc804a9c6660857"
            },
            {
                "name": "Python",
                "level": "Advanced",
                "yearsOfExperience": 3,
                "_id": "68bdb7117fc804a9c6660858"
            },
            {
                "name": "React",
                "level": "Advanced",
                "yearsOfExperience": 3,
                "_id": "68bdb7117fc804a9c6660859"
            },
            {
                "name": "Node.js",
                "level": "Intermediate",
                "yearsOfExperience": 2,
                "_id": "68bdb7117fc804a9c666085a"
            }
        ],
        "projects": [
            {
                "title": "Ott-Platform : MOVIES-HUB",
                "description": "The application allows users to browse movies, view detailed information, and manage accounts through login and signup features.",
                "link": [
                    "https://github.com/junedmd/Movies",
                    "https://movies-5aod.vercel.app/"
                ],
                "skills": [
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express.js"
                ],
                "_id": "68bdb7117fc804a9c666085b"
            },
            {
                "title": "This is Ecommerce",
                "description": "About  This is Ecommerce website build using MERNSTACK Technology.React frontend with filters, search, and product details",
                "link": [
                    "https://github.com/junedmd/deliveryapp",
                    "https://deliveryapp-mfnf.vercel.app/"
                ],
                "skills": [
                    "React",
                    "Node.js",
                    "MySQL",
                    "Express.js",
                    "Java"
                ],
                "_id": "68bdb7117fc804a9c666085c"
            },
            {
                "title": "Hotel Website",
                "description": "Hotel portfolio built with React and Tailwind CSS",
                "link": [
                    "https://github.com/junedmd/Hotel"
                ],
                "skills": [
                    "React",
                    "Java",
                    "Go",
                    "TypeScript",
                    "ML"
                ],
                "_id": "68bdb7117fc804a9c666085d"
            }
        ],
        "work": [
            {
                "company": "Idevify solutions pvt ltd",
                "role": "Software Engineer",
                "duration": "1.5 years",
                "_id": "68bdb7117fc804a9c666085e"
            }
        ],
        "links": {
            "github": "https://github.com/juned",
            "linkedin": "https://linkedin.com/in/juned",
            "portfolio": "https://juned.dev",
            "_id": "68bdb7117fc804a9c666085f"
        },
        "__v": 8,
        "updatedAt": "2025-09-07T16:47:13.963Z"
    }

```

---

markdown
### Profile Postman 

- **POST** [`http://localhost:5000/api/`](https://assesment-93l5.onrender.com/api) → Create profile  
- **GET** [`http://localhost:5000/api/`](https://assesment-93l5.onrender.com/api) → Get profile  
- **PUT** [`http://localhost:5000/api/`](https://assesment-93l5.onrender.com/api) → Update profile  

---

### Queries

- **GET** [`http://localhost:5000/api/projects?skill=React`](https://assesment-93l5.onrender.com/api/projects?skill=React) → Get projects by skill  
- **GET** [`http://localhost:5000/api/search?q=React`](https://assesment-93l5.onrender.com/api/search?q=React) → Search skills/projects/work  
- **GET** [`http://localhost:5000/api/skills/top`](https://assesment-93l5.onrender.com/api/skills/top) → Get top skills  
- **GET** [`http://localhost:5000/api/api/health`](https://assesment-93l5.onrender.com/api/health) → Health check  

---
### 🔗Live Demo

👉 [Frontend on Vercel](https://assesment-ivory.vercel.app)  
👉 [Backend on Render](https://assesment-93l5.onrender.com)  

📄 [My Resume](https://sapphire-lorrayne-98.tiiny.site)
