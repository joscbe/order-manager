import { Col, Row } from 'react-bootstrap'
import styles from './OrderCard.module.css'
import { MdAccessTime, MdDeliveryDining, MdOutlineWhatsapp, MdPrint } from "react-icons/md"
import { BsCash } from "react-icons/bs"
import { IoMdPerson } from "react-icons/io"
import { ButtonOrder } from '../ButtonOrder/ButtonOrder'


export const OrderCard = ({ variant }) => {
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
                <span>#6154</span>
                <div>
                    <MdAccessTime />
                    <span>18:51</span>
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
                                <span>R$ 30,27</span>
                                <small>Cartão de Crédito</small>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='d-flex align-items-center'>
                            <i><IoMdPerson /></i>
                            <div className='d-flex flex-column ms-1'>
                                <span>PEDIDO TESTE - Josebe</span>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className='d-flex align-items-center'>
                            <i className='text-success'><MdOutlineWhatsapp /></i>
                            <div className='d-flex flex-column ms-1'>
                                <span>(11) 95957-2150</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={`${styles.footer} d-flex justify-content-between`}>
                <i><MdPrint /></i>

                <ButtonOrder variant={variant} />
            </div>
        </div>
    )
}