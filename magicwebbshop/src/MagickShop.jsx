import { useContext } from "react";
import ParentPrevs from "./parent/Parent";
import Cart from "./Cart";
import Header from "./Header";
import Modal from "./Modal";

export default function MagickShop() {
  const pV = useContext(ParentPrevs);

  // CartHandler lägger principp till ett quantity attribut och kollar ifall produkten redan finns med id.
  // Finns produkten så ökar den quantity annars lägger den bara till den i cart staten
  const cartHandler = (prod) => {
    const prodExist = pV.cartProds.find((product) => product.id === prod.id);
    console.log(pV.cartProds);

    if (prodExist) {
      const updatedCart = pV.cartProds.map((product) =>
        product.id === prod.id
          ? { ...product, quantity: (product.quantity || 1) + 1 }
          : product
      );

      pV.setCartProds(updatedCart);
    } else {
      pV.setCartProds((prevProds) => [...prevProds, { ...prod, quantity: 1 }]);
    }
  };

  // modalhandler lägger in produkten som har blivit klickat på i modalcontent
  // för att senare kunna visa den samt gör att modalen är synlig
  const modalHandler = (prod) => {
    pV.setModalContent(prod);
    pV.setModalVisible(true);
  };

  return (
    <>
      <Header />
      <div className="outerContainer">
        <div className="container">
          {pV.filterSearch.length < 1
            ? pV.products.map((prod, index) => {
                return (
                  <div className="prodCard" key={index}>
                    <img src={prod.thumbnail} alt={prod.title} />
                    <h3>{prod.title}</h3>
                    <p className="moreInfo" onClick={() => modalHandler(prod)}>
                      more information
                    </p>
                    <p>Price: {prod.price} $</p>
                    <button onClick={() => cartHandler(prod)}>
                      Add to cart
                    </button>
                  </div>
                );
              })
            : pV.filterSearch.map((prod, index) => {
                return (
                  <div className="prodCard" key={index}>
                    <img src={prod.thumbnail} alt={prod.title} />
                    <h3>{prod.title}</h3>
                    <p className="moreInfo" onClick={() => modalHandler(prod)}>
                      more information
                    </p>
                    <p>Price: {prod.price} $</p>
                    <button onClick={() => cartHandler(prod)}>
                      Add to cart
                    </button>
                  </div>
                );
              })}
          <Modal />
        </div>
        <Cart />
      </div>
    </>
  );
}
