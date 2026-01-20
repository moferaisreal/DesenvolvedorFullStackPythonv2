import React, { useState } from "react";
import { IMCForm } from "./components/IMCForm/IMCForm";
import { IMCResult } from "./components/IMCResult/IMCResult";
import { IMCClassification } from "./components/IMCClassification/IMCClassification";
import type { IMCData } from "./types/imc.types";
import "./App.css";

const App: React.FC = () => {
  const [imcData, setImcData] = useState<IMCData | null>(null);

  const handleCalculate = (data: IMCData) => {
    setImcData(data);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Calculadora de IMC</h1>
        <p className="subtitle">
          Índice de Massa Corporal - Avalie seu peso em relação à sua altura
        </p>

        <div className="content">
          <div className="left-column">
            <IMCForm onCalculate={handleCalculate} />
            {imcData && <IMCResult data={imcData} />}
          </div>

          <div className="right-column">
            <IMCClassification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
