# 🛒 Redux Store

### 🚀 Live Demo

**[https://02-redux-shop.vercel.app/](https://02-redux-shop.vercel.app/)**

### 📂 Repository

**[https://github.com/abratsiuk/02.redux.shop](https://github.com/abratsiuk/02.redux.shop)**

---

## 📘 Overview

**Redux Store** is a learning e-commerce project built with **React**, **TypeScript**, and **Redux**.
It uses the **fortniteapi.io** API as a source for the product catalog.

The application simulates a full online store: product listing, cart, order creation, order history, and balance management.
All user-related data (cart, orders, balance) is stored in **LocalStorage**.

---

## 🎯 Features

* Product catalog loaded from **fortniteapi.io**
* Add products to the cart
* Confirm cart → it becomes an order
* Order history with acceptance/cancellation
* Cancelled orders automatically refund the user’s balance
* User balance can be topped up
* All cart and order data persist in **LocalStorage**
* Client-side filtering of the product catalog
* Fully component-based UI using **Sass** and **BEM**

---

## 🧰 Tech Stack

### Core Technologies

* **React**
* **TypeScript**
* **Redux** (classic Redux, **no Redux Toolkit**)
* **Redux Thunk**
* **Sass**
* **BEM (Block–Element–Modifier)**

### Additional Tools

* **React Router**
* **axios** for API communication
* 2021 stack:

  * CRA
  * React 17
  * Redux 4

---

## ⚙ Technical Notes

* React + TypeScript application
* State management: classic Redux + Thunk
* No UI libraries — all styles are handcrafted with **Sass + BEM**
* Uses **axios** for API requests
* A second version of the project is planned using:

  * modern React
  * Redux Toolkit
  * updated architecture

