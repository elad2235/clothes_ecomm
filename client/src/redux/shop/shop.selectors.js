import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (col) => Object.keys(col).map((key) => col[key])
);

export const selectCollection = (collectionId) =>
  createSelector([selectCollections], (col) => col[collectionId]);
