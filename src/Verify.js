import React, { useState } from "react";
import "./Verify.css";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

function Verify({ setIsVerified }) {
  const [width, height] = useWindowSize();
  let [optionSelected, setOptionSelected] = useState(null);

  return (
    <div className="verifyScreen">
      <div className="verifyContainer">
        <p className="masterHeader">Prove yourself human child!</p>
        <div className="header">Valar morghulis ?</div>
        <div className="options">
          <div className="leftOption">
            <p
              className={`option1 ${optionSelected === 0 && "wrongOption"}`}
              onClick={() => setOptionSelected(0)}
            >
              Tubī daor
            </p>
            <p
              className={`option2 ${optionSelected === 3 && "rightchoice"}`}
              onClick={() => {
                setOptionSelected(3);
                setTimeout(() => {
                  setIsVerified(true);
                }, 8000);
              }}
            >
              Valar dohaeris
            </p>
          </div>
          <div className="rightOption">
            <p
              className={`option3 ${optionSelected === 1 && "wrongOption"}`}
              onClick={() => setOptionSelected(1)}
            >
              Avy jorrāelan
            </p>
            <p
              className={`option4 ${optionSelected === 2 && "wrongOption"}`}
              onClick={() => setOptionSelected(2)}
            >
              Ñuhor līr gūrēnna
            </p>
          </div>
        </div>
      </div>
      {optionSelected === 3 && <Confetti width={width} height={height} />}
    </div>
  );
}

export default Verify;
