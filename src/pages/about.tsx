import Head from "next/head";
import Nav from "@/components/Nav";
import Image from "next/image";
import { useNavHeight } from "../context/NavHeightContext";

export default function About() {
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
      <section
        className="bg-gray-100 py-20 px-4"
        style={{
          marginTop: navHeight,
          minHeight: `calc(100vh - ${navHeight}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-gray-500 leading-6">
            Welcome to Noah Aghedo&apos;s e-commerce website! We&apos;re not
            actually selling anything here, but we are practicing our coding
            skills using TypeScript and Next.js/React. So feel free to browse
            around, but don&apos;t expect to find any real products. Instead,
            you might find some fun easter eggs hidden in the code. We hope you
            enjoy our little playground!
          </p>
          <div className="mt-10 flex justify-center">
            <Image
              src="/about.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}
