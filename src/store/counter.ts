import { create } from 'zustand';
interface CounterState {
  count: number;
  increment: (step: number) => void;
  reset: () => void;
}

export const useCounterState = create<CounterState>()((set) => ({
  count: 0,
  increment: (step) => set((state) => ({ count: state.count + step })),
  reset: () => set(() => ({ count: 0 }))
}));
