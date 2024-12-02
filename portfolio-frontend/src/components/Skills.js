import React, { useEffect, useState, useRef } from "react";
import "../App.css";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(true);
          } else {
            setVisibleSkills(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "MERN Stack", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Java", level: 85 },
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div
                className={`skill-bar ${
                  visibleSkills ? "skill-bar-animate" : "skill-bar-reset"
                }`}
                style={{ width: `${visibleSkills ? skill.level : 0}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
