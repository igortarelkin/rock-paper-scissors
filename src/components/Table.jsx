import React from "react";
import "../components/Table.css";

export const Table = (props) => {
  let playerImg = <img src={require("../img/empty.jpg")} alt="empty" />;
  let enemyImg = <img src={require("../img/empty.jpg")} alt="empty"/>;

  if (props.dessision === "Rock") {
    playerImg = <img src={require("../img/rock.jpg")} alt={props.dessision} />;
  } else if (props.dessision === "Paper") {
    playerImg = <img src={require("../img/paper.jpg")} alt={props.dessision} />;
  } else if (props.dessision === "Scissors") {
    playerImg = <img src={require("../img/scissors.jpg")} alt={props.dessision}/>;
  }

  if (props.dessisionPc === "Rock") {
    enemyImg = <img src={require("../img/rock.jpg")} alt={props.dessisionPc}/>;
  } else if (props.dessisionPc === "Paper") {
    enemyImg = <img src={require("../img/paper.jpg")} alt={props.dessisionPc}/>;
  } else if (props.dessisionPc === "Scissors") {
    enemyImg = <img src={require("../img/scissors.jpg")} alt={props.dessisionPc}/>;
  }

  return (
    <div className="wrapper">
      <h1>Winner: {props.winner}</h1>
      <div className="playersWindow">
        <div className="window">
          <p>
            <b>YOU:</b>
          </p>{" "}
          {playerImg}
        </div>
        <div className="window">
          <p>ENEMY - PC:</p> {enemyImg}
        </div>
      </div>
    </div>
  );
};
