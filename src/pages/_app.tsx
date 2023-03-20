import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; //importing font awesome css
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import type { AppProps } from "next/app";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { NavHeightProvider } from "../context/NavHeightContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <NavHeightProvider>
        <Component {...pageProps} />
      </NavHeightProvider>
    </ShoppingCartProvider>
  );
}
