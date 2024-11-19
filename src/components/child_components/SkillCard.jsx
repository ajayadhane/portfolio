import React from "react";

const SkillCard = () => {
  const skills = [
    {
      name: "HTML",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "React.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Next.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      name: "GitHub",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    { name: "Material-UI", icon: "https://mui.com/static/logo.png" },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "Git",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-heading">
        Proven Expertise in Front-End Frameworks and Building Interactive User
        Interfaces
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="skill-icon"
            />
            <h3 className="skill-name">{skill.name}</h3>
            <div className="stars">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
