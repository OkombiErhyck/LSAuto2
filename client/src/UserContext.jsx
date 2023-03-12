import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {data} from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({data}) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);


  useEffect(() => {
    axios
      .get("https://ls-auto2.vercel.app/profile", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setReady(true);
      })
      .catch(() => {
        setReady(true);
      });
  }, []);


  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {children}
    </UserContext.Provider>
  );
}