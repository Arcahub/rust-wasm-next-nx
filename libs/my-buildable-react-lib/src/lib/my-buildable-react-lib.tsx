import styles from './my-buildable-react-lib.module.scss';

/* eslint-disable-next-line */
export interface MyBuildableReactLibProps {}

export function MyBuildableReactLib(props: MyBuildableReactLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyBuildableReactLib!</h1>
    </div>
  );
}

export default MyBuildableReactLib;
