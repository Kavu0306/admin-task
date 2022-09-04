import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
import Usercontext from "./Usercontext";

function Tableuser() {
  let userData = useContext(Usercontext);
  return (
    <div>
      <h1>hi</h1>
      <h6>{userData.first.name}</h6>
      <button
        onClick={() => {
          userData.setfirst({ person: "2", name: "kavu", age: "22" });
        }}
      >
        change
      </button>
    </div>
  );
}

export default Tableuser;
