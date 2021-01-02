import React, { useReducer } from 'react';
import axios from 'axios';
import { JSON_API } from '../helpers/constants';
import { calcSubPrice, calcTotalPrice } from '../helpers/calcPrice';


export const AdminContext = React.createContext();

const INIT_STATE = {
    products: [],
    productToEdit: null,
    productDetails: null,
    searchProducts: [],
    productsCountInCart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).products.length : 0,
    productsCountInFavorite: JSON.parse(localStorage.getItem('favorite')) ? JSON.parse(localStorage.getItem('favorite')).products.length : 0,
    cartData: {},
    favoriteData: {},
    filterProduct: [],
    comments: [],
    totalCount: 0
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_DATA':
            return { ...state, products: action.payload }
        // case 'GET_COMMENTS_DATA':
        //     return { ...state, comments: action.payload }
        case 'GET_PRODUCTS_DETAILS':
            return { ...state, productDetails: action.payload }
        case 'ADD_COMMENT':
            return { ...state, comments: action.payload }
        case 'EDIT_PRODUCT':
            return { ...state, productToEdit: action.payload }
        case 'ADD_AND_DELETE_IN_CART':
            return { ...state, productsCountInCart: action.payload }
        case 'DELETE_FROM_CART':
            return { ...state, cartData: action.payload } // cartData: {products: [...action.payload] }
        case 'GET_CART':
            return { ...state, cartData: action.payload }
        case 'FILTER_PRODUCTS':
            return { ...state, products: action.payload }
        case 'GET_SEARCH':
            return { ...state, searchProducts: action.payload }
        case 'GET_FAVORITE':
            return { ...state, favoriteData: action.payload }
        case 'ADD_AND_DELETE_IN_FAVORITE':
            return { ...state, productsCountInFavorite: action.payload }
        case 'GET_FILTER_PRODUCTS':
            return { ...state, filterProduct: action.payload }
        case 'SET_TOTAL_COUNT':
            return { ...state, totalCount: action.payload }

        default:
            return state
    }
}

