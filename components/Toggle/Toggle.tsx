import styles from './Toggle.module.scss'
import {useState} from 'react'

interface IToggle {
  status: Boolean;
  [x:string]:any;
}

//use context provider or redux for this site (since it will toggle dark mode)

const Toggle : React.FC<IToggle> = ({status, ...props}) => {
    const [toggle, setToggle] = useState(status ?? false)
    return (
      <div {...props}>
        <span className={styles.toggle} onClick={()=>setToggle(!toggle)}>
          <span className={`${styles.switch} ${toggle ? styles.on : ''}`}></span>
        </span>
      </div>
    )
}

export default Toggle;

//need interface or prop types w/TS -- be sure to use them