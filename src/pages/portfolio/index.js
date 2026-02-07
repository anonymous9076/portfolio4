import React, { useState, useMemo } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "../../components/AnimatedSection";

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("list"); // 'grid' or 'list'

  // Get unique categories
  const categories = ["All", ...new Set(dataportfolio.map(item => item.category))];

  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    return dataportfolio.filter(project => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies?.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.fullDescription?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <HelmetProvider>
      <Container className="About-header portfolio-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Page Header */}
        <AnimatedSection variant="slideUp">
          <Row className="mb-4 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4 text-gradient">My Projects</h1>
              <div className="gradient-line"></div>
              <p className="portfolio-subtitle">
                A showcase of my recent work and creative endeavors
              </p>
            </Col>
          </Row>
        </AnimatedSection>

        {/* Filter and Search Bar */}
        <AnimatedSection variant="fadeIn" delay={0.2}>
          <div className="portfolio-controls">
            {/* Search Bar */}
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  className="clear-search"
                  onClick={() => setSearchQuery("")}
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Toggle */}
            <div className="view-toggle">
              <motion.button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="view-icon">⊞</span>
              </motion.button>
              <motion.button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="view-icon">☰</span>
              </motion.button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    className="category-underline"
                    layoutId="categoryUnderline"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Results Count */}
          <div className="results-count">
            Showing <span className="count-number">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <motion.div
          className={`portfolio-grid ${viewMode === "list" ? "list-view" : ""}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((data, i) => (
              <motion.div
                key={data.description}
                className={`portfolio-card ${viewMode === "list" ? "list-card" : ""}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                layout
              >
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <div className="card-image-wrapper">
                    <motion.img
                      src={data.img}
                      alt={data.description || `Project ${i + 1}`}
                      className="card-image"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="image-overlay">
                      <motion.div
                        className="view-project-btn"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        <span>View Project</span>
                        <span className="arrow-icon">→</span>
                      </motion.div>
                    </div>

                    {/* Category Badge */}
                    <div className="category-badge">{data.category}</div>
                  </div>

                  <div className="card-content">
                    <div className="project-header">
                      <div className="project-number">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="project-title">
                        {data.description || `Project ${i + 1}`}
                      </h3>
                    </div>

                    {/* Project Metadata */}
                    {(data.status || data.association || data.date) && (
                      <div className="project-metadata">
                        {data.status && (
                          <span className="metadata-badge status-badge">{data.status}</span>
                        )}
                        {data.association && (
                          <span className="metadata-badge association-badge">
                            🏢 {data.association}
                          </span>
                        )}
                        {data.date && (
                          <span className="metadata-badge date-badge">
                            📅 {data.date}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Project Description */}
                    {data.fullDescription && (
                      <p className="project-description">
                        {viewMode === "list"
                          ? data.fullDescription
                          : data.fullDescription.slice(0, 120) + "..."}
                      </p>
                    )}

                    {/* Technology Tags */}
                    {data.technologies && data.technologies.length > 0 && (
                      <div className="tech-tags">
                        {data.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}

                    <div className="project-link">
                      <span>Explore</span>
                      <motion.span
                        className="link-arrow"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  {/* Gradient Border Effect */}
                  <div className="card-border"></div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="no-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="no-results-icon">🔍</div>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <motion.button
              className="reset-btn modern-btn primary-btn"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset Filters
            </motion.button>
          </motion.div>
        )}

        {/* Stats Section */}
        <AnimatedSection variant="fadeIn" delay={0.5}>
          <div className="portfolio-stats">
            <motion.div
              className="stat-item glass-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-number text-gradient">{dataportfolio.length}+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>
            <motion.div
              className="stat-item glass-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-number text-gradient">{categories.length - 1}</div>
              <div className="stat-label">Categories</div>
            </motion.div>
            <motion.div
              className="stat-item glass-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-number text-gradient">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </HelmetProvider>
  );
};
