import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    car: [ "Model S", "Model x", "Model Y" ]
}

const carSlice = createSlice({
    name: "Car",
    initialState,
    reducers: {}
})

export const selectCars = state=> state.car.cars


export default carSlice.reducer