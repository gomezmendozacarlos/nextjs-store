'use client'

import { useState } from "react";
import styles from "./Description.module.sass";
import Image from "next/image";
import classNames from "classnames/bind";

function Description() {
  const [hasBorder, setHasBorder] = useState<boolean>(false);
  
  const handleClick = () => {
    setHasBorder(!hasBorder);
  };

  const cx = classNames.bind(styles)

  const buttonStyle = cx(
    'Description__button',{
    "Description__button--border": hasBorder,
  });

  return (
    <section className={styles.Description}>
    <button  onClick={handleClick} className={buttonStyle}>
      <Image
        src="/images/description.jpeg"
        width={500}
        height={300}
        alt="Description"
        priority={false}
        quality={75}
      />
    </button>
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          unde vitae autem quasi in! Ducimus maxime quo quasi, dolor minima
          nulla iste, error rerum dignissimos alias dolorem nobis iure minus.
        </p>
      </div>
    </section>
  );
}

export default Description;
