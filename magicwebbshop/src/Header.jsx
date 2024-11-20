import { useContext } from "react";
import ParentPrevs from "./parent/Parent";

export default function Header() {
  const pV = useContext(ParentPrevs);

  const onChangeHandler = (event) => {
    pV.setSearch(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const filteredResults = pV.products.filter((prod) =>
      prod.title.toLowerCase().includes(pV.search.toLowerCase())
    );
    pV.setFilterSearch(filteredResults);
  };

  return (
    <div className="headerDiv">
      <h1>Magick Shop</h1>

      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={onChangeHandler}
          value={pV.search}
          placeholder="Search for product"
        />
        <button>search</button>
      </form>
    </div>
  );
}
