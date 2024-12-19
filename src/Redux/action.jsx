export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const UPDATE_USER = "UPDATE_USER";

export function increment() {
  return { type: INCREMENT };
}

export function Decrement() {
  return { type: DECREMENT };
}

export function Reset() {
  return { type: RESET };
}

export function Update_User(user) {
  return { type: UPDATE_USER, payload: user };
}
