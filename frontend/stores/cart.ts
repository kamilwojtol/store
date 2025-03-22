import { defineStore } from "pinia";
import type { Product } from "~/types/Product";

type CartProduct = Product & { quantity: number };

type State = {
  cart: CartProduct[];
};

const setLocalStorage = (cart: Product[]) => {
  useLocalStorage("cart", cart);
};

const isInCart = (cart: Product[], id: number) => {
  return cart.find((item) => {
    return item.id === id;
  });
};

export const useCartStore = defineStore("cart", {
  state: (): State => {
    return {
      cart: [],
    };
  },
  actions: {
    addToCart(payload: Product) {
      if (isInCart(this.cart, payload.id)) {
        this.cart.find((item) => {
          if (item.id === payload.id) {
            item.quantity++;
          }
        });
        return;
      }
      this.cart.push({ ...payload, quantity: 1 });
      setLocalStorage(this.cart);
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id);
      if (this.cart.length === 0) {
        localStorage.removeItem("cart");
        return;
      }
      setLocalStorage(this.cart);
    },
    addQuantity(id: number) {
      this.cart.find((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
      setLocalStorage(this.cart);
    },
    subtractQuantity(id: number) {
      this.cart.find((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            this.removeFromCart(id);
            return;
          }
          item.quantity--;
        }
      });
      setLocalStorage(this.cart);
    },
    clearCart() {
      this.cart = [];
      localStorage.removeItem("cart");
    },
    loadFromLocalStorage() {
      const data = localStorage.getItem("cart");
      if (data) {
        this.cart = JSON.parse(data);
      }
    },
  },
  getters: {
    state: (state) => state.cart,
  },
});
