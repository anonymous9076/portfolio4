import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "../../components/AnimatedSection";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Page Title */}
        <AnimatedSection variant="slideUp">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4 text-gradient">About me</h1>
              <div className="gradient-line"></div>
            </Col>
          </Row>
        </AnimatedSection>

        {/* About Me Section */}
        <AnimatedSection variant="fadeIn" delay={0.2}>
          <Row className="sec_sp">
            <Col lg="5">
              <div className="section-badge">
                <span className="badge-icon">👨‍💻</span>
                <h3 className="section-title">{dataabout.title}</h3>
              </div>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div className="about-content">
                <p className="about-text">{dataabout.aboutme}</p>
                <p className="about-text">{dataabout.aboutme2}</p>
              </div>
            </Col>
          </Row>
        </AnimatedSection>

        {/* Work Timeline Section */}
        <AnimatedSection variant="slideUp" delay={0.3}>
          <Row className="sec_sp">
            <Col lg="5">
              <div className="section-badge">
                <span className="badge-icon">💼</span>
                <h3 className="section-title">Work Timeline</h3>
              </div>
            </Col>
            <Col lg="7">
              <motion.div
                className="timeline-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {worktimeline.map((data, i) => (
                  <AnimatedItem key={i}>
                    <motion.div
                      className="timeline-item glass-card"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="job-title">{data.jobtitle}</h4>
                        <p className="company-name">{data.where}</p>
                        <span className="job-date">{data.date}</span>
                      </div>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </motion.div>
            </Col>
          </Row>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection variant="slideUp" delay={0.4}>
          <Row className="sec_sp">
            <Col lg="5">
              <div className="section-badge">
                <span className="badge-icon">⚡</span>
                <h3 className="section-title">Skills</h3>
              </div>
            </Col>
            <Col lg="7">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skills.map((data, i) => (
                  <AnimatedItem key={i}>
                    <div className="skill-item">
                      <div className="skill-header">
                        <h3 className="skill-name">{data.name}</h3>
                        <motion.span
                          className="skill-percentage"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          {data.value}%
                        </motion.span>
                      </div>
                      <div className="progress-container">
                        <motion.div
                          className="progress-bar-modern"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${data.value}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + i * 0.1,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                        >
                          <div className="progress-glow"></div>
                        </motion.div>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </motion.div>
            </Col>
          </Row>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection variant="slideUp" delay={0.5}>
          <Row className="sec_sp pb-5">
            <Col lg="5">
              <div className="section-badge">
                <span className="badge-icon">🚀</span>
                <h3 className="section-title">Services</h3>
              </div>
            </Col>
            <Col lg="7">
              <motion.div
                className="services-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {services.map((data, i) => (
                  <AnimatedItem key={i}>
                    <motion.div
                      className="service-card glass-card"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="service-icon">
                        {i === 0 && "🎨"}
                        {i === 1 && "⚙️"}
                        {i === 2 && "💡"}
                        {i === 3 && "📝"}
                      </div>
                      <h5 className="service-title">{data.title}</h5>
                      <p className="service-description">{data.description}</p>
                      <div className="service-arrow">→</div>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </motion.div>
            </Col>
          </Row>
        </AnimatedSection>
      </Container>
    </HelmetProvider>
  );
};
