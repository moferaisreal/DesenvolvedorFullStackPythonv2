// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { PI, GMT_BRASIL as horarioBrasilia } from "./teste";
// import nomes from "./nomes";
import { useState } from "react";
import Profile from "./components/Perfil";
import Form from "./components/Form";
import ReposList from "./components/RepoList";

function App() {
  //   const [count, setCount] = useState(0)

  //   return (
  //     <>
  //       <div>
  //         <a href="https://vite.dev" target="_blank">
  //           <img src={viteLogo} className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://react.dev" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <div className="card">
  //         <button onClick={() => setCount((count) => count + 1)}>
  //           count is {count}
  //         </button>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p>
  //     </>
  //   )

  // function returnNombre() {
  //   const nome = "macaco";
  //   return nome;
  // }

  // const pessoa = { nome: "JaJa" };
  // let isDia = false;

  const [formVisible, setFormVisible] = useState(false);

  const [userName, setUserName] = useState("");

  return (
    // conceito de fragmento é a mesma coisa que usar um elemento encapsulador
    // usando props
    <>
      <input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      {userName.length < 3 && <p>Digite o nome de usuário</p>}
      <>
        <Profile userName={userName} />
        {formVisible && <ReposList userName={userName} />}
        <br />
        <hr />
        <br />
        {/* {formVisible && <Form />} */}
      </>

      <button onClick={() => setFormVisible(!formVisible)} type="button">
        {formVisible ? "Fechar formulário" : "Abrir formulário"}
      </button>
      {/* <h1>Olá seu {returnNombre()}</h1> */}
      {/* <h2>Fale logo {pessoa.nome}</h2> */}
      {/* {isDia ? <h3>Bom dia!</h3> : <h3>Boa noite!</h3>} */}
      {/* <ul>
        <li>{nomes[0]}</li>
        <li>{nomes[1]}</li>
        <li>{nomes[2]}</li>
        <li>{nomes[3]}</li>
      </ul>
      <h3>
        PI: {PI}, GMT_BRASIL: {horarioBrasilia}
      </h3> */}
    </>
  );
}

export default App;
