import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import styles from "../../components/layout.module.css";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.backToHome}>
        <Link href="/posts">
          <a>← Back to posts</a>
        </Link>
      </div>
      <article>
        <h1 className={utilStyles.postTitle}>{postData.title}</h1>
        <div className={(utilStyles.lightText, utilStyles.postDate)}>
          <Date dateString={postData.date} />
        </div>
        <div
          className={utilStyles.postText}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <div className={styles.backToHome}>
        <Link href="/posts">
          <a>← Back to posts</a>
        </Link>
      </div>
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
