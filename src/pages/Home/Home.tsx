import { FC } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaReact, 
  FaDatabase, 
  FaPython, 
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGraduationCap
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import styles from './Home.module.css';

const skills = [
  { name: 'Java', icon: <FaJava className={styles.skillIcon} /> },
  { name: 'TypeScript', icon: <SiTypescript className={styles.skillIcon} /> },
  { name: 'JavaScript', icon: <FaJs className={styles.skillIcon} /> },
  { name: 'React', icon: <FaReact className={styles.skillIcon} /> },
  { name: 'SQL', icon: <FaDatabase className={styles.skillIcon} /> },
  { name: 'Python', icon: <FaPython className={styles.skillIcon} /> },
  { name: 'HTML5', icon: <FaHtml5 className={styles.skillIcon} /> },
  { name: 'CSS3', icon: <FaCss3Alt className={styles.skillIcon} /> },
  { name: 'Git', icon: <FaGitAlt className={styles.skillIcon} /> }
];

const featuredProjects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    path: "/projects"
  },
  {
    id: 2,
    title: "Task Management App",
    path: "/projects"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    path: "/projects"
  }
];

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Name Box - Large */}
        <div className={`${styles.box} ${styles.nameBox}`}>
          <h1>Zac Bemis</h1>
          <h2>Software Engineer</h2>
          <div className={styles.whoAmI}>
            <p>
              I am a software engineer and computer science student at California 
              State University, Sacramento, with a passion for using math and 
              statistics in conjunction with computer science. My goal 
              for my career is to grow into becoming a true expert in 
              software engineering and computer science. I also enjoy rock climbing, making music, 
              and cycling.
            </p>
          </div>
        </div>

        {/* Education Box */}
        <div className={`${styles.box} ${styles.educationBox}`}>
          <h2>
            <FaGraduationCap className={styles.educationIcon} />
            Education
          </h2>
          <div className={styles.educationContent}>
            <div className={styles.educationSection}>
              <div className={styles.educationItem}>
                <h3>Bachelor of Science</h3>
                <p>Computer Science</p>
                <p className={styles.educationMeta}>California State University, Sacramento • 2022-2026</p>
                <p className={styles.gpa}>GPA: 3.46/4.0</p>
              </div>
              <div className={styles.educationItem}>
                <h3>Relevant College Coursework</h3>
                <ul className={styles.courseList}>
                  <li>Data Structures & Algorithms</li>
                  <li>Software Engineering</li>
                  <li>linear Algebra</li>
                  <li>Statistics</li>
                </ul>
              </div>
            </div>
            <div className={styles.educationSection}>
              <div className={styles.educationItem}>
                <h3>High School Diploma</h3>
                <p>Pleasant Grove High School</p>
                <p className={styles.educationMeta}>2018-2022</p>
                <p className={styles.gpa}>GPA: 3.74/4.0</p>
              </div>
              <div className={styles.educationItem}>
                <h3>High School Activities</h3>
                <ul className={styles.courseList}>
                  <li>Physics Club</li>
                  <li>Varsity Baseball</li>
                  <li>Varsity Track</li>
                  <li>Varsity Football</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Box - Medium */}
        <div className={`${styles.box} ${styles.skillsBox}`}>
          <h2>Skills</h2>
          <div className={styles.skillTags}>
            {skills.map(skill => (
              <span key={skill.name}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Box - Medium */}
        <div className={`${styles.box} ${styles.projectsBox}`}>
          <h2>Projects</h2>
          <div className={styles.projectList}>
            {featuredProjects.map(project => (
              <Link 
                key={project.id}
                to={project.path} 
                className={styles.projectLink}
              >
                <span>{project.title}</span>
                <span className={styles.arrow}>→</span>
              </Link>
            ))}
          </div>
          <div className={styles.projectCount}>
            <span>5+</span>
            <p>Projects →</p>
          </div>
        </div>

        {/* Contact Box - Small */}
        <Link to="/contact" className={`${styles.box} ${styles.contactBox}`}>
          <h2>Contact</h2>
          <p>Let's connect →</p>
        </Link>

        {/* GitHub Box - Small */}
        <a 
          href="https://github.com/zacbemis"
          target="_blank" 
          rel="noopener noreferrer"
          className={`${styles.box} ${styles.githubBox}`}
        >
          <h2>GitHub</h2>
          <p>See my code →</p>
        </a>
      </div>
    </div>
  );
};

export default Home; 