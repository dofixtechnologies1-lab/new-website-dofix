import { configureStore, combineReducers } from "@reduxjs/toolkit";

import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailsReducer from "./features/product-details";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  quickViewReducer,
  cartReducer,
  wishlistReducer,
  productDetailsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer", "wishlistReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,   // ✅ IMPORTANT LINE
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;