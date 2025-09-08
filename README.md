# Developer Portfolio API + Frontend
A minimal full-stack project that exposes APIs to manage a developer’s 
profile (name, email, education, skills, projects, work experience, and links) and a
simple frontend (React + Tailwind) to search projects by skill, list them, and view the profile.

----
## Architecture 

- **Backend:** Node.js + Express + MongoDB  
  - REST APIs for profile CRUD and search.  
  - Query endpoints for skills and projects.  
  - Health check endpoint.  

- **Frontend:** React + TailwindCSS  
  - Minimal UI to search projects by skills, list all projects, and view profile details.  

- **Data Model:** Profile contains nested arrays for `skills`, `projects`, and `work`.

-----

## ⚙️ Setup

### 1. Local Setup

#### Backend
```bash
# clone repo
git clone https://github.com/junedmd/Assesment.git
cd Assesment


# install dependencies
npm install

# Run backend
cd server && npm start

# Run frontend
cd client && npm run dev

#### Environment Variables and ENV.Files

#Server
deploy-link: https://assesment-ivory.vercel.app

#client
VITE_API_URL=https://assesment-93l5.onrender.com

#Production Setup

Backend: Deploy on Render:https://assesment-ivory.vercel.app

Frontend: Deploy on Vercel:https://assesment-ivory.vercel.app

## Schema
Profile:{
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
      "link": ["https://github.com/junedmd/Movies", "https://movies-5aod.vercel.app/"],
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

## Postman File Url

### Create, Get, and Update

-POST /api/profile :
   - http://localhost:5000/api OR https://assesment-93l5.onrender.com/api
-GET /api/profile :
   - http://localhost:5000/api OR https://assesment-93l5.onrender.com/api
-PUT /api/profile :
   -  http://localhost:5000/api OR https://assesment-93l5.onrender.com/api

### Queries

GET :/api/projects?skill=react → Get projects by skill
      - http://localhost:5000/api/search?q=React OR https://assesment-93l5.onrender.com/api/search?q=React
GET : /api/search?q=react → Search skills/projects/work
       -http://localhost:5000/api/search?q=React OR https://assesment-93l5.onrender.com/api/search?q=React
GET :/api/skills/top → Get top skills
      - http://localhost:5000/api/skills/top/ OR https://assesment-93l5.onrender.com/api/skills/top/
GET  :/api/health → Health check
      http://localhost:5000/api/health OR https://assesment-93l5.onrender.com/api/health






