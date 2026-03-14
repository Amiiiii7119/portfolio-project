import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student - Computer Science (AI & ML)</h4>
                <h5>Dev Bhoomi Uttarakhand University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started B.Tech in Computer Science Engineering with specialization
              in Artificial Intelligence and Machine Learning. Built strong
              foundations in programming, data structures, databases, and
              problem solving while exploring AI technologies.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Software Development Projects</h4>
                <h5>Personal & Academic Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed multiple practical projects including AI-powered web
              applications, computer vision based games using OpenCV and
              MediaPipe, and intelligent systems integrating real-time
              interaction and automation.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Developer (Learning Phase)</h4>
                <h5>Independent Development & Hackathons</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently focusing on building advanced AI systems, real-time
              intelligent assistants, and scalable machine learning
              applications. Actively participating in hackathons and working
              toward building impactful AI solutions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;