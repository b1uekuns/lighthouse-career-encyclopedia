import React from 'react';

const JobResults = ({ jobInfo, searchTerm, onBack }) => {
  if (!jobInfo) {
    return (
      <div className="no-results">
        <h2>No job information found</h2>
        <p>Sorry, we couldn't find any information for "{searchTerm}".</p>
        <button onClick={onBack} className="back-button">
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="job-results">
      <div className="results-container">
        <h1 className="job-title">{jobInfo.title}</h1>
        
        <div className="job-overview">
          <p className="job-description">{jobInfo.description}</p>
        </div>

        <div className="job-details-grid">
          <div className="detail-card">
            <h3>Company</h3>
            <p>{jobInfo.company}</p>
          </div>
          <div className="detail-card">
            <h3>Location</h3>
            <p>{jobInfo.location}</p>
          </div>
          <div className="detail-card">
            <h3>Salary Range</h3>
            <p>{jobInfo.salary}</p>
          </div>
        </div>

        <div className="job-sections">
          <div className="section">
            <h3>Required Skills</h3>
            <ul className="skills-list">
              {jobInfo.requirements?.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>Key Responsibilities</h3>
            <ul className="responsibilities-list">
              <li>Design and create visual concepts</li>
              <li>Collaborate with marketing teams</li>
              <li>Maintain brand consistency</li>
              <li>Meet project deadlines</li>
            </ul>
          </div>

          <div className="section">
            <h3>Career Path</h3>
            <div className="career-path">
              <div className="career-step">
                <div className="step-number">1</div>
                <div className="step-title">Junior Designer</div>
              </div>
              <div className="career-step">
                <div className="step-number">2</div>
                <div className="step-title">Senior Designer</div>
              </div>
              <div className="career-step">
                <div className="step-number">3</div>
                <div className="step-title">Art Director</div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Related Jobs</h3>
            <div className="related-jobs">
              <span className="related-job-tag">UI/UX Designer</span>
              <span className="related-job-tag">Web Designer</span>
              <span className="related-job-tag">Brand Designer</span>
              <span className="related-job-tag">Motion Graphics</span>
            </div>
          </div>
        </div>

        <button onClick={onBack} className="back-button">
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default JobResults;
