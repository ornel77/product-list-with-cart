import {create} from "zustand"

const useQtyStore = create((set) => ({
    quantitiesList: {},
    increment: (id) => set((state) => {
        const currentQty = state.quantitiesList[id] || 0
        return {
            quantitiesList: {
                ...state.quantitiesList,
                [id]: currentQty + 1
            }
        }
    })
}))

export default useQtyStore