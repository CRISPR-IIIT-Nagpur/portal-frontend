import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";

const clientId = "411162289341-erl87kacjnc27tn4vnsi4lltfberfgli.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = async (response) => {
    const credential = response.credential;
    const decodedToken = jwtDecode(credential);
    const email = decodedToken.email;
    const name = decodedToken.name;

    try {
      const res = await axios.post("http://192.168.77.84:7979/google-login", { email });

      const userRole = res.data.role;

      // Store user info
      localStorage.setItem("userName", name);
      localStorage.setItem("email", email);
      localStorage.setItem("role", userRole);

      // Navigate based on role
      if (userRole === "admin") navigate("/adminDashboard");
      else if (userRole === "employee") navigate("/employeeDashboard");
      else if (userRole === "moderator") navigate("/moderatorDashboard");
      else if (userRole === "student") navigate("/Dashboard");
      else alert("Unauthorized access");
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to log in");
    }
  };

  const handleFailure = (error) => {
    console.error("Google Sign-In Failed:", error);
    alert("Google Sign-In failed. Try again!");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex min-h-screen w-screen items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Sign in with Google</h2>
          <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
