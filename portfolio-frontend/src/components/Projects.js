import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import myPhoto from "../assets/amazonclone.jpg";

const Projects = () => {
  const projectsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Amazon Clone",
      description: "A fully functional Amazon Clone using MERN stack.",
      repo: "https://github.com/your-github-repo",
      img: myPhoto,
    },
    {
      title: "Portfolio Website",
      description: "A dynamic and interactive portfolio using React.",
      repo: "https://github.com/your-github-repo",
      img: myPhoto,
    },
    {
      title: "E-commerce Platform",
      description: "A scalable e-commerce platform with payment integration.",
      repo: "https://github.com/your-github-repo",
      img: myPhoto,
    },
    {
      title: "Social Media App",
      description: "A social media app with real-time chat and notifications.",
      repo: "https://github.com/your-github-repo",
      img: myPhoto,
    },
  ];

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <h2>Projects</h2>
      <div className={`projects-container ${visible ? "fade-in" : ""}`}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-content">
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
