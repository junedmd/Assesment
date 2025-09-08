import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; 

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api");
        setProfile(res.data.data);
        setProjects(res.data.data.projects); 
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);


  const handleSearch = async (query) => {
    if (!query) {
     
      setProjects(profile.projects);
      return;
    }
    try {
      const res = await axios.get(`http://localhost:5000/api/projects?${query}`);
      setProjects(res.data.data);
    } catch (err) {
      setProjects([]);
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  if (!profile) return <p className="text-center mt-10">No profile found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
     
      <Navbar onSearch={handleSearch} />

      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-gray-600">{profile.email}</p>
        <p className="text-gray-600">{profile.education}</p>
        <div className="flex justify-center gap-4 mt-2">
          {profile.links.github && (
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          )}
          {profile.links.portfolio && (
            <a href={profile.links.portfolio} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Portfolio
            </a>
          )}
        </div>
      </div>

   
      <div>
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <span key={skill._id} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              {skill.name} ({skill.level})
            </span>
          ))}
        </div>
      </div>

    
      <div>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {projects.length === 0 ? (
          <p className="text-gray-500 text-2xl ">No projects found with this Skill,Try with another skill</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <p className="mb-2"><strong>Skills:</strong> {project.skills.join(", ")}</p>
                <p className="flex flex-wrap gap-2">
                  <strong>Links:</strong>{" "}
                  {project.link.map((l, i) => (
                    <a key={i} href={l} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                      {l}
                    </a>
                  ))}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>


      <section className="max-w-4xl mx-auto mt-10 mb-16">
         <h2 className="text-2xl font-bold mb-4 text-gray-800">Work Experience</h2>
         <div className="grid md:grid-cols-2 gap-6">
           {profile.work.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold">Company:</span> {job.company}
              </p>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold">Duration:</span> {job.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

        


    </div>
  );
};

export default Profile;

