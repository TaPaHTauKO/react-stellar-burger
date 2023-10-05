import uuid from "react-uuid"

export const ingredientDataSelector = (store) => {
  const allIngr = store.ingredientData.ingredientData.map((item) => ({ ...item, unicId: uuid() }))
  return allIngr
}