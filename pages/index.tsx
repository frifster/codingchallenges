import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["greek"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Eugenerationx Coding Challenges</title>
        <meta name="description" content="Developer Blog by Eugene" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={inter.className}>
          Eugenerationx Code Challenges' answer compilation
        </h1>
      </main>
    </>
  );
}
