import React from "react";

const UniversityCourseSection = ({ career }) => {
  if (career === "accountant") {
    const universities = [
      {
        logo: "/images/aof-logo.png",
        name: "Academy of Finance (AOF)",
        address: "📍58 Le Van Hien, Duc Thang, Bac Tu Liem, Hanoi, Vietnam",
      },
      {
        logo: "/images/ued-logo.png",
        name: "University of Economics - Da Nang University",
        address: "📍71 Ngu Hanh Son Street, Da Nang City, Vietnam",
      },
      {
        logo: "/images/ueh-logo.png",
        name: "University of Economics Ho Chi Minh City (UEH)",
        address:
          "📍59C Nguyen Dinh Chieu Street, 3 District, Ho Chi Minh City, Vietnam",
      },
    ];
    const courses = [
      {
        logo: "/images/tka-logo.png",
        name: "The Knowledge Academy",
        desc: "Accounting & Financial Statement Analysis",
      },
    ];
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
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* University Column */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 600 }}>
            <div
              style={{
                background: "transparent",
                border: "3px dashed #2563eb",
                color: "#2563eb",
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
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
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {universities.map((u) => (
                <div
                  key={u.name}
                  style={{
                    background: "white",
                    padding: "2rem 1.5rem",
                    borderRadius: "14px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                    minHeight: "150px",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    border: "2px solid #2563eb",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(37,99,235,0.18)";
                    e.currentTarget.style.borderColor = "#1e40af";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(0,0,0,0.10)";
                    e.currentTarget.style.borderColor = "#2563eb";
                  }}
                >
                  <img
                    src={u.logo}
                    alt={u.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit:
                        u.logo === "/images/ued-logo.png" ? "cover" : "contain",
                      flexShrink: 0,
                      borderRadius: "8px",
                      background: "#f3f4f6",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                        marginBottom: "0.5rem",
                        lineHeight: "1.3",
                      }}
                    >
                      {u.name}
                    </h3>
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "0.97rem",
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      {u.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Course Column */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 600 }}>
            <div
              style={{
                background: "transparent",
                border: "3px dashed #fbbf24",
                color: "#f59e0b",
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
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
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {courses.map((c) => (
                <div
                  key={c.name}
                  style={{
                    background: "white",
                    padding: "2rem 1.5rem",
                    borderRadius: "14px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                    minHeight: "150px",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    border: "2px solid #fbbf24",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(251,191,36,0.18)";
                    e.currentTarget.style.borderColor = "#f59e0b";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(0,0,0,0.10)";
                    e.currentTarget.style.borderColor = "#fbbf24";
                  }}
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      flexShrink: 0,
                      borderRadius: "8px",
                      background: "#f3f4f6",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontSize: "1.18rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                        marginBottom: "0.5rem",
                        lineHeight: "1.3",
                      }}
                    >
                      {c.name}
                    </h3>
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "1.02rem",
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (career === "general doctor") {
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
          <div
            style={{
              flex: 1,
              minWidth: 320,
              maxWidth: 600,
              position: "relative",
            }}
          >
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
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
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Hanoi Medical University */}
              <div
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.10)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  border: "2px solid #2563eb",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,99,235,0.18)";
                  e.currentTarget.style.borderColor = "#1e40af";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.10)";
                  e.currentTarget.style.borderColor = "#2563eb";
                }}
              >
                <img
                  src="/images/hmu-logo.png"
                  alt="Hanoi Medical University"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    Hanoi Medical University
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.97rem",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    📍1 Ton That Tung Street, Khuong Thuong ward, Dong Da
                    District, Hanoi, Vietnam
                  </p>
                </div>
              </div>

              {/* Hue University of Medicine and Pharmacy */}
              <div
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.10)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  border: "2px solid #2563eb",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,99,235,0.18)";
                  e.currentTarget.style.borderColor = "#1e40af";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.10)";
                  e.currentTarget.style.borderColor = "#2563eb";
                }}
              >
                <img
                  src="/images/hump-logo.png"
                  alt="Hue University of Medicine and Pharmacy"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    Hue University of Medicine and Pharmacy
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.97rem",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    📍6 Ngo Quyen Street, Vinh Ninh, Hue City, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Section */}
          <div
            style={{
              flex: 1,
              minWidth: 320,
              maxWidth: 600,
              position: "relative",
            }}
          >
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                textAlign: "center",
                marginBottom: "1.5rem",
                margin: "0 auto 1.5rem auto",
                width: "140px",
              }}
            >
              Course
            </div>
          </div>
        </div>
      </div>
    );
  } else if (career === "software tester") {
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
          <div
            style={{
              flex: 1,
              minWidth: 320,
              maxWidth: 600,
              position: "relative",
            }}
          >
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
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
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Ho Chi Minh City University of Technology */}
              <div
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.10)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  border: "2px solid #2563eb",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,99,235,0.18)";
                  e.currentTarget.style.borderColor = "#1e40af";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.10)";
                  e.currentTarget.style.borderColor = "#2563eb";
                }}
              >
                <img
                  src="/images/hcmut-logo.png"
                  alt="Ho Chi Minh City University of Technology"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    Ho Chi Minh City University of Technology
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.97rem",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    📍268 Ly Thuong Kiet, 14 Ward, 10 District, Ho Chi Minh
                    City, Vietnam
                  </p>
                </div>
              </div>

              {/* Hanoi University of Science and Technology */}
              <div
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.10)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  border: "2px solid #2563eb",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,99,235,0.18)";
                  e.currentTarget.style.borderColor = "#1e40af";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.10)";
                  e.currentTarget.style.borderColor = "#2563eb";
                }}
              >
                <img
                  src="/images/hust-logo.png"
                  alt="Hanoi University of Science and Technology"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    Hanoi University of Science & Tech
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.97rem",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    📍1 Dai Co Viet, Hai Ba Trung, Hanoi, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Section */}
          <div
            style={{
              flex: 1,
              minWidth: 320,
              maxWidth: 600,
              position: "relative",
            }}
          >
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                textAlign: "center",
                marginBottom: "1.5rem",
                margin: "0 auto 1.5rem auto",
                width: "140px",
              }}
            >
              Course
            </div>
          </div>
        </div>
      </div>
    );
  } else if (career === "contractor") {
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
          <div
            style={{
              flex: 1,
              minWidth: 320,
              maxWidth: 600,
              position: "relative",
            }}
          >
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
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
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Hanoi University of Civil Engineering */}
              <div
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.10)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  border: "2px solid #2563eb",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,99,235,0.18)";
                  e.currentTarget.style.borderColor = "#1e40af";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.10)";
                  e.currentTarget.style.borderColor = "#2563eb";
                }}
              >
                <img
                  src="/images/huce-logo.png"
                  alt="Hanoi University of Civil Engineering"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    Hanoi University of Civil Engineering
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.97rem",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    📍55 Giai Phong, Hai Ba Trung, Hanoi, Vietnam
                  </p>
                </div>
              </div>

              {/* Hanoi Architectural University */}
              <div
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.10)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  border: "2px solid #2563eb",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,99,235,0.18)";
                  e.currentTarget.style.borderColor = "#1e40af";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.10)";
                  e.currentTarget.style.borderColor = "#2563eb";
                }}
              >
                <img
                  src="/images/hau-logo.png"
                  alt="Hanoi Architectural University"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    Hanoi Architectural University
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.97rem",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    📍Km 10, Nguyen Trai Street, Thanh Xuan District, Hanoi,
                    Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Section */}
          <div
            style={{
              flex: 1,
              minWidth: 320,
              maxWidth: 600,
              position: "relative",
            }}
          >
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                textAlign: "center",
                marginBottom: "1.5rem",
                margin: "0 auto 1.5rem auto",
                width: "140px",
              }}
            >
              Course
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: Graphic Designer content
  const universities = [
    {
      logo: "/images/uifa-logo.png",
      name: "University of Industrial Fine Arts",
      address:
        "📍No. 360 La Thanh Street, O Cho Dua Ward, Dong Da District, Hanoi, Vietnam",
    },
  ];
  const courses = [
    {
      logo: "/images/green-academy-logo.png",
      name: "Green Academy",
      desc: "📍No. 94C Cao Thang, Ward 4, District 3, Ho Chi Minh City, Vietnam",
    },
  ];
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
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* University Column */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 600 }}>
          <div
            style={{
              background: "transparent",
              border: "3px dashed #2563eb",
              color: "#2563eb",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "56px",
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
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {universities.map((u) => (
              <div
                key={u.name}
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  border: "2px solid #2563eb",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37,99,235,0.18)";
                  e.currentTarget.style.borderColor = "#1e40af";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.10)";
                  e.currentTarget.style.borderColor = "#2563eb";
                }}
              >
                <img
                  src={u.logo}
                  alt={u.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit:
                      u.logo === "/images/ued-logo.png" ? "cover" : "contain",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    {u.name}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.97rem",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    {u.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Course Column */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 600 }}>
          <div
            style={{
              background: "transparent",
              border: "3px dashed #fbbf24",
              color: "#f59e0b",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "56px",
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
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {courses.map((c) => (
              <div
                key={c.name}
                style={{
                  background: "white",
                  padding: "2rem 1.5rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  border: "2px solid #fbbf24",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(251,191,36,0.18)";
                  e.currentTarget.style.borderColor = "#f59e0b";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.10)";
                  e.currentTarget.style.borderColor = "#fbbf24";
                }}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "1.18rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    {c.name}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "1.02rem",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCourseSection;
