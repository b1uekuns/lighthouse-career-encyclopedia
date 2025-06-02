import React, { useState, useEffect } from "react";

const Header = ({
  searchTerm = "",
  onSearch,
  showSearchBar = false,
  onSignUp,
  onSignIn,
  onLogoClick,
  currentPage = "home",
  user,
  onSignOut,
}) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [category, setCategory] = useState("");

  // Sync localSearchTerm with searchTerm prop
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && localSearchTerm.trim()) {
      const trimmedTerm = localSearchTerm.toLowerCase().trim();

      // Check if the search term is "graphic designers" or contains it
      if (trimmedTerm.includes("graphic designer")) {
        onSearch(trimmedTerm);
      } else {
        // For demo purposes, show an alert for invalid search terms
        alert("Sorry, we currently only have data for 'graphic designers'. Please try searching for that keyword.");
      }
    }
  };

  return (
    <header
      className="header"
      style={{
        background: "#2563eb",
        padding: "1rem 2rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div
        className="header-content"
        style={{
          width: "100%",
          padding: "0 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div
          className="logo-section"
          onClick={onLogoClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            minWidth: "fit-content",
            cursor: "pointer",
          }}
        >
          <div
            className="logo-image"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              src="/images/header-logo.png"
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "45% center",
              }}
            />
          </div>
          <div className="logo-text">
            <h1
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "600",
                margin: 0,
                lineHeight: "1.2",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Lighthouse
            </h1>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.85rem",
                margin: 0,
                lineHeight: "1",
                fontStyle: "italic",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Navigating your future
            </p>
          </div>
        </div>

        {showSearchBar && (
          <div
            className="header-search"
            style={{
              display: "flex",
              gap: "1rem",
              flex: 1,
              maxWidth: "600px",
            }}
          >
            <form onSubmit={handleSubmit} style={{ flex: 1 }}>
              <div
                className="search-container"
                style={{
                  position: "relative",
                  display: "flex",
                  background: "white",
                  borderRadius: "25px",
                  overflow: "hidden",
                  height: "45px",
                }}
              >
                <button
                  type="submit"
                  className="search-icon"
                  style={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "2px",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
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
                </button>
                <input
                  type="text"
                  placeholder="Searching..."
                  value={localSearchTerm}
                  onChange={(e) => setLocalSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0 15px 0 45px",
                    border: "none",
                    outline: "none",
                    fontSize: "1rem",
                    background: "transparent",
                    height: "45px",
                  }}
                />
              </div>
            </form>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                background: "white",
                border: "none",
                borderRadius: "25px",
                padding: "0 20px",
                fontSize: "1rem",
                outline: "none",
                cursor: "pointer",
                minWidth: "120px",
                height: "45px",
              }}
            >
              <option value="">Category</option>
              <option value="design">Design</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        )}

        <nav
          className="nav-buttons"
          style={{
            display: "flex",
            gap: "1.5rem",
            minWidth: "fit-content",
            alignItems: "center",
          }}
        >
          {user ? (
            // User is logged in - show user info and logout
            <>
              <div
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Welcome, {user.firstName} {user.lastName}!
              </div>
              <button
                className="nav-btn"
                onClick={onSignOut}
                style={{
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: "500",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "6px",
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            // User not logged in - show sign up/sign in buttons
            <>
              <button
                className="nav-btn"
                onClick={onSignUp}
                style={{
                  background:
                    currentPage === "signup" ? "white" : "transparent",
                  border: currentPage === "signup" ? "none" : "1px solid white",
                  color: currentPage === "signup" ? "#2563eb" : "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: currentPage === "signup" ? "600" : "500",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "6px",
                }}
              >
                Sign up
              </button>
              <button
                className="nav-btn"
                onClick={onSignIn}
                style={{
                  background:
                    currentPage === "signin" ? "white" : "transparent",
                  border: currentPage === "signin" ? "none" : "1px solid white",
                  color: currentPage === "signin" ? "#2563eb" : "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: currentPage === "signin" ? "600" : "500",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "6px",
                }}
              >
                Sign in
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
