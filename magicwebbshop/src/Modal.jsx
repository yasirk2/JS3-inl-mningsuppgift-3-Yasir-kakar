import { useContext } from "react";
import ParentPrevs from "./parent/Parent";

export default function Modal() {
  const pV = useContext(ParentPrevs);

  return (
    <>
      {pV.modalVisible && (
        <div>
          <div
            onClick={() => pV.setModalVisible(false)}
            className="modalBack"
          ></div>
          <div className="modal">
            <img src={pV.modalContent.thumbnail} alt={pV.modalContent.title} />
            <h3>{pV.modalContent.title}</h3>
            <h5>{pV.modalContent.price} $</h5>
            <p>{pV.modalContent.description}</p>
            <button onClick={() => pV.setModalVisible(false)}>close</button>
          </div>
        </div>
      )}
    </>
  );
}
