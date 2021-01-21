import styles from './Toggle.module.scss'
import { useContext} from 'react'
import {DarkContext} from '../../pages/index'

interface IToggle {
  status: Boolean;
  [x:string]:any;
}

//use context provider or redux for this site (since it will toggle dark mode)

const Toggle = ({status, setDarkMode, ...props}) => {
   const darkMode = useContext(DarkContext)

    return (
      <div {...props}>
        <span className={styles.toggle} onClick={e => {
          setDarkMode(!darkMode)
          console.log(darkMode)

        }}>
          <span className={`${styles.switch} ${darkMode ? styles.on : ''}`}></span>
        </span>
      </div>
    )
}

export default Toggle;

//need interface or prop types w/TS -- be sure to use them