import { useEffect, useState } from "react";
import ParentPrevs from "../parent/Parent";

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);
  const [modalContent, setModalContent] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [cartProds, setCartProds] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const providerValues = {
    products: products,
    search: search,
    setSearch: setSearch,
    filterSearch: filterSearch,
    setFilterSearch: setFilterSearch,
    modalContent: modalContent,
    setModalContent: setModalContent,
    modalVisible: modalVisible,
    setModalVisible: setModalVisible,
    cartProds: cartProds,
    setCartProds: setCartProds,
    total: total,
    setTotal: setTotal,
  };

  return (
    <ParentPrevs.Provider value={providerValues}>
      {children}
    </ParentPrevs.Provider>
  );
};

export default Provider;
