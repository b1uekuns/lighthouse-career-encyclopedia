import { useState } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import SearchResults from "./components/SearchResults";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
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
    setCurrentJob(null);
    setShowLoginRequired(true);
  };

  const handleHeaderSearch = (term) => {
    // Reset to home page first
    setCurrentPage("home");

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
      ) : (
        <SearchSection onSearch={handleSearch} />
      )}
    </div>
  );
}

export default App;
