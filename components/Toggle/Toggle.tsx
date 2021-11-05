import styles from './Toggle.module.scss';
import { useContext } from 'react';
import { DarkContext } from '../../pages/index';

interface IToggle {
  setDarkMode: (context: boolean) => void;
}

//use context provider or redux for this site (since it will toggle dark mode)

const Toggle = ({ setDarkMode }: IToggle) => {
  const darkMode = useContext(DarkContext);

  return (
    <div>
      <span className={styles.toggle} onClick={() => setDarkMode(!darkMode)}>
        <span
          className={`${styles.switch} ${darkMode ? styles.on : ''}`}
        ></span>
      </span>
    </div>
  );
};

export default Toggle;

//need interface or prop types w/TS -- be sure to use them
