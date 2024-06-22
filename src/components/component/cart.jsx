"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "White Tshirt",
      price: 145,
      quantity: 1,
      image: "/whitetshirt.png",
      color: "White",
      size: "Large",
    },
    {
      id: 2,
      name: "Checked Shirt",
      price: 180,
      quantity: 2,
      image: "/checkedshirt.png",
      color: "Red",
      size: "Medium",
    },
    {
      id: 3,
      name: "Jeans",
      price: 240,
      quantity: 1,
      image: "/jeans.png",
      color: "Blue",
      size: "Large",
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
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const perce = subtotal * 0.2;
  const total = subtotal - perce + 15;

  return (
    <div className=" bg-background rounded-lg shadow-sm items-center md:px-10 justify-center gap-8 flex flex-col md:flex md:flex-row">
      <div className=" grid gap-6 md:w-[40%] w-full border-2 border-primary-foreground p-4 rounded-xl">
        <h2 className="text-2xl font-extrabold mb-6">Your Cart</h2>
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[80px_1fr_auto] items-center gap-4 border-t-2 border-primary-foreground pt-4 pb-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-xs ">
                Color:{" "}
                <span className=" text-muted-foreground">{item.color}</span>{" "}
              </p>
              <p className="text-xs">
                Size: <span className="text-muted-foreground">{item.size}</span>{" "}
              </p>
              <p className="text-muted-foreground text-sm">
                ₹ {item.price.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div>
                <MdDeleteForever />
              </div>
              <div className="flex items-center gap-2  rounded-full bg-primary-foreground">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full md:w-[40%]  md:mt-8 border-2 border-primary-foreground p-4 rounded-xl">
        <h1 className="text-xl font-semibold mb-4">Order Summary</h1>
        <div className="flex gap-3 flex-col">
          <div className="flex justify-between">
            <div className="text-muted-foreground">Subtotal</div>
            <div>₹{subtotal.toFixed(2)}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-muted-foreground">Discount(-20%)</div>
            <div className="text-[#FF0000]">- ₹{perce}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-muted-foreground">Deleviery Fee</div>
            <div>₹15</div>
          </div>
        </div>
        <br />
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">Total:</p>
          <p className="text-lg font-medium">₹ {total.toFixed(2)}</p>
        </div>
        <div className="flex w-full gap-2 mt-2">
          <input
            type="email"
            placeholder="Enter Coupon Code"
            className="px-2 rounded-full w-full border "
          />
          <Button className="border bg-[#000] rounded-full hover:bg-[#000]">
            Apply
          </Button>
        </div>
        <Button className="w-full mt-6 border bg-[#000] hover:bg-[#000] rounded-full">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;

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
