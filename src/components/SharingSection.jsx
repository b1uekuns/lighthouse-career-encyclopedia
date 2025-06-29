import React from "react";

const SharingSection = ({ currentCareer }) => {
  if (currentCareer === "graphic designer") {
    return (
      <div
        className="sharing-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0",
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Profile
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Former student of the University of Architecture Ho Chi Minh
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Founder of DAH Creative Studio – a boutique design agency
                  serving clients in Vietnam and Southeast Asia.
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Senior Visual Designer – Tiki Corporation (2016–2019)
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Graphic Designer – Lighthouse (2020 - now)
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Winner – Vietnam Young Design Awards 2017
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
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
                <li
                  style={{
                    marginBottom: "0.5rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Brand Identity Design
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • UX/UI Design for web & mobile
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Motion Graphics & Interactive Media
                </li>
                <li
                  style={{
                    marginBottom: "0",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Sharing
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  •{" "}
                  <strong>
                    Don't choose the field because you like beautiful things:
                  </strong>{" "}
                  This is not just an artistic job—it's part of the creative
                  industry. Designers must follow briefs, meet deadlines,
                  receive constant feedback, and meet client expectations.
                </li>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  •{" "}
                  <strong>
                    Skills and portfolio matter more than degrees:
                  </strong>{" "}
                  In design, your portfolio is more important than your degree.
                  What you can do is more valuable than what certificate you
                  have.
                </li>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • <strong>Invest in tools and keep learning:</strong> Master
                  key software such as Photoshop, Illustrator, Figma, After
                  Effects... You'll also need a good computer, proper screen
                  calibration, and an ongoing learning mindset.
                </li>
                <li
                  style={{
                    marginBottom: "0",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • <strong>Communication and teamwork are essential:</strong>{" "}
                  Designers don't work in isolation. You'll need to express
                  ideas clearly, collaborate with content creators, marketers,
                  developers, and present your work effectively.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "accountant") {
    return (
      <div
        className="sharing-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0",
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
                Minh Nguyễn
              </h3>
              <div style={{ display: "flex", gap: "2px", margin: "4px 0" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#fbbf24", fontSize: "1rem" }}>
                    ⭐
                  </span>
                ))}
              </div>
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Profile
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Degree: Bachelor's in Accounting
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Experience: 5 years in manufacturing company in HCMC
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Sharing
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • After graduating from UEL, I joined a mid‑sized
                  manufacturing firm in HCMC. In my 5 years here, I moved from
                  Junior Accountant reporting 9-12 million VND/month to a Senior
                  role at ₫15-16M/month. Key growth factors were mastering SAP,
                  VBA in Excel, and staying on top of VAT & CIT regulations. I
                  also earned a part‑time MBA (Accounting) at VGU with a 50%
                  tuition scholarship, which broadened my strategic insight.
                  Regularly attending seminars, I network with professionals
                  from Deloitte and Unilever - these contacts often inform me
                  about openings. For newcomers, start with strong technical
                  skills, then build communication and compliance expertise.
                  Many firms prefer accountants who can liaise across finance,
                  procurement, legal, and audit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "general doctor") {
    return (
      <div
        className="sharing-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0",
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
                Dr. Thao Le
              </h3>
              <div style={{ display: "flex", gap: "2px", margin: "4px 0" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#fbbf24", fontSize: "1rem" }}>
                    ⭐
                  </span>
                ))}
              </div>
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Profile
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Age: 32
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • MD from Hue UMP
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • 8 years in public hospital
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Now in private clinic
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Sharing
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Starting at Cho Ray at ₫35M/month, I gained a lot in
                  clinical exposure. After 5 years, I moved to a private clinic
                  and now earn ₫60-65M including consultations. Key factors:
                  deep clinical knowledge, patient trust, and extra training in
                  ultrasound. Networking through medical associations led to my
                  clinic partnership.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "software tester") {
    return (
      <div
        className="sharing-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0",
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
                Hoàng Minh
              </h3>
              <div style={{ display: "flex", gap: "2px", margin: "4px 0" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#fbbf24", fontSize: "1rem" }}>
                    ⭐
                  </span>
                ))}
              </div>
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Profile
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Degree: BSc in Software Engineering, University of
                  Information Technology (VNU-HCM)
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Experience: 6 years in manual and automation testing
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Sharing
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • I started as a Manual Tester at TMA Solutions with a salary
                  of ₫8M/month after graduating. During my first year, I focused
                  on mastering test case writing, Jira, and SQL queries. I
                  gradually shifted to automation, learning Selenium and Postman
                  through online courses. After 3 years, I joined FPT Software
                  as a QA Automation Engineer, where my income doubled to
                  ₫18-20M/month.
                </li>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • One key turning point was earning the ISTQB certification
                  and attending meetups organized by the Vietnam Software
                  Testing Board. These helped me land freelance gigs and mentor
                  junior testers. Now, I'm managing a small QA team and doing
                  part-time testing workshops on weekends, adding another
                  ₫5-7M/month to my income.
                </li>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • My advice to freshers is: don't wait for the perfect
                  role—start small, build practical skills, and connect with the
                  local QA community. Experience speaks louder than any title in
                  this field.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "contractor") {
    return (
      <div
        className="sharing-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0",
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
                Quang Trần
              </h3>
              <div style={{ display: "flex", gap: "2px", margin: "4px 0" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#fbbf24", fontSize: "1rem" }}>
                    ⭐
                  </span>
                ))}
              </div>
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Profile
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Degree: Civil Engineering from HUCE
                </li>
                <li
                  style={{
                    marginBottom: "0.8rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • Experience: 12 years, now Project Manager at Vinaconex
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
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              Sharing
            </div>

            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li
                  style={{
                    marginBottom: "1rem",
                    color: "#1f2937",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  • I started at Vinaconex as a junior engineer earning ₫12-15M.
                  After two years, I managed medium projects and now head teams
                  earning ₫50-60M/month. My leadership and degree gave me entry;
                  I earned a French-funded exchange scholarship in 2018, which
                  opened slots at Coteccons. Key growth: mastering Primavera P6,
                  safety standards, and fluent English.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add more careers as needed
  return <div>No sharing data available for this career.</div>;
};

export default SharingSection;
