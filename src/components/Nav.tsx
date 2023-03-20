import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { useState, useEffect } from "react";

export default function Nav() {
  const { cartQuantity } = useShoppingCart();

  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full flex shadow-lg justify-between p-8 text-2xl bg-veryLightGray">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? "active-nav-link" : ""}>
              Home
            </a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/store" legacyBehavior>
            <a
              className={router.pathname === "/store" ? "active-nav-link" : ""}
            >
              Store
            </a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/about" legacyBehavior>
            <a
              className={router.pathname === "/about" ? "active-nav-link" : ""}
            >
              About
            </a>
          </Link>
        </li>
      </ul>
      <button className="relative">
        <Link href="/cart" legacyBehavior>
          <a>
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartQuantity > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                {cartQuantity}
              </span>
            )}
          </a>
        </Link>
      </button>
    </nav>
  );
}
