import React, { useState, useEffect, useContext } from "react";
import GuestContext from "../../context/guestsContext/guestContext";

const GuestForm = () => {
  const context = useContext(GuestContext);
  const { addGuest, editGuest, clearEdit, updateGuest } = context;

  useEffect(() => {
    if (editGuest !== null) {
      setGuest(editGuest);
    } else {
      setGuest({
        name: "",
        phone: "",
        diet: "all",
      });
    }
  }, [editGuest, context]);

  const [guest, setGuest] = useState({
    name: "",
    phone: "",
    diet: "all",
  });

  const { name, phone, diet } = guest;

  const onchange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (editGuest === null) {
      addGuest(guest);
    } else {
      updateGuest(guest);
      clearEdit();
    }
    setGuest({
      name: "",
      phone: "",
      diet: "all",
    });
  };

  return (
    <div className="invite-section">
      <h1>{editGuest === null ? "Invite Someone" : "Edit Guest"}</h1>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onchange}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onchange}
          required
        />

        <p className="options-label">Dietary restrictions</p>
        <div className="options">
          <label className="container">
            None
            <input
              type="radio"
              name="diet"
              value="all"
              onChange={onchange}
              checked={diet === "all"}
            />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            Vegetarian
            <input
              type="radio"
              name="diet"
              value="vegetarian"
              onChange={onchange}
              checked={diet === "vegetarian"}
            />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            Vegan
            <input
              type="radio"
              name="diet"
              value="vegan"
              onChange={onchange}
              checked={diet === "vegan"}
            />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            Celiac
            <input
              type="radio"
              name="diet"
              value="celiac"
              onChange={onchange}
              checked={diet === "celiac"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Diabetic
            <input
              type="radio"
              name="diet"
              value="diabetic"
              onChange={onchange}
              checked={diet === "diabetic"}
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <input
          type="submit"
          value={editGuest !== null ? "Update Guest" : "Add Guest"}
          className="btn"
        />
        {editGuest !== null ? (
          <input
            onClick={clearEdit}
            type="button"
            className="btn clear"
            value="Cancel"
          />
        ) : null}
      </form>
    </div>
  );
};

export default GuestForm;

