import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Token is present, set the user in context
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.get("/profile")
        .then((response) => {
          setUser(response.data);
          setRedirect(true);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, []);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setRedirect(true);
    } catch (error) {
      alert("Login failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/userpage"} />;
  }

  return (
    <>
      <div className="top"></div>
      <div className="loginbox">
        <div className="logincontent">
          <h2>
            Bine ai <span>revenit</span>!
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <br></br>
            <input
              type="email"
              placeholder="bun@exemplu.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="password"
              placeholder="parola"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <br></br>
            <br></br>
            <button className="loginbtn">Logheaza-te</button>
          </form>
          <a style={{ color: "gray" }} href="/reset-password">
            Ai uitat parola?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
