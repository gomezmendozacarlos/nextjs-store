'use client';

import styles from "app/sass/global-error.module.sass";
import Image from "next/image";

export default function Error({ reset }: ErrorProps) {
  return (
    <main
      className={styles.Error}
    >
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image
        src="/images/error.png"
        alt="Error"
        width={500}
        height={500}
        priority
      />
      <p className={styles.Error__message}>Houston we have a problem!</p>
      <button className={styles.Error__button} onClick={reset}>Volver a intentar</button>
    </main>
  );
}
