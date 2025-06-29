import React from "react";

const JobDescriptionSection = ({ currentCareer }) => {
  if (currentCareer === "graphic designer") {
    return (
      <div
        className="job-description-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Description, Designer Female Image, Salary */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Description */}
          <div
            className="description-text"
            style={{
              background: "white",
              padding: "2rem 2rem 1.5rem 2rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1.2rem",
                borderBottom: "2px solid #2563eb",
                paddingBottom: "0.5rem",
              }}
            >
              Description:
            </h3>
            <div style={{ color: "#374151", lineHeight: "1.8" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                • Graphic design is a form of communication that uses colors,
                shapes, images, and words to create visual content that
                surrounds us in many forms - namely, print and digital media.
                Effective designs communicate information that inspires and
                informs consumers, making it critical for any business' success.
              </p>
              <p style={{ marginBottom: 0 }}>
                • Therefore, graphic designers are experienced personnel, sharp
                thinking in the field of image creation, design innovation
                related to color coordination to bring high aesthetics to each
                product. At the specialist level, you not only directly create
                the product but also supervise, direct, and guide graphic design
                staff to implement ideas accurately, according to orders, and
                without duplication.
              </p>
            </div>
          </div>
          {/* Designer Female Image */}
          <div
            style={{
              width: "100%",
              height: "43 0px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/job-description-2.png"
              alt="Graphic Design Tools and Color Palette"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Salary */}
          <div
            style={{
              border: "2px solid #fbbf24",
              borderRadius: "10px",
              padding: "1.5rem 2rem",
              background: "#fffbeb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
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
            <div
              style={{
                color: "#374151",
                lineHeight: "1.6",
                fontSize: "0.98rem",
              }}
            >
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Entry-level (new employees):</strong> 8-10 million
                VND/month
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>2-3 years experience:</strong> 15-20 million VND/month
              </p>
              <p style={{ marginBottom: 0 }}>
                • <strong>5+ years experience:</strong> 15-20+ million VND/month
                (or higher)
              </p>
            </div>
          </div>
        </div>
        {/* Right Column: Designer Male Image, Additional Description, Skills */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Designer Male Image */}
          <div
            style={{
              width: "100%",
              height: "350px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/job-description-1.png"
              alt="Graphic Design Workspace"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Additional Description Box */}
          <div
            style={{
              background: "white",
              padding: "2rem 2rem 1.5rem 2rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              color: "#374151",
              lineHeight: "1.8",
              marginBottom: 0,
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>
              • With the description above, a graphic design mainly depends on
              needs' client and company, but generally their responsibilities
              may include developing visual assets to support a marketing
              campaign, design a graphic overlay for social media posts, or
              formalise a print ad layout and retouch photos for digital
              signage.
            </p>
            <p style={{ marginBottom: 0 }}>
              • Because their works are very diversified and flexible so graphic
              designers can work in many settings. They can work in a company or
              agency or at home as a freelancer. At present, graphic designers
              often work in ad agencies, web design firms, marketing firms,
              print and online publishers, online and brick-and-mortar
              retailers, non-profit organizations, ...
            </p>
          </div>
          {/* Skills */}
          <div>
            <div
              style={{
                background: "#2563eb",
                color: "white",
                padding: "1rem",
                borderRadius: "25px",
                textAlign: "center",
                marginBottom: "1.2rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
              }}
            >
              Skills you may need to become a graphic designer:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.1rem",
              }}
            >
              {[
                "Color theory",
                "Computer - aided design software",
                "Audience targeting",
                "Computerised sketching",
                "Communication Skill",
              ].map((skill, index) => (
                <div
                  key={index}
                  style={{
                    background: "#2563eb",
                    color: "white",
                    padding: "1rem 1.3rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontSize: "0.97rem",
                    fontWeight: "500",
                    minHeight: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add other career descriptions here as needed
  if (currentCareer === "accountant") {
    return (
      <div
        className="job-description-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Description + Salary */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Description */}
          <div
            className="description-text"
            style={{
              background: "white",
              padding: "2rem 2rem 1.5rem 2rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1.2rem",
                borderBottom: "2px solid #2563eb",
                paddingBottom: "0.5rem",
              }}
            >
              Description:
            </h3>
            <div style={{ color: "#374151", lineHeight: "1.8" }}>
              <p style={{ marginBottom: 0 }}>
                • Accountants manage financial records, prepare reports,
                reconcile accounts, ensure compliance with tax and accounting
                standards, and support audits. They also advise on cost control
                and financial planning.
              </p>
            </div>
          </div>
          {/* Image (Calculator) */}
          <div
            style={{
              width: "100%",
              height: "270px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/aw2-logo.png"
              alt="Accounting Calculator"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Salary */}
          <div
            style={{
              border: "2px solid #fbbf24",
              borderRadius: "10px",
              padding: "1.5rem 2rem",
              background: "#fffbeb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
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
            <div
              style={{
                color: "#374151",
                lineHeight: "1.6",
                fontSize: "0.98rem",
              }}
            >
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>General Accountant:</strong> 17.1 million VND/month
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Entry-level:</strong> 6.6 - 9.3 million VND/month
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Mid-level (5–10 yrs):</strong> 12.2 – 15 million
                VND/month
              </p>
              <p style={{ marginBottom: 0 }}>
                • <strong>Overall median:</strong> 11.7 million VND/month, range
                8.5 - 22 million VND/month
              </p>
            </div>
          </div>
        </div>
        {/* Right Column: Image + Skills */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Image */}
          <div
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/aw1-logo.png"
              alt="Accountant Workspace"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Skills */}
          <div>
            <div
              style={{
                background: "#2563eb",
                color: "white",
                padding: "1rem",
                borderRadius: "25px",
                textAlign: "center",
                marginBottom: "1.2rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
              }}
            >
              Skills you may need to become an accountant:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.1rem",
              }}
            >
              {[
                "Financial analysis",
                "MS Excel & software",
                "Attention to detail",
                "Ethics",
                "Problem-solving",
                "Communication",
                "Tax compliance",
                "Report preparation",
              ].map((skill, index) => (
                <div
                  key={index}
                  style={{
                    background: "#2563eb",
                    color: "white",
                    padding: "1rem 1.3rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontSize: "0.97rem",
                    fontWeight: "500",
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "general doctor") {
    return (
      <div
        className="job-description-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Description, Doctor Female Image, Salary */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Description */}
          <div
            className="description-text"
            style={{
              background: "white",
              padding: "2rem 2rem 1.5rem 2rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1.2rem",
                borderBottom: "2px solid #2563eb",
                paddingBottom: "0.5rem",
              }}
            >
              Description:
            </h3>
            <div style={{ color: "#374151", lineHeight: "1.8" }}>
              <p style={{ marginBottom: 0 }}>
                • A general doctor diagnoses and treats common illnesses,
                performs physical exams, advises on preventive health, and
                manages patient follow-ups. They work in hospitals, clinics, or
                private practices.
              </p>
            </div>
          </div>
          {/* Doctor Female Image */}
          <div
            style={{
              width: "100%",
              height: "330px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/gd2-logo.png"
              alt="Doctor with Stethoscope"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Salary */}
          <div
            style={{
              border: "2px solid #fbbf24",
              borderRadius: "10px",
              padding: "1.5rem 2rem",
              background: "#fffbeb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
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
            <div
              style={{
                color: "#374151",
                lineHeight: "1.6",
                fontSize: "0.98rem",
              }}
            >
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Entry-level (Rank III):</strong> 4.2 million VND/month
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Mid-career (5+ years):</strong> 7.2 - 8.9 million
                VND/month
              </p>
              <p style={{ marginBottom: 0 }}>
                • <strong>Specialist Level I/PhD/Rank I Doctor:</strong> 15 - 20
                million VND/month
              </p>
            </div>
          </div>
        </div>
        {/* Right Column: Doctor Male Image, Skills */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Doctor Male Image */}
          <div
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/gd1-logo.png"
              alt="General Doctor"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Skills */}
          <div>
            <div
              style={{
                background: "#2563eb",
                color: "white",
                padding: "1rem",
                borderRadius: "25px",
                textAlign: "center",
                marginBottom: "1.2rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
              }}
            >
              Skills you may need to become a general doctor:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.1rem",
              }}
            >
              {[
                "Medical diagnostic ability",
                "Patient care",
                "Clinical decision-making",
                "Healthcare protocols",
                "Communication",
                "Empathy",
                "Medical ethics",
                "Emergency response",
              ].map((skill, index) => (
                <div
                  key={index}
                  style={{
                    background: "#2563eb",
                    color: "white",
                    padding: "1rem 1.3rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontSize: "0.97rem",
                    fontWeight: "500",
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "software tester") {
    return (
      <div
        className="job-description-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Description, Tester Female Image, Salary */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Description */}
          <div
            className="description-text"
            style={{
              background: "white",
              padding: "2rem 2rem 1.5rem 2rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1.2rem",
                borderBottom: "2px solid #2563eb",
                paddingBottom: "0.5rem",
              }}
            >
              Description:
            </h3>
            <div style={{ color: "#374151", lineHeight: "1.8" }}>
              <p style={{ marginBottom: 0 }}>
                • A Software Tester ensures quality by designing and executing
                test plans, identifying/reporting bugs, and collaborating with
                developers to validate software functionality - manual or
                automated. They collaborate with developers, PMs, and
                stakeholders, presenting findings clearly to technical and
                non-technical team members.
              </p>
            </div>
          </div>
          {/* Tester Female Image */}
          <div
            style={{
              width: "100%",
              height: "310px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/st2-logo.png"
              alt="Software Testing Process"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Salary */}
          <div
            style={{
              border: "2px solid #fbbf24",
              borderRadius: "10px",
              padding: "1.5rem 2rem",
              background: "#fffbeb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
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
            <div
              style={{
                color: "#374151",
                lineHeight: "1.6",
                fontSize: "0.98rem",
              }}
            >
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Fresher (0–2 yrs):</strong> 6-8 million VND/month
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Junior (2–5 yrs):</strong> 10.9-15.1 million VND/month
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Senior (5+ years):</strong> 17-23 million VND/month
              </p>
              <p style={{ marginBottom: 0 }}>
                • <strong>Median Software Tester:</strong> 12.8 million
                VND/month
              </p>
            </div>
          </div>
        </div>
        {/* Right Column: Tester Male Image, Skills */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Tester Male Image */}
          <div
            style={{
              width: "100%",
              height: "470px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/st1-logo.png"
              alt="Software Tester"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Skills */}
          <div>
            <div
              style={{
                background: "#2563eb",
                color: "white",
                padding: "1rem",
                borderRadius: "25px",
                textAlign: "center",
                marginBottom: "1.2rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
              }}
            >
              Skills you may need to become a software tester:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.1rem",
              }}
            >
              {[
                "Testing methodologies",
                "Automation tools",
                "Environment setup",
                "Attention to detail",
                "Analytical thinking",
                "Communication",
                "Time management",
                "Adaptability",
              ].map((skill, index) => (
                <div
                  key={index}
                  style={{
                    background: "#2563eb",
                    color: "white",
                    padding: "1rem 1.3rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontSize: "0.97rem",
                    fontWeight: "500",
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "contractor") {
    return (
      <div
        className="job-description-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Description, Contractor Female Image, Salary */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Description */}
          <div
            className="description-text"
            style={{
              background: "white",
              padding: "2rem 2rem 1.5rem 2rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1.2rem",
                borderBottom: "2px solid #2563eb",
                paddingBottom: "0.5rem",
              }}
            >
              Description:
            </h3>
            <div style={{ color: "#374151", lineHeight: "1.8" }}>
              <p style={{ marginBottom: 0 }}>
                • A contractor in construction manages projects - planning, cost
                control, safety, and coordination with stakeholders.
              </p>
            </div>
          </div>
          {/* Contractor Female Image */}
          <div
            style={{
              width: "100%",
              height: "370px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/contractor2-logo.png"
              alt="Construction Planning"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Salary */}
          <div
            style={{
              border: "2px solid #fbbf24",
              borderRadius: "10px",
              padding: "1.5rem 2rem",
              background: "#fffbeb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
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
            <div
              style={{
                color: "#374151",
                lineHeight: "1.6",
                fontSize: "0.98rem",
              }}
            >
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Junior site engineer:</strong> 10-15 million VND/month
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                • <strong>Project engineers:</strong> 20-40 million VND/month
              </p>
              <p style={{ marginBottom: 0 }}>
                • <strong>Senior contractors/project managers:</strong> 40–70
                million VND+
              </p>
            </div>
          </div>
        </div>
        {/* Right Column: Contractor Male Image, Skills */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Contractor Male Image */}
          <div
            style={{
              width: "100%",
              height: "350px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f4f6",
            }}
          >
            <img
              src="/images/contractor1-logo.png"
              alt="Construction Contractor"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Skills */}
          <div>
            <div
              style={{
                background: "#2563eb",
                color: "white",
                padding: "1rem",
                borderRadius: "25px",
                textAlign: "center",
                marginBottom: "1.2rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
              }}
            >
              Skills you may need to become a contractor:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.1rem",
              }}
            >
              {[
                "Project management",
                "Budgeting",
                "Schedule management",
                "Safety knowledge",
                "Engineering principles",
                "Leadership",
                "Risk management",
                "Communication",
              ].map((skill, index) => (
                <div
                  key={index}
                  style={{
                    background: "#2563eb",
                    color: "white",
                    padding: "1rem 1.3rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontSize: "0.97rem",
                    fontWeight: "500",
                    minHeight: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add more careers as needed
  return <div>No job description available for this career.</div>;
};

export default JobDescriptionSection;
