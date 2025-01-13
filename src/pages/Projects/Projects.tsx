import { FC } from 'react';
import styles from './Projects.module.css';
import personalWebsiteImg from '../../assets/personalwebsite.png';
import pythonML from '../../assets/pythonML.png';

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
    image: personalWebsiteImg,
    technologies: ["React", "TypeScript", "CSS Modules"],
    githubUrl: "https://github.com/zacbemis/zacbemis.github.io",
  },
  {
    id: 2,
    title: "Predicting the Stock Market",
    description: "Python project that uses machine learning to predict the stock market",
    image: pythonML,
    technologies: ["Python", "Scikit-learn", "Matplotlib", "NumPy", "Pandas"],
    githubUrl: "https://github.com/zacbemis/VFA"
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