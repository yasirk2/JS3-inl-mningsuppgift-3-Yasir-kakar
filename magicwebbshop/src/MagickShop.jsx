import { useContext } from "react";
import ParentPrevs from "./parent/Parent";

export default function MagickShop() {
  const pV = useContext(ParentPrevs);
  console.log(pV.products);

  return (
    <>
      <h1>sdfksmdlf</h1>
    </>
  );
}
