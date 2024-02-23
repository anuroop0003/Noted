import {create} from 'zustand';

const useStore = create(set => ({
  loading: false,
  setLoading: () => set(state => state),
}));

export default useStore;
