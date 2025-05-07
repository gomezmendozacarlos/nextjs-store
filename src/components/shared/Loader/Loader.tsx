import styles from './Loader.module.sass';

const Loader = () => {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={styles.Loader}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
};

export default Loader;