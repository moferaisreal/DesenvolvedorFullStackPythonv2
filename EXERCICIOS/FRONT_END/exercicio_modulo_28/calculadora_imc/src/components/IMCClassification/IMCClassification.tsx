import React from "react";
import styles from "./IMCClassification.module.css";

export const IMCClassification: React.FC = () => {
  const classifications = [
    {
      range: "Abaixo de 18,5",
      classification: "Abaixo do peso",
      color: "#cf6a87",
    },
    { range: "18,5 - 24,9", classification: "Peso normal", color: "#546de5" },
    { range: "25,0 - 29,9", classification: "Sobrepeso", color: "#f3a683" },
    {
      range: "30,0 - 34,9",
      classification: "Obesidade Grau I",
      color: "#e77f67",
    },
    {
      range: "35,0 - 39,9",
      classification: "Obesidade Grau II",
      color: "#f19066",
    },
    {
      range: "Acima de 40",
      classification: "Obesidade Grau III",
      color: "#e15f41",
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <h3 className={styles.tableTitle}>Tabela de Classificação</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>IMC</th>
            <th className={styles.th}>Classificação</th>
          </tr>
        </thead>
        <tbody>
          {classifications.map((item, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.td}>{item.range}</td>
              <td
                className={`${styles.td} ${styles.classificationCell}`}
                style={{ color: item.color }}
              >
                {item.classification}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
