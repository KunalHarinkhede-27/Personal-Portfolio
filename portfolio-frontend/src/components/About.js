import React, { useEffect, useRef, useState } from 'react';
import '../App.css'; // Importing the CSS for styling
import myPhoto from '../assets/download.png'; // Import your photo

const About = () => {
  const [inView, setInView] = useState(false);
  const aboutCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Trigger animation when card is in view
          } else {
            setInView(false); // Reset animation when card goes out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the card is in view
    );

    if (aboutCardRef.current) {
      observer.observe(aboutCardRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (aboutCardRef.current) {
        observer.unobserve(aboutCardRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div
            className={`about-card ${inView ? 'in-view' : ''}`}
            ref={aboutCardRef}
          >
            <div className="about-image">
              <img src={myPhoto} alt="My Photo" />
            </div>
            <div className="about-text">
              <p>
                I'm a skilled <strong>MERN Stack Developer</strong> with
                experience in building dynamic web applications. Passionate about
                crafting efficient solutions and creating amazing user
                experiences, I specialize in designing scalable, responsive, and
                interactive front-end and back-end applications.
              </p>
              <p>
                I thrive on solving complex problems using technologies such as{' '}
                <strong>React, Node.js, Express.js, MongoDB</strong>, and I have a
                keen interest in <strong>Machine Learning</strong> and{' '}
                <strong>AI Development</strong>.
              </p>
              <h3>Skills & Expertise</h3>
              <ul>
                <li>React, Node.js, Express.js, MongoDB</li>
                <li>Python, JavaScript, Machine Learning (TensorFlow, scikit-learn)</li>
                <li>HTML, CSS, JavaScript (ES6+), Bootstrap, Tailwind CSS</li>
                <li>Git, GitHub, CI/CD Pipelines</li>
                <li>API Development, RESTful Services, GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
