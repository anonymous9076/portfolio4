import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, skills, services, dataportfolio, worktimeline } from "../../content_option";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "../../components/AnimatedSection";

export const Home = () => {
  const fileId = "1vXeBjVfO3_bBo4Tdwk4oVhcJ5e1uUAqu";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Interactive skill badges
  const topSkills = skills.slice(0, 6);
  const featuredProjects = dataportfolio.slice(0, 3);

  return (
    <HelmetProvider>
      <section id="home" className="home-interactive">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Interactive Background */}
        <div className="interactive-background">
          <motion.div
            className="gradient-sphere sphere-1"
            animate={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
          <motion.div
            className="gradient-sphere sphere-2"
            animate={{
              x: -mousePosition.x * 0.3,
              y: -mousePosition.y * 0.3,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
          <motion.div
            className="gradient-sphere sphere-3"
            animate={{
              x: mousePosition.x * 0.2,
              y: -mousePosition.y * 0.4,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>

        {/* HERO SECTION */}
        <div className="home-content-wrapper">
          {/* Main Content */}
          <div className="main-content">
            <motion.div
              className="intro-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="greeting-badge">
                <span className="wave">👋</span> Hello, I'm
              </motion.div>

              <motion.h2 variants={itemVariants} className="name-title">
                {introdata.title}
              </motion.h2>

              <motion.h1 variants={itemVariants} className="role-title">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </motion.h1>

              <motion.p variants={itemVariants} className="description-text">
                {introdata.description}
              </motion.p>

              <motion.div variants={itemVariants} className="intro_btn-action">
                <motion.div
                  id="button_p"
                  onClick={handleDownload}
                  className="modern-btn primary-btn"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="btn-text">Download Resume</span>
                  <span className="btn-icon">📄</span>
                </motion.div>

                <Link to="/contact">
                  <motion.div
                    id="button_h"
                    className="modern-btn secondary-btn"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="btn-text">Contact Me</span>
                    <span className="btn-icon">💬</span>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Interactive Skills Section */}
              <motion.div
                variants={itemVariants}
                className="interactive-skills"
              >
                <p className="skills-label">Tech Stack</p>
                <div className="skills-container">
                  {topSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className={`skill-badge ${hoveredSkill === index ? 'active' : ''}`}
                      onHoverStart={() => setHoveredSkill(index)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <span className="skill-name">{skill.name}</span>
                      <motion.div
                        className="skill-level"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredSkill === index ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.value}%
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.5,
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="scroll-arrow">↓</div>
                <span>Scroll to explore</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Code Display */}
          <div className="interactive-code-section">
            <motion.div
              className="code-window glass-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-title">portfolio.js</span>
              </div>
              <div className="code-content">
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <code>
                    {`const developer = {
  name: "${introdata.title.replace("I'm ", "")}",
  skills: [${topSkills.slice(0, 3).map(s => `"${s.name}"`).join(', ')}],
  passion: "Building amazing web experiences",
  
  getStatus() {
    return "Available for opportunities";
  },
  
  contact() {
    return "Let's work together! 🚀";
  }
};

console.log(developer.getStatus());
// → "Available for opportunities"`}
                  </code>
                </motion.pre>
              </div>
            </motion.div>

            {/* Floating Stats */}
            <div className="floating-stats">
              <motion.div
                className="stat-card glass-card"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="stat-number text-gradient">2+</div>
                <div className="stat-label">Years Experience</div>
              </motion.div>
              <motion.div
                className="stat-card glass-card"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="stat-number text-gradient">10+</div>
                <div className="stat-label">Projects Completed</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Code Symbols */}
        <motion.div
          className="floating-element element-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-symbol">{"</>"}</div>
        </motion.div>

        <motion.div
          className="floating-element element-2"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-symbol">{"{ }"}</div>
        </motion.div>

        <motion.div
          className="floating-element element-3"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-symbol">{"[ ]"}</div>
        </motion.div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <AnimatedSection variant="fadeIn" className="featured-projects-section">
        <div className="section-container">
          <div className="section-header">
            <motion.h2
              className="section-title text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Check out some of my recent work
            </motion.p>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <AnimatedItem key={index}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-card glass-card"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="featured-image-wrapper">
                    <img src={project.img} alt={project.description || `Project ${index + 1}`} />
                    <div className="featured-overlay">
                      <span className="view-project">View Project →</span>
                    </div>
                  </div>
                  <div className="featured-content">
                    <h3 className="featured-title">{project.description || `Project ${index + 1}`}</h3>
                    <div className="featured-tags">
                      <span className="tag">Web Design</span>
                      <span className="tag">Development</span>
                    </div>
                  </div>
                </motion.a>
              </AnimatedItem>
            ))}
          </div>

          <motion.div
            className="view-all-btn-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/portfolio">
              <motion.button
                className="modern-btn secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* SERVICES/EXPERTISE SECTION */}
      <AnimatedSection variant="slideUp" className="services-section">
        <div className="section-container">
          <div className="section-header">
            <motion.h2
              className="section-title text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What I Do
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Specialized services to bring your ideas to life
            </motion.p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="service-card-home glass-card"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="service-icon-wrapper">
                    <span className="service-emoji">
                      {index === 0 && "🎨"}
                      {index === 1 && "⚙️"}
                      {index === 2 && "💡"}
                      {index === 3 && "📝"}
                    </span>
                  </div>
                  <h3 className="service-title-home">{service.title}</h3>
                  <p className="service-desc-home">{service.description.slice(0, 120)}...</p>
                  <motion.div
                    className="service-arrow-home"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* EXPERIENCE TIMELINE SECTION */}
      <AnimatedSection variant="fadeIn" className="experience-section">
        <div className="section-container">
          <div className="section-header">
            <motion.h2
              className="section-title text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Professional Journey
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              My career path and achievements
            </motion.p>
          </div>

          <div className="timeline-wrapper">
            {worktimeline.map((work, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  className="timeline-card-home glass-card"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="timeline-marker-home"></div>
                  <div className="timeline-content-home">
                    <span className="timeline-date">{work.date}</span>
                    <h3 className="timeline-title">{work.jobtitle}</h3>
                    <p className="timeline-company">{work.where}</p>

                    {work.location && (
                      <p className="timeline-location">📍 {work.location}</p>
                    )}

                    {work.employmentType && (
                      <span className="timeline-employment-type">{work.employmentType}</span>
                    )}

                    <p className="timeline-description">{work.description}</p>

                    {work.responsibilities && work.responsibilities.length > 0 && (
                      <div className="timeline-responsibilities">
                        <h4 className="timeline-section-title">Responsibilities & Skills:</h4>
                        <ul className="timeline-list">
                          {work.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {work.techStack && work.techStack.length > 0 && (
                      <div className="timeline-tech-stack">
                        <h4 className="timeline-section-title">Tech Stack:</h4>
                        <div className="timeline-tags">
                          {work.techStack.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CALL TO ACTION SECTION */}
      <AnimatedSection variant="scale" className="cta-section">
        <div className="section-container">
          <motion.div
            className="cta-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-content">
              <motion.h2
                className="cta-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Let's Build Something Amazing Together
              </motion.h2>
              <motion.p
                className="cta-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </motion.p>
              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact">
                  <motion.button
                    className="modern-btn primary-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="btn-text">Get In Touch</span>
                    <span className="btn-icon">🚀</span>
                  </motion.button>
                </Link>
                <Link to="/portfolio">
                  <motion.button
                    className="modern-btn secondary-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="btn-text">View My Work</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="cta-decoration">
              <motion.div
                className="cta-circle circle-1"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="cta-circle circle-2"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </HelmetProvider>
  );
};
