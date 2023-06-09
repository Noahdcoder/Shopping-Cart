import Head from "next/head";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import { useNavHeight } from "../context/NavHeightContext";

export default function Home() {
  const navHeight = useNavHeight();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main
        className="relative home-main"
        style={{
          marginTop: navHeight,
          minHeight: `calc(100vh - ${navHeight}px)`,
          // other styles
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center p-8 mt-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Get the Best Products
                <br />
                <span className="text-blue">Right Here!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500">
                We have everything you need at the best prices. Shop now and
                enjoy fast shipping and easy returns!
              </p>
              <Link href="/store" legacyBehavior>
                <a className="m-8 flex justify-center md:justify-start">
                  <button className="bg-blue hover:bg-darkerBlue text-white font-bold py-2 px-4 rounded-full">
                    Shop Now
                  </button>
                </a>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/image.jpg"
                alt="E-commerce store"
                width={1260}
                height={750}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
