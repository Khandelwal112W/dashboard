import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = ({ onLogin }) => {
  // State variables to store email, password, and remember me checkbox value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Temporary object containing email-password pairs
  const users = {
    "user1@example.com": "password1",
    "user2@example.com": "password2",
    "user3@example.com": "password3",
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the entered email exists in the users object
    if (users[email] && users[email] === password) {
      // Login successful
      console.log("Login successful for:", email);
      // Reset the form fields after successful login
      setEmail("");
      setPassword("");
      setRememberMe(false);
      setErrorMessage("");
      // Call the callback function passed from App.js to handle successful login
      onLogin();
    } else {
      // Login failed
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex w-[420px] flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
