import Link from "next/link";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { useNavHeight } from "../context/NavHeightContext";
import Nav from "@/components/Nav";
import CartItem from "@/components/CartItem";
import { useState, useEffect } from "react";

type CartItemProps = {
  id: number;
  quantity: number;
};

type ItemData = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Cart({ id, quantity }: CartItemProps) {
  const { cartQuantity, cartItems } = useShoppingCart();
  const [itemData, setItemData] = useState<ItemData[]>([]);
  const navHeight = useNavHeight();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItemData(data);
    };

    fetchData();
  }, []);

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = itemData.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <>
      <Nav />
      {cartQuantity === 0 ? (
        <main
          style={{
            marginTop: navHeight,
            height: `calc(100vh - ${navHeight}px)`,
          }}
          className="flex flex-col justify-center items-center h-screen space-y-8"
        >
          <h1 className="text-lg font-bold">Your cart is empty</h1>
          <h2 className="text-xl">Check out our store and make your choice!</h2>
          <button className="bg-blue hover:bg-darkerBlue text-white font-bold py-2 px-4 rounded">
            <Link href="/store" legacyBehavior>
              <a>Start Shopping</a>
            </Link>
          </button>
        </main>
      ) : (
        <div className="p-8 space-y-4" style={{ marginTop: navHeight }}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="flex justify-end font-bold text-xl">
            Total price: {`$${totalPrice.toFixed(2)}`}
          </div>
        </div>
      )}
    </>
  );
}
