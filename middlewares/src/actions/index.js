import { FETCH_USERS } from "./types";

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: [{ name: "Jane" }, { name: "Alex" }, { name: "Jim" }]
});
