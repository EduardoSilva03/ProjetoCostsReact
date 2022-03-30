import styles from './Company.module.css'

function Company() {
    return (
        <div className={styles.company_container}>
            <div className={styles.title_container}>
                <h1><span>Empresa</span></h1>
            </div>
            <div className={styles.company_container}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus dolor ex. Praesent eu viverra neque. Nullam et vehicula urna. Nunc egestas maximus nunc, eu facilisis erat imperdiet vel. Etiam augue velit, porttitor quis augue at, vestibulum porttitor nulla. Cras at turpis tortor. Nullam euismod velit ac justo cursus tempus. Praesent mi turpis, blandit sit amet diam vel, iaculis bibendum leo. Quisque euismod arcu nec tortor rutrum pellentesque. Duis elementum, quam lobortis tempor tincidunt, neque ante semper quam, et tempus libero nisi sit amet nisl. Mauris vel porta urna. Vestibulum eu tortor cursus, lacinia nunc vel, vulputate nisi. Nam lobortis elit mauris. Quisque eu mollis purus. Donec volutpat leo ac consequat fringilla.</p>
            </div>
        </div>
    )
}

export default Company