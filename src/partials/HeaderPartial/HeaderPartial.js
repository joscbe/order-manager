import { IoPersonCircleSharp } from "react-icons/io5";
import styles from './HeaderPartial.module.css'

export const HeaderPartial = (props) => {

    return(
        <header className={`${styles.nav} ${props.className}`}>
            <div className="d-flex justify-content-between align-items-center p-3">
                <div className="d-flex align-items-center">
                    <img className={styles.logo} src="/images/logo-fast-food.png" alt="Logo empresa" />
                    <h3 className={styles.title}>ORDER MANAGER - EMPRESA EXEMPLO</h3>
                </div>

                <div className="d-flex align-items-center">
                    <span className={styles.nameUser}>Olá, FUNCIONÁRIO</span>
                    <IoPersonCircleSharp className={styles.iconeUser} />
                </div>
            </div>
        </header>
    )
}