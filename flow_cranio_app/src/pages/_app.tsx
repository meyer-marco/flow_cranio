import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Philosopher } from "next/font/google";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={philosopher.className}>
      <Component {...pageProps} />
    </main>
  );
}
