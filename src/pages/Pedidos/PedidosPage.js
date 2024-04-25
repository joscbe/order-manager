import styles from './PedidosPage.module.css'
import { IoMdSettings } from "react-icons/io";
import { Col, Row } from 'react-bootstrap';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import { usePedidosPage } from './usePedidosPage';


export const PedidosPage = () => {
    const { state, handleClickOrder } = usePedidosPage();

    return (
        <div className="p-3">
            <div className="d-flex justify-content-between">
                <div>
                    <span className={styles.title}>Pedidos (16)</span>
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
                            {state.orders.map((order, index) => (
                                order.state === 'wait' ?
                                    <OrderCard key={index} order={order} variant={order.state} onclick={() => handleClickOrder(order)} />
                                    : ''
                            ))}
                        </div>
                    </Col>
                    <Col className={styles.column}>
                        <div className={styles.header}>
                            <span>Em Preparo (3)</span>
                        </div>

                        <div className={styles.body}>
                            {state.orders.map((order, index) => (
                                order.state === 'preparation' ?
                                    <OrderCard key={index} order={order} variant={order.state} onclick={() => handleClickOrder(order)} />
                                    : ''
                            ))}
                        </div>
                    </Col>
                    <Col className={styles.column}>
                        <div className={styles.header}>
                            <span>Em Entregra/Pronto (4)</span>
                        </div>

                        <div className={styles.body}>
                            {state.orders.map((order, index) => (
                                order.state === 'delivery' ?
                                    <OrderCard key={index} order={order} variant={order.state} onclick={() => handleClickOrder(order)} />
                                    : ''
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}