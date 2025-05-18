import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UserInfo from "../Components/UserProfile";  // Assuming Userinfo component displays user details
import '../App.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user info from backend (dummy example)
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("/api/user/profile");
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          toast.error("Failed to load user info.");
        }
      } catch (error) {
        toast.error("Error fetching user info.");
      }
    };
    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    // Logic for logging out (can be redirect or clearing token etc)
    toast.success("Logged out successfully");
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-card">
          <h2>Profile</h2>
          <UserInfo user={user} />
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Profile;


