import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const getUsers = async () => {
  const res = await fetch("users.json");
  const users = await res.json();
  return users;
};

//Se usa el initialStateUser para guardar los datos del usuario en el Local Storage:
const initialStateUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const UserProvider = ({ children }) => {
  //el useState deberia ser --> useState(null) solo en este caso vamos a gusrdarlo en el LocalStorage para que no se pierdan los datos, por eso aquí colocamos --> useState(initialStateUser), pero NUNCA se guardan datos de inicio de sesion en el LocalStorage:
  const [ user, setUser] = useState(initialStateUser);

  //Cada vez que el usuario cambie, va a entrar a este useEffect y se va a guardar en el Local Storage, si no vamos a guardar no sería necesario usar este useEffect.
  useEffect(() => {
    if(user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  const login = async (email, password) => {
    const users = await getUsers();
    const userDB = users.find(
      (item) => item.email === email && password === item.password
    );
  if (userDB){
    setUser(userDB)
  } else {
    setUser(null);
  }

return userDB;

  };

  const register = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register  }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
