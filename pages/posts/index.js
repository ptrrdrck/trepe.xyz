import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={`${utilStyles.nav} ${utilStyles.italicText}`}>
          Paradox-mining my interests for fresh perspective and more meaningful
          collaborations.
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>&darr;Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <style global jsx>{`
        html {
          min-height: 100%;
          background-image: linear-gradient(
              2deg,
              rgba(39, 172, 209, 0.1488690212268846) 54%,
              rgba(255, 142, 140, 0.5) 90%
            ),
            linear-gradient(
              155deg,
              rgba(77, 44, 163, 0.5977148964749297) 62%,
              rgba(242, 116, 126, 0.5) 113%
            ),
            linear-gradient(
              176deg,
              rgba(73, 136, 178, 0.13167330764909613) 27%,
              rgba(249, 187, 190, 0.5) 28%
            ),
            linear-gradient(
              33deg,
              rgba(45, 72, 196, 0.0372711578033158) 23%,
              rgba(252, 181, 185, 0.5) 146%
            );
          background-blend-mode: color, color, color, color;
        }
      `}</style>
    </Layout>
  );
}
