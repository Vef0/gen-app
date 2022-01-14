import Head from 'next/head';
import styles from '../styles/Home.module.css';
import UserCheckList from './components/userCheckList';
const checkList = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CheckList</title>
        <meta name="description" content="Forms to validate user credentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>CheckList</h3>
        <UserCheckList />
      </main>
    </div>
  );
};
export default checkList;
