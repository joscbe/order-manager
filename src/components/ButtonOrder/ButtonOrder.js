import styles from './ButtonOrder.module.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export const ButtonOrder = ({ variant }) => {
    let estilo = '';
    let textButton = '';

    switch(variant){
        case 'wait':
            estilo = styles.purple;
            textButton = "AGUARDANDO";
        break;
        case 'preparation':
            estilo = styles.green;
            textButton = "EM PREPARO"
        break;
        case 'delivery':
            estilo = styles.orange
            textButton = "EM ENTREGA"
        break;
    }

    return (
        <button className={`${styles.button} ${estilo}`}>{textButton} <i><MdOutlineKeyboardArrowRight /></i></button>
    )
}