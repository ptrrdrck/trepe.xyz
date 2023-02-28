import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "trepe";
export const siteTitle = "trepe";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Web dev by lftlc.xyz" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <>
        {home ? (
          <header className={styles.headerHome}>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </header>
        ) : (
          <header className={styles.header}>
            {/*<span className={utilStyles.headingXl}>pillow</span>*/}
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={54}
                  width={54}
                  alt={name}
                />
              </a>
            </Link>
            {/*<span className={utilStyles.headingXl}>talk</span>*/}
          </header>
        )}
      </>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
