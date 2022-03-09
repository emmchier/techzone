import { useEffect, useState } from "react";

import { getUser } from "../api/service";
import { UserContext } from "../context";
import { User } from "../interfaces";

interface UserProviderI {
  children: JSX.Element | JSX.Element[];
}

const UserProvider = ({ children }: UserProviderI) => {
  const [user, setUser] = useState<User>({
    _id: "",
    name: "",
    points: 0,
  });

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
