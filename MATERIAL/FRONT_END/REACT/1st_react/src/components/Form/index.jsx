import { useState, useEffect } from "react";

const Form = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("O componente foi atualizado");
    return () => {
      console.log("O componente será desmontado");
    };
  }, []);

  const renderResult = () => {
    const sum = materiaA + materiaB + materiaC;
    const media = (sum / 3).toFixed(2);
    const status = media >= 7 ? "aprovado" : "reprovado";
    // precisa retornar um objeto com os dois valores
    return { status: status, media: media };
  };

  const changeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
    setName((laterState) => {
      console.log("Valor anterior:", laterState);
      return event.target.value;
    });
  };

  const finalResult = () => {
    // pra usar a função dentro de outra tem que chamar ela através de uma variável
    const resultData = renderResult();
    return (
      <>
        <p>
          O <b>{name}</b> foi <b>{resultData.status}</b> com média{" "}
          <b>{resultData.media}</b>
        </p>
      </>
    );
  };

  return (
    <form>
      <label>
        Seu Nombre{" "}
        <input
          type="text"
          placeholder=""
          onChange={(event) => changeName(event)}
        />{" "}
      </label>
      <label>
        Nota A{" "}
        <input
          type="number"
          name="number"
          min="0"
          max="10"
          placeholder=""
          onChange={(event) => setMateriaA(parseInt(event.target.value))}
        />{" "}
      </label>
      <label>
        Nota B{" "}
        <input
          type="number"
          name="number"
          min="0"
          max="10"
          placeholder=""
          onChange={(event) => setMateriaB(parseInt(event.target.value))}
        />{" "}
      </label>
      <label>
        Nota C{" "}
        <input
          type="number"
          name="number"
          min="0"
          max="10"
          placeholder=""
          onChange={(event) => setMateriaC(parseInt(event.target.value))}
        />
      </label>

      {finalResult()}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <li key={item}>{item}</li>
      ))} */}
    </form>
  );
};

export default Form;
