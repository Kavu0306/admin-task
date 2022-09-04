import { createContext, useState } from "react";

let Usercontext = createContext();

export const Userprovider = ({ children }) => {
  const [first, setfirst] = useState({
    person: "1",
    name: "keerthi",
    age: "19",
  });
  return (
    <Usercontext.Provider value={{ first, setfirst }}>
      {children}
    </Usercontext.Provider>
  );
};
export default Usercontext;
