import "../../styles/globals.css";
import "../../styles/toc.scss";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
