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

// eslint-disable-next-line
export default (state, { type, payload }) => {
  switch (type) {
    case GUEST_FILTER:
      return {
        ...state,
        filterGuests: !state.filterGuests,
      };
    case SEARCH_GUEST:
      const regex = new RegExp(`${payload}`, "gi");
      return {
        ...state,
        searchGuest: state.guests.filter((guest) => guest.name.match(regex)),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchGuest: null,
      };
    case REMOVE_GUEST:
      return {
        ...state,
        guests: state.guests.filter((guest) => guest._id !== payload),
      };
    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, payload],
      };
    case EDIT_GUEST:
      return {
        ...state,
        editGuest: payload,
      };
    case CLEAR_EDIT:
      return {
        ...state,
        editGuest: null,
      };
    case UPDATE_GUEST:
      return {
        ...state,
        guests: state.guests.map(guest => guest._id === payload._id ? payload : guest)
      };
    case GET_GUESTS:
      return {
        ...state,
        guests: payload,
        error: null,
      };
    case GUESTS_ERROR:
      return {
        ...state,
        guests: [],
        error: payload
      };
    case CLEAR_GUESTS:
      return {
        ...state,
        guestFilter: false,
        searchGuest: null,
        editGuest: null,
        guests: [],
        error: null
      };
    default:
      return state;
  }
};
