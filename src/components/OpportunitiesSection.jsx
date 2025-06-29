import React from "react";

const OpportunitiesSection = ({ currentCareer }) => {
  if (currentCareer === "graphic designer") {
    return (
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

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
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
                minHeight: "140px",
                width: "100%",
                margin: "0 auto",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                opacity: 1,
                transform: "translateY(0)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37,99,235,0.18)";
                e.currentTarget.style.borderColor = "#2563eb";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <img
                src="/images/wcadc-logo.png"
                alt="WCADC Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  display: "block",
                  marginRight: "1.5rem",
                }}
              />
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: 0,
                    textAlign: "left",
                    lineHeight: 1.4,
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
                minHeight: "140px",
                width: "100%",
                margin: "0 auto",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                opacity: 1,
                transform: "translateY(0)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37,99,235,0.18)";
                e.currentTarget.style.borderColor = "#2563eb";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <img
                src="/images/inax-logo.png"
                alt="INAX Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                  backgroundColor: "#f3f4f6",
                  padding: "8px",
                  borderRadius: "4px",
                  display: "block",
                  marginRight: "1.5rem",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: 0,
                    textAlign: "left",
                    lineHeight: 1.4,
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

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
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
                minHeight: "140px",
                width: "100%",
                margin: "0 auto",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                opacity: 1,
                transform: "translateY(0)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37,99,235,0.18)";
                e.currentTarget.style.borderColor = "#2563eb";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <img
                src="/images/vietnam-catbox-logo.png"
                alt="Vietnam Catbox Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  display: "block",
                  marginRight: "1.5rem",
                }}
              />
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: 0,
                    textAlign: "left",
                    lineHeight: 1.4,
                  }}
                >
                  Vietnam Catbox Limited Liability Company
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    margin: 0,
                    textAlign: "left",
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
                minHeight: "140px",
                width: "100%",
                margin: "0 auto",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                opacity: 1,
                transform: "translateY(0)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37,99,235,0.18)";
                e.currentTarget.style.borderColor = "#2563eb";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <img
                src="/images/kami-logo.png"
                alt="Kami Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  display: "block",
                  marginRight: "1.5rem",
                }}
              />
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: 0,
                    textAlign: "left",
                    lineHeight: 1.4,
                  }}
                >
                  Kami Technology and Service Joint Stock Company
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  Graphic designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "accountant") {
    return (
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
        {/* Scholarships */}
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              minHeight: "140px",
              width: "100%",
              margin: "0 auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              transform: "translateY(0)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(37,99,235,0.18)";
              e.currentTarget.style.borderColor = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <img
              src="/images/vgu-logo.png"
              alt="VGU Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                marginRight: "1.5rem",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: 0,
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                Vietnamese-German University Scholarship for Top Entrants
              </h4>
            </div>
          </div>
        </div>

        {/* Recruitment */}
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.5rem",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#f9fafb",
                minHeight: "140px",
                width: "100%",
                margin: "0 auto",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                opacity: 1,
                transform: "translateY(0)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37,99,235,0.18)";
                e.currentTarget.style.borderColor = "#2563eb";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: 0,
                    textAlign: "left",
                    lineHeight: 1.4,
                  }}
                >
                  Eurofins
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  Offers internships and accounting roles in Hanoi & HCMC
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.5rem",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#f9fafb",
                minHeight: "140px",
                width: "100%",
                margin: "0 auto",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                opacity: 1,
                transform: "translateY(0)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37,99,235,0.18)";
                e.currentTarget.style.borderColor = "#2563eb";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: 0,
                    textAlign: "left",
                    lineHeight: 1.4,
                  }}
                >
                  Integris Capital
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  Conducts remote hiring via Indeed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "general doctor") {
    return (
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
        {/* Scholarships */}
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              minHeight: "140px",
              width: "100%",
              margin: "0 auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              transform: "translateY(0)",
              marginBottom: "1.5rem",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(37,99,235,0.18)";
              e.currentTarget.style.borderColor = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <img
              src="/images/hmu-logo.png"
              alt="HMU Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                marginRight: "1.5rem",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: 0,
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                Medicinae Scholarships At Hanoi Medical University For Top
                Entrants
              </h4>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              minHeight: "140px",
              width: "100%",
              margin: "0 auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              transform: "translateY(0)",
              marginBottom: "0rem",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(37,99,235,0.18)";
              e.currentTarget.style.borderColor = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <img
              src="/images/hump-logo.png"
              alt="Hue University Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                marginRight: "1.5rem",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: 0,
                  textAlign: "left",
                  lineHeight: 1.4,
                  wordBreak: "break-word",
                  maxWidth: "100%",
                }}
              >
                <div>Hue University Scholarships For </div>
                <div>Rural-background Students</div>
              </h4>
            </div>
          </div>
        </div>

        {/* Recruitment */}
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              minHeight: "140px",
              width: "100%",
              margin: "0 auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              transform: "translateY(0)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(37,99,235,0.18)";
              e.currentTarget.style.borderColor = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <img
              src="/images/vinmec-logo.png"
              alt="Vinmec Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                marginRight: "1.5rem",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: 0,
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                Vinmec International Hospital
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Recruits medical graduates annually
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "software tester") {
    return (
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
        {/* Scholarships */}
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              minHeight: "140px",
              width: "100%",
              margin: "0 auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              transform: "translateY(0)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(37,99,235,0.18)";
              e.currentTarget.style.borderColor = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <img
              src="/images/fpt-software-logo.png"
              alt="FPT Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                marginRight: "1.5rem",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: 0,
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                FPT University Scholarships For Tech Educators
              </h4>
            </div>
          </div>
        </div>

        {/* Recruitment */}
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              minHeight: "140px",
              width: "100%",
              margin: "0 auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              transform: "translateY(0)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(37,99,235,0.18)";
              e.currentTarget.style.borderColor = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <img
              src="/images/bosch-logo.png"
              alt="Bosch Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                marginRight: "1.5rem",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: 0,
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                Bosch
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Tester
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "contractor") {
    return (
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
        {/* Scholarships */}
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              minHeight: "140px",
              width: "100%",
              margin: "0 auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              transform: "translateY(0)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(37,99,235,0.18)";
              e.currentTarget.style.borderColor = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <img
              src="/images/huce-logo.png"
              alt="HUCE Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                marginRight: "1.5rem",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: 0,
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                HUCE Scholarships For High-achieving Civil Students
              </h4>
            </div>
          </div>
        </div>

        {/* Recruitment */}
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              minHeight: "140px",
              width: "100%",
              margin: "0 auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              transform: "translateY(0)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(37,99,235,0.18)";
              e.currentTarget.style.borderColor = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <img
              src="/images/hbg-logo.png"
              alt="Coteccons Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                marginRight: "1.5rem",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: 0,
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                Coteccons
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Run campus recruitment annually
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add more careers as needed
  return <div>No opportunities data available for this career.</div>;
};

export default OpportunitiesSection;
