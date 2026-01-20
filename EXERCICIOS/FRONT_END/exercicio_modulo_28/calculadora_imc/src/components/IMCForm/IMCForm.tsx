import React, { useState } from "react";
import type { IMCData } from "../../types/imc.types";
import { calculateIMC, getIMCClassification } from "../../utils/imcCalculator";
import styles from "./IMCForm.module.css";

interface IMCFormProps {
  onCalculate: (data: IMCData) => void;
}

export const IMCForm: React.FC<IMCFormProps> = ({ onCalculate }) => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!heightNum || !weightNum) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    if (heightNum <= 0 || weightNum <= 0) {
      setError("Os valores devem ser maiores que zero");
      return;
    }

    if (heightNum > 3) {
      setError("Altura deve ser em metros (ex: 1.75)");
      return;
    }

    const imc = calculateIMC(weightNum, heightNum);
    const { classification, color } = getIMCClassification(imc);

    onCalculate({ imc, classification, color });
  };

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setError("");
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Calculadora de IMC</h2>
      <div className={styles.formDiv}>
        <div className={styles.inputGroup}>
          <label htmlFor="height" className={styles.label}>
            Altura (m)
          </label>
          <input
            id="height"
            type="number"
            step="0.01"
            placeholder="Ex: 1.75"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="weight" className={styles.label}>
            Peso (kg)
          </label>
          <input
            id="weight"
            type="number"
            step="0.1"
            placeholder="Ex: 70.5"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={styles.input}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.buttonGroup}>
          <button onClick={handleSubmit} className={styles.buttonPrimary}>
            Calcular IMC
          </button>
          <button onClick={handleReset} className={styles.buttonSecondary}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
};
