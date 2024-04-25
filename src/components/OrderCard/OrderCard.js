import { Col, Row } from 'react-bootstrap'
import styles from './OrderCard.module.css'
import { MdAccessTime, MdDeliveryDining, MdOutlineWhatsapp, MdPrint } from "react-icons/md"
import { BsCash } from "react-icons/bs"
import { IoMdPerson } from "react-icons/io"
import { ButtonOrder } from '../ButtonOrder/ButtonOrder'


export const OrderCard = ({ order, variant, onclick }) => {
    let state;

    switch (variant) {
        case 'wait':
            state = styles.purple;
        break;
        case 'preparation':
            state = styles.green;
        break;
        case 'delivery':
            state = styles.orange;
        break;
        default:
            state = '';
    }

    return (
        <div className={`${styles.card} ${state}`}>
            <div className={`${styles.header} d-flex justify-content-between`}>
                <span>#{order.chatId}</span>
                <div>
                    <MdAccessTime />
                    <span>{String(order.created).substring(11)}</span>
                </div>
            </div>

            <div className={styles.body}>
                <Row>
                    <Col>
                        <div className='d-flex'>
                            <i><MdDeliveryDining /></i>
                            <div className='d-flex flex-column ms-1'>
                                <span>Delivery Entrega</span>
                                <small>Djalma - Mananus/AM</small>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className='d-flex'>
                            <i><BsCash /></i>
                            <div className='d-flex flex-column ms-1'>
                                <span>{order.price}</span>
                                <small>{order.typePayment}</small>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='d-flex align-items-center'>
                            <i><IoMdPerson /></i>
                            <div className='d-flex flex-column ms-1'>
                                <span>{order.name}</span>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className='d-flex align-items-center'>
                            <i className='text-success'><MdOutlineWhatsapp /></i>
                            <div className='d-flex flex-column ms-1'>
                                <span>{order.phone}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={`${styles.footer} d-flex justify-content-between`}>
                <i><MdPrint /></i>

                <ButtonOrder onclick={onclick} variant={variant} />
            </div>
        </div>
    )
}