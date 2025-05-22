import { JSX } from "react";
import styles from "./Hero.module.sass";

function Hero(): JSX.Element {
  return (
    <section className={styles.Hero}>
      <h1>Itos Store</h1>
      <h2>Prueba de texto</h2>
    </section>
  );
}

export default Hero;
