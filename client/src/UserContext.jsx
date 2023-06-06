import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios
        .get('/profile', { withCredentials: true })
        .then(({ data }) => {
          setUser(data);
          setReady(true);
        })
        .catch(() => {
          setUser(null);
          setReady(true);
        });
    }
  }, []);

  const login = (email, password) => {
    axios
      .post("/login", { email, password }, { withCredentials: true })
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Login error:", error);
        setUser(null);
      });
  };

  const logout = () => {
    axios
      .post("/logout", {}, { withCredentials: true })
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Logout error:", error);
        setUser(null);
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, ready, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
