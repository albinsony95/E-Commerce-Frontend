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

    useEffect(() => {
        console.log(cart);
    }, [cart]);
    const addToCart = (item) => {
        setCart([...cart, { ...item }]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const decreaseQuantity = (productId) => {
        setCart(cart.map(item => {
            if (item.id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    useEffect(() => {
        calculateTotal();
    }, [cart]);

    const calculateTotal = () => {
        let totalAmount = 0;


        cart.forEach(item => {
            totalAmount += parseFloat(item.quantity) * parseFloat(item.price);
            console.log(item);
        });
        setSubTotal(totalAmount);

        const totalWithShipping = totalAmount + shipping;
        setTotal(totalWithShipping);
    };
    //useEffect(())
    const handleConfirm = (resConfirm) => {
        setConfirm(resConfirm);
        console.log(resConfirm);
        if(resConfirm){
            console.log(confirm);
        }
        else{
            console.log('response not updated');
        }
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
        decreaseQuantity
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