"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export function Itemcart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Autumn Mug",
      price: 12.99,
      quantity: 2,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
  ]);
  const handleQuantityChange = (id, value) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: value };
        }
        return item;
      });
    });
  };
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-background border rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="grid gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[80px_1fr_auto] items-center gap-4"
          >
            <Image
              src="/placeholder.svg"
              alt={item.name}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-muted-foreground text-sm">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}
              >
                <MinusIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium">{item.quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Separator className="my-6" />
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">Total:</p>
        <p className="text-lg font-medium">${total.toFixed(2)}</p>
      </div>
      <Button className="w-full mt-6">Proceed to Checkout</Button>
    </div>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
