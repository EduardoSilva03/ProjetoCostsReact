import {FaFacebook, FaInstagram , FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><a className={styles.a_redirect} target="_blank" href="https://www.linkedin.com/in/eduardo-da-silva-03a929219/"><FaLinkedin /></a></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer