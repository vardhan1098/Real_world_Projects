export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function AddTodo(title) {
  return { type: ADD_TODO, payload: { title } };
}

export function EditTodo(id, updateTitle) {
  return { type: EDIT_TODO, payload: { id, updateTitle } };
}

export function DeleteTodo(id) {
  return { type: DELETE_TODO, payload: { id } };
}
