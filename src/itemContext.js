import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";
const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomeItemContext({ children }) {

  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);

    if (index === -1) {
      setCart([...cart, { ...prod, qyt:1 }]);
      
      setTotal(total + prod.price);
    }
    else{
      cart[index].qyt++;
      setCart(cart);
      setTotal(total+cart[index].price)
    }
    setItem(item+1);
  };

  const handleRemove = (id) => {
    const index = cart.findIndex((item)=>item.id===id);
    if(index !== -1){
      cart[index].qyt--;
      setItem(item-1);
      if(cart[index].qyt === 0){
        cart.splice(index,1);
      }
      
    }
    setCart(cart);
    setTotal(total-cart[index].price);
    
  };

  const clear = () => {
    setItem(0);
    setTotal(0);
    setCart([]);
  };

  const toggle = () => {
    setShowCart(!showCart);
  }


  return (
    <itemContext.Provider value={{ total, item, handleAdd, handleRemove, clear, toggle ,cart}}>
      {showCart && <CartModal/>}
      {children}
    </itemContext.Provider>
  )
}

export { itemContext, useValue };
export default CustomeItemContext;