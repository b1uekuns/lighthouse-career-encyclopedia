import React, { useState, useRef, useEffect } from "react";
import UniversityCourseSection from "./UniversityCourseSection";
import JobDescriptionSection from "./JobDescriptionSection";
import CompaniesSection from "./CompaniesSection";
import OpportunitiesSection from "./OpportunitiesSection";
import SharingSection from "./SharingSection";

const SearchResults = ({
  searchTerm,
  onSignUp,
  onSignIn,
  isAuthenticated = false,
}) => {
  const [activeTab, setActiveTab] = useState("job-description");
  const tabRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  // Normalize search term to identify the career
  const normalizedSearchTerm = searchTerm.toLowerCase();

  // Determine which career is being searched
  let currentCareer = null;
  if (normalizedSearchTerm === "graphic designer") {
    currentCareer = "graphic designer";
  } else if (normalizedSearchTerm === "accountant") {
    currentCareer = "accountant";
  } else if (normalizedSearchTerm === "general doctor") {
    currentCareer = "general doctor";
  } else if (normalizedSearchTerm === "software tester") {
    currentCareer = "software tester";
  } else if (normalizedSearchTerm === "contractor") {
    currentCareer = "contractor";
  }

  const tabs = [
    { id: "job-description", label: "Job description" },
    { id: "university-course", label: "University/Course" },
    { id: "companies", label: "Companies" },
    { id: "opportunities", label: "Opportunities" },
    { id: "sharing", label: "Sharing" },
  ];

  useEffect(() => {
    const idx = tabs.findIndex((tab) => tab.id === activeTab);
    const el = tabRefs.current[idx];
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft + "px",
        width: el.offsetWidth + "px",
      });
    }
  }, [activeTab, tabs]);

  return (
    <div
      className="search-results"
      style={{
        flex: 1,
        background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {/* Search Result Title */}
      <div
        className="result-title-section"
        style={{
          textAlign: "center",
          padding: "4rem 2rem 4rem",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            margin: 0,
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          "{currentCareer || normalizedSearchTerm}"
        </h1>
        {isAuthenticated && !currentCareer && (
          <div
            style={{
              color: "#dc2626",
              background: "#fee2e2",
              border: "1px solid #fca5a5",
              borderRadius: "8px",
              padding: "1rem 2rem",
              margin: "2rem auto 0 auto",
              maxWidth: 600,
              fontWeight: 600,
              fontSize: "1.1rem",
              display: "inline-block",
            }}
          >
            Sorry, we don't have data for that career.
            <br />
            Available careers:{" "}
            <b>
              Graphic Designer, Accountant, General Doctor, Software Tester,
              Contractor
            </b>
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <div
        className="tabs-section"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          padding: "0 2rem",
        }}
      >
        <div
          className="tabs-container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              className={`tab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              ref={(el) => (tabRefs.current[idx] = el)}
            >
              {tab.label}
            </button>
          ))}
          <div
            className="tab-underline"
            style={{
              width: underlineStyle.width,
              left: underlineStyle.left,
            }}
          />
        </div>
      </div>

      {/* Content Area */}
      <div
        className="content-section"
        style={{
          flex: 1,
          background: "#f8f9fa",
          padding: "2rem",
        }}
      >
        {isAuthenticated ? (
          currentCareer ? (
            <>
              {activeTab === "job-description" && (
                <JobDescriptionSection currentCareer={currentCareer} />
              )}
              {activeTab === "university-course" && (
                <UniversityCourseSection career={currentCareer} />
              )}
              {activeTab === "companies" && (
                <CompaniesSection currentCareer={currentCareer} />
              )}
              {activeTab === "opportunities" && (
                <OpportunitiesSection currentCareer={currentCareer} />
              )}
              {activeTab === "sharing" && (
                <SharingSection currentCareer={currentCareer} />
              )}
            </>
          ) : (
            <div style={{ color: "#374151", fontSize: "1.1rem" }}>
              Sorry, we don't have data for that career.
              <br />
              Available careers:{" "}
              <b>
                Graphic Designer, Accountant, General Doctor, Software Tester,
                Contractor
              </b>
            </div>
          )
        ) : (
          // Show login required message for all tabs
          <div
            className="login-required-content"
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1rem",
              }}
            >
              Create your account to get started!
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#6b7280",
                marginBottom: "2rem",
                lineHeight: "1.6",
              }}
            >
              Sign up to access detailed information about{" "}
              {activeTab.replace("-", " ")} for {searchTerm.toLowerCase()}.
            </p>

            <div
              className="cta-buttons"
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={onSignUp}
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
              >
                Sign Up Free
              </button>

              <button
                onClick={onSignIn}
                style={{
                  background: "transparent",
                  color: "#2563eb",
                  border: "2px solid #2563eb",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
