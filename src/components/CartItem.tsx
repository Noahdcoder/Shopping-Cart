import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

export default function CartItem({ id, quantity }: CartItemProps) {
  const [itemData, setItemData] = useState<ItemData | null>(null);
  const { removeFromCart } = useShoppingCart();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const item = data.find((item: ItemData) => item.id === id);
      setItemData(item);
    };

    fetchData();
  }, [id]);

  return (
    <>
      {itemData && (
        <div className="grid grid-cols-1 gap-8 md:flex md:justify-between">
          <div className="grid grid-cols-2 md:flex md:space-x-4">
            <div>
              <Image
                src={itemData.image}
                alt={itemData.title}
                height={100}
                width={100}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex font-semibold">
                {itemData.title}
                {quantity > 1 && (
                  <span className="ml-4 font-bold">{`x${quantity}`}</span>
                )}
              </div>
              {`$${itemData.price}`}
            </div>
          </div>
          <div className="grid grid-cols-2 md:flex md:items-center md:space-x-4 font-bold">
            <div>{`$${(itemData.price * quantity).toFixed(2)}`}</div>
            <button onClick={() => removeFromCart(itemData.id)}>
              <FontAwesomeIcon
                icon={faTimes}
                className="bg-red-500 hover:bg-red-600 text-white p-2 font-normal"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
