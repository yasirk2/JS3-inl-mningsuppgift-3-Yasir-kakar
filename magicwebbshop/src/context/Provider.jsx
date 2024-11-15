import { useEffect, useState } from "react";
import ParentPrevs from "../parent/Parent";

const Provider = ({ children }) => {
  const [test, setTest] = useState("dnskfjnsdf");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);
  const [modalContent, setModalContent] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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
  };

  return (
    <ParentPrevs.Provider value={providerValues}>
      {children}
    </ParentPrevs.Provider>
  );
};

export default Provider;
