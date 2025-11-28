import { createBrowserRouter } from "react-router-dom"
import App from "./App"

import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage"
import CartPage from "../pages/CartPage/CartPage"
import ProductPage from "../pages/ProductPage/ProductPage"
import CatalogPage from "../pages/CatalogPage/CatalogPage"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "catalog", element: <CatalogPage /> },
        { path: "product/:id", element: <ProductPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "favorites", element: <FavoritesPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "profile", element: <ProfilePage /> },
      ],
    },
  ],
  {
    basename: "/Brainwave.io", // ключове
  }
)

