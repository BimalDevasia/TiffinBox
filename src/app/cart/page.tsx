"use client";

import React, { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/Checkout";
import { stripePromise } from "@/lib/stripe";
import CartContext from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Cart = () => {
    const { addItemToCart, deleteItemFromCart, cart, setCart } = useContext(CartContext);
    const [clientSecret, setClientSecret] = useState("");
    const router = useRouter();
    const increaseQty = (cartItem: any) => {
        const newQty = cartItem?.quantity + 1;

        if (newQty > Number(cartItem.stock)) return;

        const updatedCart = cart.map((item: any) => {
            if (item.product === cartItem.product) {
                return { ...item, quantity: newQty };
            }
            return item;
        });

        setCart(updatedCart);
    };

    const decreaseQty = (cartItem: any) => {
        const newQty = cartItem?.quantity - 1;

        if (newQty <= 0) return;

        const updatedCart = cart.map((item: any) => {
            if (item.product === cartItem.product) {
                return { ...item, quantity: newQty };
            }
            return item;
        });

        setCart(updatedCart);
    };
    const amountWithoutTax = cart?.reduce(
        (acc: any, item: any) => acc + item.quantity * item.price,
        0
    );

    const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

    const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);
    const handleContinue = async () => {

        const orderData = {
            items: cart,
            totalAmount: totalAmount,
        };

        try {
            const response = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                const { clientSecret } = await response.json();
                setClientSecret(clientSecret);
            } else {
                console.error("Failed to create payment intent");
            }
        } catch (error) {
            console.error("Error creating payment intent:", error);
        }
    };
    return (
        <>
        <div className="bg-cart bg-cover w-screen h-screen bg-no-repeat bg-center">
            <section className="py-5 sm:py-7">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <h1 className="text-white text-4xl font-bold mt-9 ">MY ORDERS</h1>
                    <h2 className="text-3xl text-white font-semibold mb-2 mt-2">
                        {cart?.length || 0} Item(s) in Cart
                    </h2>
                </div>
            </section>

            {cart?.length > 0 && (
                <section className="py-10">
                    <div className="container max-w-screen-xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <main className="md:w-3/4">
                                <article className=" bg-black/50 shadow-sm text-white rounded mb-5 p-3 lg:p-5">
                                    {cart?.map((cartItem: any) => (
                                        <div>
                                            <div className="flex flex-wrap lg:flex-row gap-5 mb-4">
                                                <div className="w-full lg:w-2/5 xl:w-2/4 ">
                                                    <figure className="flex leading-5">
                                                        <div>
                                                            <div 
                                                            style={{ backgroundImage: `url(${cartItem.image})` }}
                                                            className="block w-16 h-16 rounded bg-cover bg-no-repeat bg-center  overflow-hidden">
                                                              
                                                            </div>
                                                        </div>
                                                        <figcaption className="ml-3">
                                                            <p>
                                                                    {cartItem.name}
                                                            </p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                                <div className="w-24">
                                                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                        <button
                                                            data-action="decrement"
                                                            className=" bg-inyellow/80 text-black/70 hover:text-black hover:bg-inyellow h-full w-20 rounded-l cursor-pointer outline-none"
                                                            onClick={() => decreaseQty(cartItem)}
                                                        >
                                                            <span className="m-auto text-2xl font-thin">
                                                                −
                                                            </span>
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="focus:outline-none text-center w-full bg-black/70 font-semibold text-md   md:text-basecursor-default flex items-center text-white  outline-none custom-input-number"
                                                            name="custom-input-number"
                                                            value={cartItem.quantity}
                                                            readOnly
                                                        ></input>
                                                        <button
                                                            data-action="increment"
                                                            className="bg-inyellow/80 text-black/70 hover:text-black hover:bg-inyellow  h-full w-20 rounded-r cursor-pointer"
                                                            onClick={() => increaseQty(cartItem)}
                                                        >
                                                            <span className="m-auto text-2xl font-thin">
                                                                +
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="leading-5">
                                                        <p className="font-semibold not-italic">
                                                            ₹{cartItem.price * cartItem.quantity.toFixed(2)}
                                                        </p>
                                                        <small className="text-inyellow">
                                                            {" "}
                                                            ₹{cartItem.price} / per item{" "}
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="flex-auto">
                                                    <div className="float-right">
                                                        <a
                                                            className="px-4 py-2 inline-block text-red-600 shadow-sm  rounded-md cursor-pointer"
                                                            onClick={() =>
                                                                deleteItemFromCart(cartItem?.product)
                                                            }
                                                        >
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="my-4" />
                                        </div>
                                    ))}
                                </article>
                            </main>
                            <aside className="md:w-1/4">
                                <article className="border border-gray-500  bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                    <ul className="mb-5">
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Amount before Tax:</span>
                                            <span>₹{amountWithoutTax}</span>
                                        </li>
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Total Units:</span>
                                            <span className="text-inyellow">
                                                {cart?.reduce(
                                                    (acc: any, item: any) => acc + item.quantity,
                                                    0
                                                )}{" "}
                                                (Units)
                                            </span>
                                        </li>
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>TAX:</span>
                                            <span>₹{taxAmount}</span>
                                        </li>
                                        <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                                            <span>Total price:</span>
                                            <span>₹{totalAmount}</span>
                                        </li>
                                    </ul>

                                    <a className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-black bg-inyellow/75 border border-transparent rounded-md hover:bg-inyellow cursor-pointer" onClick={handleContinue}>
                                        Continue
                                    </a>

                                    <Link
                                        href="/"
                                        className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-inyellow bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                                    >
                                        Back to shop
                                    </Link>
                                </article>
                            </aside>
                        </div>
                    </div>
                </section>
            )}
            {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm
                        clientSecret={clientSecret}
                        setClientSecret={setClientSecret}
                        cart={cart}
                        setCart={setCart}
                        totalAmount={totalAmount}
                        router={router}
                    />
                </Elements>
            )}
            </div>
        </>
    );
};

export default Cart;