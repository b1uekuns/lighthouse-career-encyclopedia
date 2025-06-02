import { useState } from "react";
import { jobData } from "../data/jobData";

// University/Course Section Component
const UniversityCourseSection = () => {
  return (
    <div
      className="university-course-content helvetica-content"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        background: "#f8f9fa",
        padding: "0",
      }}
    >
      {/* Both University and Course content side by side */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "4rem",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* University Section */}
        <div style={{ width: "45%", position: "relative" }}>
          {/* University Label */}
          <div
            style={{
              background: "transparent",
              border: "3px dashed #2563eb",
              color: "#2563eb",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "1.5rem",
              margin: "0 auto 1.5rem auto",
              width: "140px",
            }}
          >
            University
          </div>

          <div
            style={{
              background: "white",
              padding: "2.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              minHeight: "140px",
            }}
          >
            <img
              src="/images/uifa-logo.png"
              alt="University of Industrial Fine Arts"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            <div>
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "0.75rem",
                  lineHeight: "1.3",
                  fontFamily: "'Helvetica World', 'Helvetica', 'Arial', sans-serif",
                }}
              >
                University of Industrial Fine Arts
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  color: "#6b7280",
                  fontSize: "1rem",
                  fontFamily: "'Helvetica World', 'Helvetica', 'Arial', sans-serif",
                }}
              >
                <span style={{ marginTop: "0.1rem" }}>📍</span>
                <span>
                  No. 360 La Thanh Street, O Cho Dua Ward, Dong Da District, Hanoi, Vietnam
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Course Section */}
        <div style={{ width: "45%", position: "relative" }}>
          {/* Course Label */}
          <div
            style={{
              background: "transparent",
              border: "3px dashed #2563eb",
              color: "#2563eb",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "1.5rem",
              margin: "0 auto 1.5rem auto",
              width: "140px",
            }}
          >
            Course
          </div>

          <div
            style={{
              background: "white",
              padding: "2.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              minHeight: "140px",
            }}
          >
            <img
              src="/images/green-academy-logo.png"
              alt="Green Academy"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            <div>
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "0.75rem",
                  lineHeight: "1.3",
                  fontFamily: "'Helvetica World', 'Helvetica', 'Arial', sans-serif",
                }}
              >
                Green Academy
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  color: "#6b7280",
                  fontSize: "1rem",
                  fontFamily: "'Helvetica World', 'Helvetica', 'Arial', sans-serif",
                }}
              >
                <span style={{ marginTop: "0.1rem" }}>📍</span>
                <span>
                  No. 94C Cao Thang, Ward 4, District 3, HCMC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchResults = ({ searchTerm, onSignUp, onSignIn, isAuthenticated = false }) => {
  const [activeTab, setActiveTab] = useState("job-description");

  // Get job data for the current search term
  const currentJobData = jobData[searchTerm.toLowerCase()];

  const tabs = [
    { id: "job-description", label: "Job description" },
    { id: "university-course", label: "University/Course" },
    { id: "companies", label: "Companies" },
    { id: "opportunities", label: "Opportunities" },
    { id: "sharing", label: "Sharing" },
  ];

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
          "{searchTerm}"
        </h1>
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
            display: "flex",
            gap: "2rem",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "transparent",
                border: "none",
                color:
                  activeTab === tab.id ? "white" : "rgba(255, 255, 255, 0.7)",
                fontSize: "1rem",
                fontWeight: activeTab === tab.id ? "600" : "400",
                padding: "1rem 0",
                cursor: "pointer",
                borderBottom:
                  activeTab === tab.id
                    ? "3px solid white"
                    : "3px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
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
          // Show content based on active tab when user is authenticated
          <>
            {activeTab === "job-description" && currentJobData && (
          <div
            className="job-description-content"
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* First Section - Description */}
            <div
              style={{
                display: "flex",
                gap: "3rem",
                alignItems: "flex-start",
                marginBottom: "3rem",
              }}
            >
              {/* Left Column - Text Content */}
              <div
                className="description-text"
                style={{
                  flex: "1",
                  background: "white",
                  padding: "2rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: "1.5rem",
                    borderBottom: "2px solid #2563eb",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Description:
                </h3>

                <div style={{ color: "#374151", lineHeight: "1.8" }}>
                  <p style={{ marginBottom: "1.5rem" }}>
                    • Graphic design is a form of communication that uses colors, shapes, images,
                    and words to create visual content that surrounds us in many forms -
                    namely, print and digital media. Effective designs communicate information
                    that inspires and informs consumers, making it critical for any business'
                    success.
                  </p>

                  <p style={{ marginBottom: "0" }}>
                    • Therefore, graphic designers are experienced personnel, sharp thinking in
                    the field of image creation, design innovation related to color coordination to
                    bring high aesthetics to each product. At the specialist level, you not only
                    directly create the product but also supervise, direct, and guide graphic
                    design staff to implement ideas accurately, according to orders, and without
                    duplication.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div
                className="description-image"
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/images/job-description-1.png"
                  alt="Graphic Design Workspace"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                />
              </div>
            </div>

            {/* Second Section - Image Left, Content Right */}
            <div
              style={{
                display: "flex",
                gap: "3rem",
                alignItems: "flex-start",
              }}
            >
              {/* Left Column - Image and Salary */}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <img
                  src="/images/job-description-2.png"
                  alt="Graphic Design Tools and Color Palette"
                  style={{
                    width: "100%",
                    height: "420px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                />

                {/* Average Salary Box */}
                <div
                  style={{
                    border: "2px solid #fbbf24",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    background: "#fffbeb",
                  }}
                >
                  <h4
                    style={{
                      color: "#2563eb",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                    }}
                  >
                    Average Salary
                  </h4>
                  <p
                    style={{
                      color: "#374151",
                      lineHeight: "1.6",
                      margin: "0",
                      fontSize: "0.95rem",
                    }}
                  >
                    • The salary of a graphic designer in Vietnam ranges from 8-10 million VND/month for new
                    employees, up to 15-20 million VND/month for those with 2-3 years of experience. The salary of
                    designers with 5 years of experience or more can be higher, from 15-20 million VND/month or
                    even higher.
                  </p>
                </div>
              </div>

              {/* Right Column - Content */}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                {/* Additional Description */}
                <div style={{ color: "#374151", lineHeight: "1.8" }}>
                  <p style={{ marginBottom: "1.5rem" }}>
                    • With the description above, a graphic design mainly depends on needs'
                    client and company, but generally their responsibilities may include
                    developing visual assets to support a marketing campaign, design a graphic
                    overlay for social media posts, or formalise a print ad layout and retouch
                    photos for digital signage.
                  </p>

                  <p style={{ marginBottom: "0" }}>
                    • Because their works are very diversified and flexible so graphic designers
                    can work in many settings. They can work in a company or agency or at
                    home as a freelancer. At present, graphic designers often work in ad
                    agencies, web design firms, marketing firms, print and online publishers,
                    online and brick - and - mortar retailers, non - profit organizations,...
                  </p>
                </div>

                {/* Skills Section */}
                <div>
                  <div
                    style={{
                      background: "#2563eb",
                      color: "white",
                      padding: "1rem",
                      borderRadius: "25px",
                      textAlign: "center",
                      marginBottom: "1.5rem",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                    }}
                  >
                    Skills you may need to become a graphic designer:
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1.2rem",
                    }}
                  >
                    {[
                      "Color theory",
                      "Computer - aided design software",
                      "Audience targeting",
                      "Computerised sketching",
                      "Communication Skill"
                    ].map((skill, index) => (
                      <div
                        key={index}
                        style={{
                          background: "#2563eb",
                          color: "white",
                          padding: "1rem 1.3rem",
                          borderRadius: "20px",
                          textAlign: "center",
                          fontSize: "0.95rem",
                          fontWeight: "500",
                          minHeight: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
            )}

            {activeTab === "university-course" && (
              <UniversityCourseSection />
            )}

            {activeTab === "companies" && (
              <div
                className="companies-content helvetica-content"
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  background: "white",
                  padding: "2rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Companies Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                    marginTop: "1.5rem",
                  }}
                >
                  {/* Ogilvy Vietnam */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1.5rem",
                      borderRadius: "8px",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="/images/ogilvy-logo.png"
                        alt="Ogilvy Logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#1f2937",
                          marginBottom: "0.5rem",
                          fontFamily: "'Helvetica World', 'Helvetica', 'Arial', sans-serif",
                        }}
                      >
                        Ogilvy Vietnam
                      </h4>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: "0.1rem" }}>📍</span>
                        <p
                          style={{
                            color: "#6b7280",
                            fontSize: "0.9rem",
                            lineHeight: "1.4",
                            margin: 0,
                            fontFamily: "'Helvetica World', 'Helvetica', 'Arial', sans-serif",
                          }}
                        >
                          12th Floor 72-74 Nguyen Thi Minh Khai Street District 3, Ho Chi Minh City, Vietnam, Ho Chi Minh City, Vietnam
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Leo Burnett */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1.5rem",
                      borderRadius: "8px",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="/images/leo-burnett-logo.png"
                        alt="Leo Burnett Logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#1f2937",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Leo Burnett
                      </h4>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: "0.1rem" }}>📍</span>
                        <p
                          style={{
                            color: "#6b7280",
                            fontSize: "0.9rem",
                            lineHeight: "1.4",
                            margin: 0,
                          }}
                        >
                          6th and 7th Floor E-town Central, 11 Doan Van Bo, District 4, Ho Chi Minh City, Vietnam
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* VNG Corporation */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1.5rem",
                      borderRadius: "8px",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="/images/vng-logo.png"
                        alt="VNG Logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#1f2937",
                          marginBottom: "0.5rem",
                        }}
                      >
                        VNG Corporation
                      </h4>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: "0.1rem" }}>📍</span>
                        <p
                          style={{
                            color: "#6b7280",
                            fontSize: "0.9rem",
                            lineHeight: "1.4",
                            margin: 0,
                          }}
                        >
                          Z06, Street No. 13, Tan Thuan Dong Ward, District 7, Ho Chi Minh City.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FPT Software */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1.5rem",
                      borderRadius: "8px",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="/images/fpt-software-logo.png"
                        alt="FPT Software Logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#1f2937",
                          marginBottom: "0.5rem",
                        }}
                      >
                        FPT Software
                      </h4>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: "0.1rem" }}>📍</span>
                        <p
                          style={{
                            color: "#6b7280",
                            fontSize: "0.9rem",
                            lineHeight: "1.4",
                            margin: 0,
                          }}
                        >
                          Lot T2, D1 Street, Saigon Hi-Tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Vietnam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "opportunities" && (
              <div
                className="opportunities-content helvetica-content"
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  display: "flex",
                  gap: "2rem",
                  padding: "2rem 0",
                }}
              >
                {/* Scholarships Section */}
                <div
                  style={{
                    flex: 1,
                    background: "white",
                    padding: "2rem",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      padding: "1rem",
                      border: "2px dashed #2563eb",
                      borderRadius: "8px",
                      color: "#2563eb",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Scholarships
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {/* WCADC Visual Arts Scholarship */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        padding: "1.5rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        backgroundColor: "#f9fafb",
                      }}
                    >
                      <img
                        src="/images/wcadc-logo.png"
                        alt="WCADC Logo"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#1f2937",
                            marginBottom: "0.5rem",
                          }}
                        >
                          WCADC Visual Arts Scholarship
                        </h4>
                      </div>
                    </div>

                    {/* INAX Talent of Promise Scholarship */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        padding: "1.5rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        backgroundColor: "#f9fafb",
                      }}
                    >
                      <img
                        src="/images/inax-logo.png"
                        alt="INAX Logo"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                          backgroundColor: "#f3f4f6",
                          padding: "8px",
                          borderRadius: "4px",
                        }}
                        onError={(e) => {
                          console.log("INAX logo failed to load");
                          e.target.style.display = "none";
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#1f2937",
                            marginBottom: "0.5rem",
                          }}
                        >
                          INAX Talent of Promise Scholarship
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recruitment Section */}
                <div
                  style={{
                    flex: 1,
                    background: "white",
                    padding: "2rem",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      padding: "1rem",
                      border: "2px dashed #2563eb",
                      borderRadius: "8px",
                      color: "#2563eb",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Recruitment
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {/* Vietnam Catbox Limited Liability Company */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        padding: "1.5rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        backgroundColor: "#f9fafb",
                      }}
                    >
                      <img
                        src="/images/vietnam-catbox-logo.png"
                        alt="Vietnam Catbox Logo"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#1f2937",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Vietnam Catbox Limited Liability Company
                        </h4>
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#6b7280",
                            margin: 0,
                          }}
                        >
                          Design and Media Marketing
                        </p>
                      </div>
                    </div>

                    {/* Kami Technology and Service Joint Stock Company */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        padding: "1.5rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        backgroundColor: "#f9fafb",
                      }}
                    >
                      <img
                        src="/images/kami-logo.png"
                        alt="Kami Logo"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#1f2937",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Kami Technology and Service Joint Stock Company
                        </h4>
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#6b7280",
                            margin: 0,
                          }}
                        >
                          Graphic designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "sharing" && (
              <div
                className="sharing-content"
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  padding: "2rem",
                }}
              >


                {/* Experience Header */}
                <div style={{ marginBottom: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#2563eb",
                      marginBottom: "1rem",
                    }}
                  >
                    Experience
                  </h2>

                  {/* Profile Info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      👤
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#1f2937",
                          margin: "0",
                        }}
                      >
                        Mr. Duong Anh Hao
                      </h3>
                      <div style={{ display: "flex", gap: "2px", margin: "4px 0" }}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: "#fbbf24", fontSize: "1rem" }}>
                            ⭐
                          </span>
                        ))}
                      </div>
                      <p style={{ margin: "0", color: "#2563eb", fontSize: "0.9rem" }}>
                        Portfolio:{" "}
                        <a
                          href="https://www.behance.net/anhhao.duong"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#2563eb", textDecoration: "underline" }}
                        >
                          https://www.behance.net/anhhao.duong
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Two Column Layout */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                    marginTop: "2rem",
                  }}
                >
                  {/* Profile Section */}
                  <div
                    style={{
                      background: "white",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      border: "2px solid #000",
                      position: "relative",
                    }}
                  >
                    {/* Profile Tab */}
                    <div
                      style={{
                        background: "#2563eb",
                        color: "white",
                        padding: "0.5rem 1.5rem",
                        position: "absolute",
                        top: "-2px",
                        left: "1rem",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
                      }}
                    >
                      Profile
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                        <li style={{ marginBottom: "0.8rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Former student of the University of Architecture Ho Chi Minh
                        </li>
                        <li style={{ marginBottom: "0.8rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Founder of DAH Creative Studio – a boutique design agency serving clients in Vietnam and Southeast Asia.
                        </li>
                        <li style={{ marginBottom: "0.8rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Senior Visual Designer – Tiki Corporation (2016–2019)
                        </li>
                        <li style={{ marginBottom: "0.8rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Graphic Designer – Lighthouse (2020 - now)
                        </li>
                        <li style={{ marginBottom: "0.8rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Winner – Vietnam Young Design Awards 2017
                        </li>
                        <li style={{ marginBottom: "1.5rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Top 10 Finalist – A' Design Award & Competition (Italy) 2019
                        </li>
                      </ul>

                      <h4
                        style={{
                          color: "#2563eb",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          marginBottom: "0.8rem",
                        }}
                      >
                        Specialties
                      </h4>
                      <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                        <li style={{ marginBottom: "0.5rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Brand Identity Design
                        </li>
                        <li style={{ marginBottom: "0.5rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • UX/UI Design for web & mobile
                        </li>
                        <li style={{ marginBottom: "0.5rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Motion Graphics & Interactive Media
                        </li>
                        <li style={{ marginBottom: "0", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • Design Thinking & Creative Strategy
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Sharing Section */}
                  <div
                    style={{
                      background: "white",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      border: "2px solid #000",
                      position: "relative",
                    }}
                  >
                    {/* Sharing Tab */}
                    <div
                      style={{
                        background: "#2563eb",
                        color: "white",
                        padding: "0.5rem 1.5rem",
                        position: "absolute",
                        top: "-2px",
                        left: "1rem",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
                      }}
                    >
                      Sharing
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                        <li style={{ marginBottom: "1rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • <strong>Don't choose the field because you like beautiful things:</strong> This is not just an artistic job—it's part of the creative industry. Designers must follow briefs, meet deadlines, receive constant feedback, and meet client expectations.
                        </li>
                        <li style={{ marginBottom: "1rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • <strong>Skills and portfolio matter more than degrees:</strong> In design, your portfolio is more important than your degree. What you can do is more valuable than what certificate you have.
                        </li>
                        <li style={{ marginBottom: "1rem", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • <strong>Invest in tools and keep learning:</strong> Master key software such as Photoshop, Illustrator, Figma, After Effects... You'll also need a good computer, proper screen calibration, and an ongoing learning mindset.
                        </li>
                        <li style={{ marginBottom: "0", color: "#1f2937", fontSize: "0.9rem", fontWeight: "bold" }}>
                          • <strong>Communication and teamwork are essential:</strong> Designers don't work in isolation. You'll need to express ideas clearly, collaborate with content creators, marketers, developers, and present your work effectively.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
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
              Sign up to access detailed information about {activeTab.replace("-", " ")} for{" "}
              {searchTerm.toLowerCase()}.
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
