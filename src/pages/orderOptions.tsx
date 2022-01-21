import Link from 'next/link';
import styles from '../../styles/Home.module.css';
const OrderOptions = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Ordenes</h1>
        <div className={styles.grid}>
          <Link href="../checklist">
            <a className={styles.card}>
              <h2>Crear nueva Orden &rarr;</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </a>
          </Link>
          <Link href="../clienteConstancia">
            <a className={styles.card}>
              <h2>Buscar Orden &rarr;</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default OrderOptions;
