export const GET_SELECTED = "GET_SELECTED";

export const getSelected = (id) => {
    console.log("action"+id)
  return { type: GET_SELECTED, furnitureId: id };
};
