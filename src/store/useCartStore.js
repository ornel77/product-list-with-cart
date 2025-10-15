import {create} from "zustand"

const useCartStore = create((set) => ({
    cartList: [],
    increment: (id) => set((state) => ({...state.cartList, [id] : qty }))
}))

export default useCartStore