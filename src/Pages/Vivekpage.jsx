import React from "react";
import "./Vivekpage.css";

const Vivekpage = () => {
  return (
    <div className="vivek-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Vivek</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>Vivek Rao</h1>

          <h2>Data Analyst & Data Science Enthusiast</h2>

          <p className="hero-description">
            I am passionate about Data Analytics, Python, SQL,
            Machine Learning and building data-driven applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">
            VR
          </div>

          <h3>Vivek Rao</h3>
          <p>Data & Technology</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-title">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <p className="about-text">
          I am a Computer Science and Engineering student with a strong
          interest in Data Analytics and Data Science. I enjoy working
          with Python, SQL, databases and visualization tools to convert
          raw data into meaningful insights.
        </p>

        <p className="about-text">
          I am also exploring Machine Learning, Generative AI,
          Agentic AI, RAG and modern data engineering technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-title">
          <span>02</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Python</h3>
            <p>Pandas, NumPy, Matplotlib</p>
          </div>

          <div className="skill-card">
            <h3>SQL</h3>
            <p>Queries, Joins, Subqueries, Windows</p>
          </div>

          <div className="skill-card">
            <h3>Power BI</h3>
            <p>Dashboards, DAX, KPIs & Visualization</p>
          </div>

          <div className="skill-card">
            <h3>Data Engineering</h3>
            <p>PySpark, Apache Spark, ETL Pipelines</p>
          </div>

          <div className="skill-card">
            <h3>Machine Learning</h3>
            <p>ML Fundamentals & Data Preprocessing</p>
          </div>

          <div className="skill-card">
            <h3>Generative AI</h3>
            <p>LLMs, RAG & AI Applications</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-title">
          <span>03</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Google Play Store Analytics</h3>

            <p>
              Interactive analytics dashboard built using Python,
              Pandas and Streamlit to analyze applications,
              ratings, installs and categories.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Streamlit</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h3>AutoVision Used Car Analytics</h3>

            <p>
              Used-car analytics dashboard for exploring car prices,
              brands, locations and other vehicle-related insights.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Plotly</span>
              <span>Streamlit</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>AI Chatbot</h3>

            <p>
              AI-powered conversational application using modern
              LLM technologies and a Streamlit interface.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>LLM</span>
              <span>Streamlit</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="section-title">
          <span>04</span>
          <h2>Let's Connect</h2>
        </div>

        <p>
          Interested in data, technology and AI? Feel free to connect
          with me.
        </p>

        <div className="contact-buttons">
          <a href="mailto:your-email@example.com">
            Email Me
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Vivek Rao. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Vivekpage;