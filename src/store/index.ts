import { create } from "zustand";

type CountState = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
};

export const useCountStore = create<CountState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));