const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function addNewProduct(newProduct) {
        await axios.post(`${JSON_API}/products`, newProduct)
        getProductsData()
    }

    // async function addNewPost(newPost) {
    //     await axios.post(`${JSON_API}/comments`, newPost)

    // }

    async function getProductsData(search) {
        const { data } = await axios(`${JSON_API}/products`);
        dispatch({
            type: 'GET_PRODUCTS_DATA',
            payload: data
        })
    }

    // async function getCommentsData() {
    //     const { data } = await axios(`${JSON_API}/comments`);
    //     dispatch({
    //         type: 'GET_COMMENTS_DATA',
    //         payload: data
    //     })
    // }

    async function getFilter() {
        let params = window.location.search.replace(/&3D/g, '')
        // console.log(params)
        const { data } = await axios(`${JSON_API}/products${params}&q_=`)
        dispatch({
            type: 'GET_FILTER_PRODUCTS',
            payload: data
        })
    }

    async function getProductsDetails(id) {
        const { data } = await axios(`${JSON_API}/products/${id}`)
        dispatch({
            type: 'GET_PRODUCTS_DETAILS',
            payload: data
        })
    }
    async function addComments(newObj) {
        const { data } = await axios.patch(`${JSON_API}/products/${newObj.id}`, newObj)
        dispatch({
            type: 'ADD_COMMENT',
            payload: data
        })
    }


    async function deleteProduct(id) {
        await axios.delete(`${JSON_API}/products/${id}`)
        getProductsData()
    }

    function deleteFromCart(id) {

        let cart = JSON.parse(localStorage.getItem('cart'))
        let arr = cart.products.filter(item => {
            return item.product.id != id
        })

        // let test = localStorage.setItem("cart", JSON.stringify({ ...cart, products: [...arr] }))
        let newData = JSON.parse(localStorage.getItem("cart"))
        dispatch({
            type: "DELETE_FROM_CART",
            payload: newData
        })
    }

    async function editProduct(id) {
        let { data } = await axios(`${JSON_API}/products/${id}`)
        dispatch({
            type: 'EDIT_PRODUCT',
            payload: data
        })
    }

    async function saveProduct(newProduct, history) {
        await axios.patch(`${JSON_API}/products/${newProduct.id}`, newProduct)
        history.push('/Admin')
    }

    function addAndDeleteProductInCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            product: product,
            count: 1,
            subPrice: 0
        }
        newProduct.subPrice = calcSubPrice(newProduct)
        let newCart = cart.products.filter(item => item.product.id === product.id)
        if (newCart.length > 0) {
            cart.products = cart.products.filter(item => item.product.id !== product.id)
        } else {
            cart.products.push(newProduct)
        }
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))

        dispatch({
            type: 'ADD_AND_DELETE_IN_CART',
            payload: cart.products.length
        })
    }

    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(item => item.product.id === id)
        return newCart.length > 0 ? true : false
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        dispatch({
            type: 'GET_CART',
            payload: cart
        })
    }

    function changeCountProducts(count, id) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.map(item => {
            if (item.product.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }


    // GetFavorite
    function getFavorite() {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        dispatch({
            type: 'GET_FAVORITE',
            payload: favorite
        })
    }

    function addAndDeleteProductInFavorite(product) {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        if (!favorite) {
            favorite = {
                products: [],
            }
        }

        let newProduct = {
            product: product,
            count: 1,
        }

        let newFavorite = favorite.products.filter(item => item.product.id === product.id)
        if (newFavorite.length > 0) {
            favorite.products = favorite.products.filter(item => item.product.id !== product.id)
        } else {
            favorite.products.push(newProduct)
        }

        localStorage.setItem('favorite', JSON.stringify(favorite))

        dispatch({
            type: 'ADD_AND_DELETE_IN_FAVORITE',
            payload: favorite.products.length
        })
    }

    function checkProductInFavorite(id) {
        let favorite = JSON.parse(localStorage.getItem('favorite'));
        if (!favorite) {
            favorite = {
                products: [],
            }
        }
        let newFavorite = favorite.products.filter(item => item.product.id === id)
        return newFavorite.length > 0 ? true : false
    }

    function changeCountProductsFavorite(count, id) {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        favorite.products = favorite.products.map(item => {
            if (item.product.id === id) {
                item.count = count
            }
            return item
        })
        localStorage.setItem('favorite', JSON.stringify(favorite))
        getFavorite()
    }


    // function makeOrder() {
    //     let cart = JSON.parse(localStorage.getItem('cart'))
    // }

    async function getSearch(search = "", page = 1) {
        let params = window.location.search;
        if (!params) params = '?'
        if (search) search = "&q=" + search;
        // console.log(`${JSON_API}/products${params}${search}&_page=${page}&_limit=3`);
        const { data, headers } = await axios(`${JSON_API}/products${params}${search}&_page=${page}&_limit=3`);
        console.log(headers["x-total-count"]);
        console.log(data);
        dispatch({
            type: "GET_SEARCH",
            payload: data,
        });

        dispatch({
            type: "SET_TOTAL_COUNT",
            payload: headers["x-total-count"],
        });
    }

    return (
        <AdminContext.Provider value={{
            products: state.products,
            productToEdit: state.productToEdit,
            productsCountInCart: state.productsCountInCart,
            productDetails: state.productDetails,
            searchProducts: state.searchProducts,
            cartData: state.cartData,
            favoriteData: state.favoriteData,
            productsCountInFavorite: state.productsCountInFavorite,
            filterProduct: state.filterProduct,
            comments: state.comments,
            totalCount: state.totalCount,
            addNewProduct,
            deleteProduct,
            editProduct,
            saveProduct,
            getSearch,
            addAndDeleteProductInCart,
            checkProductInCart,
            getCart,
            changeCountProducts,
            getFavorite,
            addAndDeleteProductInFavorite,
            checkProductInFavorite,
            changeCountProductsFavorite,
            // makeOrder,
            getProductsData,
            getProductsDetails,
            deleteFromCart,
            getFilter,
            addComments
            // getCommentsData,
            // addNewPost
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;

