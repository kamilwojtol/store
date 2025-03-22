import { defineStore } from "pinia";
import type { Product } from "~/types/Product";

type State = {
  favourites: Product[];
};

const setLocalStorage = (favourites: Product[]) => {
  useLocalStorage("favourites", favourites);
};

export const isInFavourites = (favourites: Product[], id: number) => {
  return favourites.find((fav) => {
    return fav.id === id;
  });
};

export const useFavouriteStore = defineStore("favourites", {
  state: (): State => {
    return { favourites: [] };
  },
  actions: {
    addToFavourites(payload: Product) {
      if (!isInFavourites(this.favourites, payload.id)) {
        this.favourites.push(payload);
        setLocalStorage(this.favourites);
        return;
      }
      throw new Error("Item is already in favourites!");
    },
    removeFromFavourites(id: number) {
      if (isInFavourites(this.favourites, id)) {
        this.favourites = this.favourites.filter((fav) => {
          return fav.id !== id;
        });
        if (this.favourites.length === 0) {
          localStorage.removeItem("favourites");
          return;
        } else {
          setLocalStorage(this.favourites);
        }
        return;
      }
      throw new Error("Item is not in favourites!");
    },
    loadFromLocalStorage() {
      const data = localStorage.getItem("favourites");
      if (data) {
        this.favourites = JSON.parse(data);
      }
    },
  },
  getters: {
    state: (state) => state.favourites,
  },
});
