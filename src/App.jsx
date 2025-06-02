import { useState } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import SearchResults from "./components/SearchResults";
import JobResults from "./components/JobResults";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { jobData } from "./data/jobData";
import { useAuth } from "./context/AuthContext";
import "./App.css";

function App() {
  const { user, isAuthenticated, signOut } = useAuth();
  const [currentJob, setCurrentJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoginRequired, setShowLoginRequired] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'signup', 'signin'

  const handleSearch = (term) => {
    setSearchTerm(term);

    // Special case: graphic designers always show SearchResults component
    if (term.toLowerCase().includes("graphic designer")) {
      setCurrentJob(null);
      setShowLoginRequired(true);
      return;
    }

    // Check if we have job data for other search terms
    const jobInfo = jobData[term.toLowerCase()];

    if (jobInfo) {
      // Show job results if we have data
      setCurrentJob(jobInfo);
      setShowLoginRequired(false);
    } else {
      // No data found
      setCurrentJob(null);
      setShowLoginRequired(false);
    }
  };

  const handleBackToSearch = () => {
    setCurrentJob(null);
    setSearchTerm("");
    setShowLoginRequired(false);
  };

  const handleHeaderSearch = (term) => {
    // Reset to home page first
    setCurrentPage('home');

    // Then trigger the same search logic as main search
    handleSearch(term);
  };

  const handleSignUp = () => {
    setCurrentPage("signup");
  };

  const handleSignIn = () => {
    setCurrentPage("signin");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setCurrentJob(null);
    setSearchTerm("");
    setShowLoginRequired(false);
  };

  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        onSearch={handleHeaderSearch}
        showSearchBar={
          currentJob || showLoginRequired || currentPage !== "home"
        }
        onSignUp={handleSignUp}
        onSignIn={handleSignIn}
        onLogoClick={handleBackToHome}
        currentPage={currentPage}
        user={user}
        onSignOut={signOut}
      />
      {currentPage === "signup" ? (
        <SignUp onBack={handleBackToHome} onSignIn={handleSignIn} />
      ) : currentPage === "signin" ? (
        <SignIn onBack={handleBackToHome} onSignUp={handleSignUp} />
      ) : showLoginRequired ? (
        <SearchResults
          searchTerm={searchTerm}
          onSignUp={handleSignUp}
          onSignIn={handleSignIn}
          isAuthenticated={isAuthenticated}
        />
      ) : currentJob ? (
        <JobResults
          jobInfo={currentJob}
          searchTerm={searchTerm}
          onBack={handleBackToSearch}
        />
      ) : (
        <SearchSection onSearch={handleSearch} />
      )}
    </div>
  );
}

export default App;
