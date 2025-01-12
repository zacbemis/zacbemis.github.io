import React, { FC } from 'react';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with React and TypeScript",
    image: "C:\Projects\Portfolio\zacbemis.github.io\src\assets\Screenshot 2025-01-11 204750.png",
    technologies: ["React", "TypeScript", "CSS Modules"],
    githubUrl: "https://github.com/zacbemis/zacbemis.github.io",
    liveUrl: "https://github.com/zacbemis/zacbemis.github.io"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Full-stack task management application with real-time updates",
    image: "/project2.jpg", // Add actual image path
    technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
    githubUrl: "https://github.com/yourusername/task-manager"
  },
  // Add more projects as needed
];

const Projects: FC = () => {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img 
                src={project.image} 
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map(tech => (
                  <span key={tech} className={styles.tag}>{tech}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View on GitHub
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 