import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"

const AppStorage = configureStore({
  reducer:{
    cartSlice: cartSlice
  }
})

export default AppStorage