import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();
const CartContext = createContext();

const ProductContextProvider = ({children}) => {
    const [AllProducts, setAllProducts] = useState([]);
    const [selectedProd, setSelectedProd]=useState([]);
    const [cart, setCart] = useState([]);
    const [subTotal,setSubTotal] = useState(0);
    const [shipping,setShipping] = useState(7.99);
    const [Total,setTotal] = useState(0);
    const [confirm,setConfirm] = useState();
    const [cartChanged, setCartChanged] = useState(true);

    const url = 'http://localhost:8080/products';

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setAllProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const productHandleSelect = (prod) => {
        setSelectedProd(prod);
    };

    const addToCart = (item) => {
        setCart([...cart, { ...item }]);
        setCartChanged(true);

    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
        setCartChanged(true);
    };

    const increaseQuantity = (productId) => {
        setCart(cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
        setCartChanged(true);
    };

    const decreaseQuantity = (productId) => {
        setCart(cart.map(item => {
            if (item.id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
        setCartChanged(true);
    };

    useEffect(() => {
        if (cartChanged) {
            calculateTotal();
            setCartChanged(false); // Reset the flag after calculation
        }
    }, [cart, cartChanged]);
    
    const calculateTotal = () => {
        let totalAmount = 0;


        cart.forEach(item => {
            totalAmount += parseFloat(item.quantity) * parseFloat(item.price);
        });
        setSubTotal(totalAmount);

        const totalWithShipping = totalAmount + shipping;
        setTotal(totalWithShipping);
        setCartChanged(true);

    };

    const handleConfirm = (resConfirm) => {
        if (resConfirm) {
            setConfirm(resConfirm);
            console.log("response"+resConfirm);
            console.log(confirm);
            //setConfirm((prevConfirm) => [...prevConfirm, resConfirm]);
          } else {
            console.log('resConfirm is empty or null');
          }
    }

    const emptyCart = () => {
        setCart([]);
        setCartChanged(true);
    }
    
    const contextValue = {
        productHandleSelect,
        selectedProd
    };
    const cartContextValue = {
        cart,
        subTotal,
        shipping,
        Total,
        handleConfirm,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        emptyCart
    };
    return (
        <ProductContext.Provider value={contextValue}>
            <CartContext.Provider value={cartContextValue}>
                {children}
            </CartContext.Provider>
        </ProductContext.Provider>
    )
};
export {ProductContextProvider, ProductContext, CartContext};