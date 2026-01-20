import React from "react";
import type { IMCData } from "../../types/imc.types";
import styles from "./IMCResult.module.css";

interface IMCResultProps {
  data: IMCData;
}

export const IMCResult: React.FC<IMCResultProps> = ({ data }) => {
  return (
    <div className={styles.resultContainer} style={{ borderColor: data.color }}>
      <h3 className={styles.resultTitle}>Resultado</h3>
      <div className={styles.imcValue}>
        <span className={styles.imcLabel}>Seu IMC:</span>
        <span className={styles.imcNumber} style={{ color: data.color }}>
          {data.imc.toFixed(2)}
        </span>
      </div>
      <div
        className={styles.classification}
        style={{ backgroundColor: data.color }}
      >
        {data.classification}
      </div>
    </div>
  );
};
