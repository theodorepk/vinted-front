import create from "zustand";

export const useVintedStore = create((set) => ({
  min: 0,
  max: 100,
  priceMin: "",
  priceMax: "",
  setMin: (newMin) => set({ min: newMin }),
  setMax: (newMax) => set({ max: newMax }),
  setPriceMin: (newPriceMin) => set({ priceMin: newPriceMin }),
  setPriceMax: (newPriceMax) => set({ priceMax: newPriceMax }),
}));
