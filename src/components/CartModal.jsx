import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";
function CartModal() {
  const {cart,clear,total,toggle} = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle} >
        Close
      </div>
      <div className={styles.clearButton} onClick={clear} >
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item)=>(
          <div className={styles.cartCard} key={item.id}>
          <h1>{item.name}</h1>
          <h3>x{item.qyt}</h3>
          <h3>{item.qyt*item.price}</h3>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>&#x20B9;{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
