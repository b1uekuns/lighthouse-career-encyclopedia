import React from "react";

const CompaniesSection = ({ currentCareer }) => {
  if (currentCareer === "graphic designer") {
    return (
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
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Ogilvy Vietnam */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                  fontFamily:
                    "'Helvetica World', 'Helvetica', 'Arial', sans-serif",
                }}
              >
                Ogilvy Vietnam
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                    fontFamily:
                      "'Helvetica World', 'Helvetica', 'Arial', sans-serif",
                  }}
                >
                  12th Floor 72-74 Nguyen Thi Minh Khai Street District 3, Ho
                  Chi Minh City, Vietnam
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
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  6th and 7th Floor E-town Central, 11 Doan Van Bo, District 4,
                  Ho Chi Minh City, Vietnam
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
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                  width: "80px",
                  height: "80px",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  Z06, Street No. 13, Tan Thuan Dong Ward, District 7, Ho Chi
                  Minh City, Vietnam
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
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                  width: "80px",
                  height: "80px",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  Lot T2, D1 Street, Saigon Hi-Tech Park, Tan Phu Ward, District
                  9, Ho Chi Minh City, Vietnam
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Deloitte */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                src="/images/deloitte-logo.png"
                alt="Deloitte Logo"
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
                Deloitte
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  Vinaconex Tower, 34 Lang Ha, Dong Da District, Hanoi, Vietnam
                </p>
              </div>
            </div>
          </div>

          {/* Integris Capital */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                src="/images/ic-logo.png"
                alt="Integris Capital Logo"
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
                Integris Capital
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  🌐
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  Remote
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Vinmec International Hospital */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                src="/images/vinmec-logo.png"
                alt="Vinmec Logo"
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
                Vinmec International Hospital
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  Nationwide
                </p>
              </div>
            </div>
          </div>

          {/*BM Hospital */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                src="/images/bm-logo.png"
                alt="BM Hospital Logo"
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
                Bach Mai Hospital
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  78 Giai Phong Street, Phuong Dinh, Dong Da District, Hanoi,
                  Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "software tester") {
    return (
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* FPT Software */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                  width: "80px",
                  height: "80px",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  FPT Tower, Duy Tan, Cau Giay, Hanoi, Vietnam
                </p>
              </div>
            </div>
          </div>

          {/* CMC Global */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                src="/images/cmc-logo.png"
                alt="CMC Global Logo"
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
                CMC Global
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  CMC Tower, Duy Tan, Cau Giay, Hanoi, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentCareer === "contractor") {
    return (
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Vinaconex Group */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                src="/images/vinaconex-logo.png"
                alt="Vinaconex Logo"
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
                Vinaconex Group
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  Vinaconex Building, 34 Lang Ha, Dong Da District, Hanoi,
                  Vietnam
                </p>
              </div>
            </div>
          </div>

          {/* Hoa Binh Corp, Coteccons */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.5rem 2.5rem",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              minWidth: "380px",
              maxWidth: "540px",
              width: "100%",
              minHeight: "140px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #e5e7eb",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "pointer",
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
                src="/images/hbg-logo.png"
                alt="Coteccons Logo"
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
                Hoa Binh Corp, Coteccons
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginTop: "0.1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                >
                  Capital Palace, 29 Lieu Giai Street, Ngoc Khanh, Ba Dinh
                  District, Hanoi, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add more careers as needed
  return <div>No companies data available for this career.</div>;
};

export default CompaniesSection;
