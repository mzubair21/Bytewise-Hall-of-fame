import React from "react";
import members from "../data/members.js";
import Card from "./card.jsx";
import { useState } from "react";
function Cards() {
  const [name, setName] = useState("");
  return (
    <div className="container m-auto  mt-10">
      <div className="popup fixed top-32 right-0 bg-slate-900 w-0 clicke whitespace-nowrap z-10 flex justify-end">
        <p className="text-white bg-green-600 ml-4 py-4 w-0 text-center overflow-hidden scale-105 -translate-x-1">
          {name}
        </p>
      </div>
      <div className=" bg-slate-600 grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-hidden">
        {members.map((member, index) => {
          return (
            <Card
              key={index}
              role={member.role}
              email={member.email}
              name={member.name}
              img={member.img}
              handleName={setName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
