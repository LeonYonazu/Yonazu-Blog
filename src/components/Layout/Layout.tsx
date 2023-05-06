import Head from "next/head";
import Image from "next/image";
import styles from "./Layout.module.scss";
import Link from "next/link";
import { MenuBar } from "../MenuBar";

export const siteTitle = "ブログ";

export const nameLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Twitter",
    link: "/",
  },
  {
    name: "GitHub",
    link: "/",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.wrapper}>
        <div className={styles.header}>
          <Link href="/" style={{ cursor: "pointer" }}>
            <img src="/vercel.svg" alt="vercel" width="141" height="32" />
          </Link>
          {/* TODO：メニューバーの表示非表示を切り替える */}
          <div className={styles.menubar}>
            <MenuBar />
          </div>
          <div className={styles.menu}>
            <nav style={{ display: "flex", margin: "0 2.5rem" }}>
              {nameLink.map((item) => {
                return (
                  <Link href={item.link} className={styles.links}>
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>© 2023 MyBlog.</footer>
    </div>
  );
}
