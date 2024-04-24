import { MdHome, MdShoppingCart, MdFastfood, MdOutlineShoppingBag, MdSoupKitchen, MdOutlineWhatsapp  } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import styles from './SidebarPartial.module.css'


export const SideBarPartial = (props) => {

    return (
        <aside className={`${props.className}`}>
            <div className={`${styles.sidebar} d-flex flex-column`}>
                <i><MdHome /></i>
                <i><MdShoppingCart className={styles.selected} /></i>
                <i><MdFastfood /></i>
                <i><MdOutlineShoppingBag /></i>
                <i><MdSoupKitchen /></i>                
                <i><MdOutlineWhatsapp /></i>
                <i><SiHomeassistantcommunitystore /></i>
            </div>
        </aside>
    )
}