import React, { useReducer } from "react";
import axios from "axios";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
import {
  GUEST_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  REMOVE_GUEST,
  ADD_GUEST,
  EDIT_GUEST,
  CLEAR_EDIT,
  UPDATE_GUEST,
  GET_GUESTS,
  GUESTS_ERROR,
  CLEAR_GUESTS,
} from "../types";

const GuestState = (props) => {
  const initialState = {
    guests: [],
    filterGuests: false,
    searchGuest: null,
    editGuest: null,
    error: null,
  };
  const [state, dispatch] = useReducer(guestReducer, initialState);

  //get all
  const getGuests = async () => {
    try {
      const res = await axios.get("/guests");
      dispatch({
        type: GET_GUESTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //filter guests
  const filterConfirmedGuests = async () => {
    try {
      dispatch({
        type: GUEST_FILTER,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //search for a guest:
  const searchForGuest = (guest) => {
    try {
      dispatch({
        type: SEARCH_GUEST,
        payload: guest,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const clearSearchGuest = () => {
    try {
      dispatch({
        type: CLEAR_SEARCH,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Edit Guest
  const editGuestValues = (guest) => {
    try {
      dispatch({
        type: EDIT_GUEST,
        payload: guest,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const removeGuest = async (id) => {
    await axios.delete(`/guests/${id}`);
    try {
      dispatch({
        type: REMOVE_GUEST,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const addGuest = async (guest) => {
    const config = {
      "Content-type": "application/json",
    };

    const res = await axios.post("/guests", guest, config);
    try {
      dispatch({
        type: ADD_GUEST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const updateGuest = async (guest) => {
    const config = {
      "Content-type": "application/json",
    };
    const res = await axios.put(`/guests/${guest._id}`, guest, config);
    try {
      dispatch({
        type: UPDATE_GUEST,
        payload: res.data,
      });
      getGuests()
      
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const clearEdit = () => {
    dispatch({
      type: CLEAR_EDIT,
    });
  };

  const clearGuests = () => {
    dispatch({
      type: CLEAR_GUESTS,
    });
  };

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuests: state.filterGuests,
        searchGuest: state.searchGuest,
        editGuest: state.editGuest,
        error: state.error,
        getGuests,
        filterConfirmedGuests,
        searchForGuest,
        clearSearchGuest,
        editGuestValues,
        removeGuest,
        addGuest,
        updateGuest,
        clearEdit,
        clearGuests,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
