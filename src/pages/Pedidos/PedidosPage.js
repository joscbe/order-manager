import styles from './PedidosPage.module.css'
import { RxUpdate } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { Col, Row } from 'react-bootstrap';
import { OrderCard } from '../../components/OrderCard/OrderCard';


export const PedidosPage = () => {

    return(
       <div className="p-3">
            <div className="d-flex justify-content-between">
                <div>
                    <span className={styles.title}>Pedidos (16)</span>
                    {/* <RxUpdate className={`${styles.title}`} />
                    <small>25s</small> */}
                </div>

                <div>
                    <IoMdSettings />
                    <span className={styles.textOpcoes}>OPÇÕES</span>
                </div>
            </div>

            <div>
                <Row className='mt-4'>
                    <Col className={styles.column}>
                        <div className={styles.header}>
                            <span>Aguardando (2)</span>
                        </div>

                        <div className={styles.body}>
                            <OrderCard variant='wait' />
                            <OrderCard variant='wait' />
                        </div>
                    </Col>
                    <Col className={styles.column}>
                        <div className={styles.header}>
                            <span>Em Preparo (3)</span>
                        </div>

                        <div className={styles.body}>
                            <OrderCard variant='preparation' />
                        </div>
                    </Col>
                    <Col className={styles.column}>
                        <div className={styles.header}>
                            <span>Em Entregra/Pronto (4)</span>
                        </div>

                        <div className={styles.body}>
                            <OrderCard variant='delivery' />
                            <OrderCard variant='delivery' />
                            <OrderCard variant='delivery' />
                        </div>
                    </Col>
                </Row>
            </div>
       </div>
    )
}