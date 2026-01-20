import styles from "./Perfil.module.css";

const Profile = ({ userName }) => {
  return (
    <header className={styles.header}>
      {/* {JSON.stringify({ nome, avatar })} */}
      <img
        className={styles.avatar}
        src={`https://github.com/${userName}.png`}
        alt=""
      />
      <h1 className={styles.name}>{userName}</h1>
    </header>
  );
};

export default Profile;

// alternativa de exportação

// export default () => {
//   const user = {
//     nome: "Marcelo",
//     avatar: "https://avatars.githubusercontent.com/u/143962450?v=4",
//   };
//   return (
//     <div>
//       <h1>Perfil</h1>
//       <h2 className="profile-text">{user.nome}</h2>
//       <img className="profile-avatar" src={user.avatar} alt="" />
//     </div>
//   );
// };

// OUTRA ALTERNATIVA DE EXPORTAÇÃO

// export default function(){
//   const user = {
//     nome: "Marcelo",
//     avatar: "https://avatars.githubusercontent.com/u/143962450?v=4",
//   };
//   return (
//     <div>
//       <h1>Perfil</h1>
//       <h2 className="profile-text">{user.nome}</h2>
//       <img className="profile-avatar" src={user.avatar} alt="" />
//     </div>
//   );
// }
