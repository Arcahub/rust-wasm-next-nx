import styles from './my-react-lib.module.scss';

/* eslint-disable-next-line */
export interface MyReactLibProps {}

export function MyReactLib(props: MyReactLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyReactLib!</h1>
    </div>
  );
}

export default MyReactLib;