import MyHeader from "../assets/MyHeader.svg"
import styles from "./style.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={MyHeader} alt="Minha logo" />
            <nav>
                <ul>
                    <li>home</li>
                    <li>sobre</li>
                    <li>contato</li>
                </ul>
                <button>fale agora</button>
            </nav>
        </header>
    )
}

export default Header