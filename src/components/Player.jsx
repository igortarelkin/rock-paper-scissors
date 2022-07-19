import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import "../components/Player.css";
import clickSound from "../components/audio.mp3";

export const Player = () => {
  const [step, setStep] = useState();
  const [stepPc, setStepPc] = useState();
  const [winner, setWinner] = useState();

  const audio = new Audio(clickSound);

  const Rock = () => {
    audio.play();
    setStep("Rock");
    pcStep();
  };

  const Paper = () => {
    audio.play();
    setStep("Paper");
    pcStep();
  };
  const Scissors = () => {
    audio.play();
    setStep("Scissors");
    pcStep();
  };

  const pcStep = () => {
    let newIdForPC = Math.floor(Math.random() * 3) + 1;

    if (newIdForPC === 1) {
      setStepPc("Scissors");
    } else if (newIdForPC === 2) {
      setStepPc("Paper");
    } else if (newIdForPC === 3) {
      setStepPc("Rock");
    }
  };

  const whoIsWinner = () => {
    if (
      (step === "Rock" && stepPc === "Rock") ||
      (step === "Paper" && stepPc === "Paper") ||
      (step === "Scissors" && stepPc === "Scissors")
    ) {
      setWinner("Draw!");
    } else if (
      (step === "Rock" && stepPc === "Scissors") ||
      (step === "Paper" && stepPc === "Rock") ||
      (step === "Scissors" && stepPc === "Paper")
    ) {
      setWinner("You win!");
    } else if (
      (stepPc === "Rock" && step === "Scissors") ||
      (stepPc === "Paper" && step === "Rock") ||
      (stepPc === "Scissors" && step === "Paper")
    ) {
      setWinner("PC win!");
    }
  };

  useEffect(() => {
    whoIsWinner();
  });

  return (
    <div className="wrapper">
      <Table dessision={step} dessisionPc={stepPc} winner={winner} />
      <button onClick={Rock}>Rock</button>
      <button onClick={Paper}>Paper</button>
      <button onClick={Scissors}>Scissors</button>
    </div>
  );
};
