import { useEffect, useState } from "react";
import styles from "./RepoList.module.css";

const ReposList = ({ userName }) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setIsLoading(false);
        setRepos(resJson);
        console.log(resJson);
      });
  }, [userName]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <h1>Loadeando...</h1>
      ) : (
        <ul className={styles.list}>
          {/* {repos.map((repositorio) => ( */}
          {/* DESESTRUTURAÇÃO */}
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.itemName}>
                Nome:<b>{name}</b>{" "}
              </div>
              <div className={styles.itemLanguage}> {language} </div>
              <a className={styles.itemLink} target="_blank" href={html_url}>
                Github
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
