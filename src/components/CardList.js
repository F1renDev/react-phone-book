import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.monsters.map((monster, i) => {
        return (
          <Card
            key={props.monsters[i].id}
            id={props.monsters[i].id}
            name={props.monsters[i].name}
            email={props.monsters[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
