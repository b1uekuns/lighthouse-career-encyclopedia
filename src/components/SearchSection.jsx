import React, { useState } from "react";

const SearchSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const trimmedTerm = searchTerm.toLowerCase().trim();

      // Check if the search term is "graphic designers" or contains it
      if (trimmedTerm.includes("graphic designer")) {
        setError(""); // Clear any previous error
        onSearch(trimmedTerm);
      } else {
        // Show error for other search terms
        setError("Sorry, we currently only have data for 'graphic designer'. Please try searching for that keyword.");
      }
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  return (
    <section
      className="search-section"
      style={{
        background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
        flex: 1,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "8rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingBottom: "2rem",
        width: "100%",
      }}
    >
      <div
        className="search-content"
        style={{ textAlign: "center", maxWidth: "900px", width: "100%" }}
      >
        <h1
          className="main-title"
          style={{
            color: "white",
            fontSize: "2.8rem",
            fontWeight: "600",
            marginBottom: "5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            whiteSpace: "nowrap",
            fontFamily: "'Fredoka', sans-serif !important",
          }}
        >
          LIGHTHOUSE CAREER ENCYCLOPEDIA
        </h1>

        <form
          onSubmit={handleSubmit}
          className="search-form"
          style={{ marginBottom: "1rem" }}
        >
          <div
            className="search-container"
            style={{
              position: "relative",
              maxWidth: "2000px",
              margin: "0 auto",
              display: "flex",
              background: "white",
              borderRadius: "50px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              height: "60px",
            }}
          >
            <div
              className="search-icon"
              style={{
                position: "absolute",
                left: "25px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="#6b7280"
                  strokeWidth="2"
                />
                <path
                  d="m21 21-4.35-4.35"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Searching..."
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
              className="search-input"
              style={{
                width: "100%",
                padding: "0 25px 0 60px",
                border: "none",
                outline: "none",
                fontSize: "1.1rem",
                background: "transparent",
                height: "60px",
                borderRadius: "50px",
              }}
            />
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div
            style={{
              background: "rgba(239, 68, 68, 0.9)",
              color: "white",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              fontSize: "1rem",
              textAlign: "center",
              maxWidth: "600px",
              margin: "1rem auto 0",
              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {error}
          </div>
        )}


      </div>
    </section>
  );
};

export default SearchSection;
