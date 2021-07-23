import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faClock,
  faPhoneAlt,
  faTrashAlt,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import GuestContext from "../../context/guestsContext/guestContext";

const GuestItem = ({ guest }) => {
  const { removeGuest, editGuestValues, updateGuest, clearEdit } =
    useContext(GuestContext);
  const { _id, name, phone, diet, isConfirmed } = guest;

  const handleRemove = () => {
    removeGuest(_id);
    clearEdit()
  };
  const handleConfirm = () => {
    updateGuest({ ...guest, isConfirmed: !isConfirmed });
  };

  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label className={`${isConfirmed && "confirm"}`}>
            {isConfirmed ? "confirmed" : "pending"}{" "}
            <FontAwesomeIcon icon={isConfirmed ? faCheckSquare : faClock} />
            <input type="checkbox" onChange={handleConfirm} />
          </label>
        </div>
        <div>
          <button onClick={() => editGuestValues(guest)}>
            <FontAwesomeIcon icon={faUserEdit} />
          </button>
          <button onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrashAlt} className="remove" />
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span className="badge red"> {diet}</span>
        <div className="contact">
          <FontAwesomeIcon icon={faPhoneAlt} />
          {phone}
        </div>
      </div>
    </div>
  );
};

export default GuestItem;
