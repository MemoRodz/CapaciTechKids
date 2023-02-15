import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({url, text}) {

  return (
    <>
        <Link to={url}>{text}</Link>
    </>
  )
}

export default LinkButton