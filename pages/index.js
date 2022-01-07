import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";
import photoOne from "../public/images/20210903.jpg";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.nav}>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <Link href="https://github.com/ptrrdrck">
            <a target="_blank">Github&#8599;</a>
          </Link>
          <Link href="https://twitter.com/ptrrdrck">
            <a target="_blank">Twitter&#8599;</a>
          </Link>
        </div>
      </section>
      <section className={utilStyles.introContainer}>
        <div className={utilStyles.left}>
          <span>&iexcl;welcome!</span>
          <br />
          <span>
            &lt;begin&gt;
            <span className={utilStyles.gradientText}>unassuming</span>
            &lt;/begin&gt;
          </span>
          <span>
            &lt;reveal&gt;
            <br />
            &nbsp;&nbsp;&lt;ideas&gt;
            <span className={utilStyles.gradientText}>goals</span>&lt;/ideas&gt;
            <br />
            &lt;/reveal&gt;
          </span>
          <span>
            &lt;identify&gt;
            <span className={utilStyles.gradientText}>illusions</span>
            &lt;/identify&gt;
          </span>
          <span>
            &lt;dissolve&gt;
            <span className={utilStyles.gradientText}>barriers</span>
            &lt;/dissolve&gt;
          </span>
          <span className={utilStyles.typedText}>
            &lt;build&gt;
            <span className={utilStyles.gradientText}>love</span>
            &lt;/build&gt;
          </span>
        </div>
        <div className={utilStyles.right}>
          <span>
            discuss an idea{" "}
            <Link href="mailto:pete@lftlc.xyz">
              <a className={`${utilStyles.gradientText} ${utilStyles.emoji}`}>
                &#x1F4AD;
              </a>
            </Link>
          </span>
        </div>
      </section>
      <section className={utilStyles.linksContainer}>
        <Link href="https://ptrrdrck.github.io/codecademy/mixed-messages/">
          <a className={utilStyles.projectLink} target="_blank">
            &rarr;dao drip
          </a>
        </Link>
        <Link href="https://reflect.black/">
          <a className={utilStyles.projectLink} target="_blank">
            &rarr;realization
          </a>
        </Link>
        <Link href="https://o00o.me/">
          <a className={utilStyles.projectLink} target="_blank">
            &rarr;o00o.me
          </a>
        </Link>
        <Link href="https://decentralize.center/">
          <a className={utilStyles.projectLink} target="_blank">
            &rarr;decentralize.center
          </a>
        </Link>
        <Link href="https://goodcompanyrecords.nyc">
          <a className={utilStyles.projectLink} target="_blank">
            &rarr;record label
          </a>
        </Link>
        <Link href="https://ptrrdrck.github.io/ideas.html">
          <a className={utilStyles.projectLink} target="_blank">
            &rarr;stasis
          </a>
        </Link>
      </section>
      <section className={utilStyles.quoteContainer}>
        <span className={utilStyles.quoteText}>
          To me, fair friend, you never can be old, For as you were when first
          your eye I ey'd, Such seems your beauty still.{" "}
          <span className={utilStyles.emoji}>&#128073;</span> W.S.
        </span>
      </section>
      <section>
        <Image
          priority
          src={photoOne}
          className={utilStyles.photo}
          alt={"@ Organ Pipe Cactus National Monument"}
        />
      </section>
      <style global jsx>{`
        html {
          min-height: 100%;
          background: rgb(212, 253, 255);
          background: linear-gradient(
            239deg,
            rgba(212, 253, 255, 1) 0%,
            rgb(236, 236, 236) 28%,
            rgb(236, 236, 236) 40%,
            rgb(218, 218, 218) 100%
          );
        }
      `}</style>
    </Layout>
  );
}
