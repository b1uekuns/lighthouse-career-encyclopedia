import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing user on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('lighthouse_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('lighthouse_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Sign up function
  const signUp = async (userData) => {
    try {
      // Validate required fields
      const { email, firstName, lastName, password, confirmPassword, agreeToTerms } = userData;
      
      if (!email || !firstName || !lastName || !password || !confirmPassword) {
        throw new Error('All fields are required');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      if (!agreeToTerms) {
        throw new Error('You must agree to the terms and conditions');
      }

      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('lighthouse_users') || '[]');
      const userExists = existingUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (userExists) {
        throw new Error('An account with this email already exists');
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email: email.toLowerCase(),
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      // Save user to localStorage
      const updatedUsers = [...existingUsers, { ...newUser, password }];
      localStorage.setItem('lighthouse_users', JSON.stringify(updatedUsers));
      
      // Set current user (without password)
      localStorage.setItem('lighthouse_user', JSON.stringify(newUser));
      setUser(newUser);

      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Sign in function
  const signIn = async (credentials) => {
    try {
      const { accountName, password, keepLoggedIn } = credentials;
      
      if (!accountName || !password) {
        throw new Error('Account name and password are required');
      }

      // Get users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('lighthouse_users') || '[]');
      
      // Find user by email or name
      const foundUser = existingUsers.find(u => 
        u.email.toLowerCase() === accountName.toLowerCase() ||
        u.fullName.toLowerCase() === accountName.toLowerCase() ||
        u.firstName.toLowerCase() === accountName.toLowerCase()
      );

      if (!foundUser) {
        throw new Error('Account not found');
      }

      if (foundUser.password !== password) {
        throw new Error('Invalid password');
      }

      // Update last login
      const userWithoutPassword = {
        id: foundUser.id,
        email: foundUser.email,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        fullName: foundUser.fullName,
        createdAt: foundUser.createdAt,
        lastLogin: new Date().toISOString(),
        keepLoggedIn
      };

      // Save current user
      localStorage.setItem('lighthouse_user', JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);

      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Sign out function
  const signOut = () => {
    localStorage.removeItem('lighthouse_user');
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  const value = {
    user,
    isAuthenticated,
    isLoading,
    signUp,
    signIn,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
