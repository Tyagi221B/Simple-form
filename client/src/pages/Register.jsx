import { useState } from "react";
import { Link } from "react-router-dom";
import { post } from "../services/ApiEndpoint";
import { toast } from "react-hot-toast";


export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await post("/api/auth/register", {
        name,
        email,
        password,
        role
      });
      const response = request.data;
      if (request.status == 200) {
        toast.success(response.message);
      }
      else(toast.error(response.message));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="register-container">
        <h2>Register</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name=""
              id="username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Emaiil</label>
            <input
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name=""
              id="password"
            />
          </div>
          <div>
          <label>
          <input type="checkbox" onChange={() => setRole("admin")} name="admin" value="admin"/> Admin ?
          </label>
          </div>
          <button type="submit">Register</button>
          <p className="register-link">
            Already have an account? <Link to={"/login"}>Login here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
