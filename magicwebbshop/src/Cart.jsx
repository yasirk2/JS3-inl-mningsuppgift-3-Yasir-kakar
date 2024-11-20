import { useContext } from "react";
import ParentPrevs from "./parent/Parent";

export default function Cart() {
  let sum = 0;
  const pV = useContext(ParentPrevs);

  const removeHandler = (prodIndex) => {
    pV.setCartProds((prevCart) => prevCart.filter((_, i) => prodIndex !== i));
    console.log(prodIndex);
  };

  function calculateTotal() {
    pV.cartProds.map((prod) => (sum += prod.quantity * prod.price));
  }
  calculateTotal();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {pV.cartProds.map((prod, index) => {
        return (
          <div className="cartProd" key={index}>
            <div className="upperCart">
              <img src={prod.thumbnail} alt={prod.title} />
              <h5>{prod.title}</h5>
            </div>
            <div className="lowerCart">
              <p>
                Qty: {prod.quantity}. Price {prod.price} $
              </p>
              <img
                onClick={() => removeHandler(index)}
                src="delete.png"
                alt="trashcan"
              />
            </div>
          </div>
        );
      })}
      <h3>Total: {Math.floor(sum)} $ </h3>
    </div>
  );
}