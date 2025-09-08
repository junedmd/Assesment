import Profile from "../models/profile.js"


export const createProfile = async (req, res) => {
  try {
    const data = req.body;

   
    const alreadyProfile = await Profile.findOne({ email: data.email });
    if (alreadyProfile) {
      return res.status(400).json({ 
        success:false, 
        message: "Profile already exists" });
    }

  
     const profile = await Profile.create(data);
    

    res.status(201).json({
        success:true,
        data:profile,
        message:"Profile Created Scussesfully"

                });
  } catch (error) {
    res.status(500).json({ 
       success: false,
       message: error.message
       });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const data = req.body;

   
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    Object.keys(data).forEach(key => {
      profile[key] = data[key];
    });

    await profile.save();

    res.status(200).json({
      success: true,
      data: profile,
      message: "Profile updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
     
    });
  }
};



export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
      message: "Profile get successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      
    });
  }
};

// fetch project by skills 
export const fetchProjects = async (req, res) => {
  try {
   
     let requestedSkill = req.query.skill || Object.keys(req.query)[0];
    requestedSkill = requestedSkill ? requestedSkill.toLowerCase().trim() : null;


    const userProfile = await Profile.findOne();

    if (!userProfile) {
      return res.status(404).json({
        success: false,
        message: "No profile found in the database",
      });
    }

    let projectsList = userProfile.projects;

    if (requestedSkill) {
      projectsList = projectsList.filter(project =>
        project.skills?.some(skill =>
          skill.toLowerCase().trim() === requestedSkill
        )
      );

      if (projectsList.length === 0) {
        return res.status(404).json({
          success: false,
          message: `No projects found with skill '${requestedSkill}'`,
          data: []
        });
      }
    }

    res.status(200).json({
      success: true,
      data: projectsList,
      message: "Projects fetched successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


export const fetchTopSkills = async (req, res) => {
  try {
    const userProfile = await Profile.findOne();
    if (!userProfile) {
      return res.status(404).json({
        success: false,
        message: "Profile not available",
      });
    }

    const sortedSkills = [...userProfile.skills].sort(
      (a, b) => b.yearsOfExperience - a.yearsOfExperience
    );

    const topThreeSkills = sortedSkills.slice(0, 3);

    res.status(200).json({
      success: true,
      data: topThreeSkills,
      message: "Top skills retrieved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
     
    });
  }
};




export const searchProfileData = async (req, res) => {
  try {
    const queryTerm = req.query.q?.toLowerCase();
    const userProfile = await Profile.findOne();
    
         const matchedSkills = userProfile.skills.filter(skill =>
      skill.name.toLowerCase().includes(queryTerm)
    );


    const matchedProjects = userProfile.projects.filter(project =>
       project.title.toLowerCase().includes(queryTerm) ||
      project.description.toLowerCase().includes(queryTerm) ||
        project.skills.some(skill => skill.toLowerCase().includes(queryTerm))
    );

   
    const matchedWork = userProfile.work.filter(job =>
      job.role.toLowerCase().includes(queryTerm) ||
      job.company.toLowerCase().includes(queryTerm)
    );


    res.status(200).json({
      success: true,
      data: {
        skills: matchedSkills,
        projects: matchedProjects,
        work: matchedWork
      },
      message: "Search results found",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


export const checkHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running smoothly",
    data: { uptime: `${process.uptime()}s` },
  });
};