import Head from "next/head";
import { Layout } from "../components/Layout";
import { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../../styles/utils.module.scss";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import { Date } from "../components/Date";
import { Post } from "../types/Post.types";
import { PostCard } from "../components/PostCard";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title, content }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   <Link href={`/posts/${id}`}>{title}</Link>
            //   <br />
            //   <small className={utilStyles.lightText}>
            //     <Date dateString={date} />
            //   </small>
            // </li>
            <article className={utilStyles.card}>
              <time dateTime={date}>{date}</time>
              <Link href={`../posts/${id}`}>{title}</Link>
            </article>
          ))}
        </ul>
      </section> */}
      <PostCard
        onClick={() => console.log("clicked")}
        title="【俺的理解】JavaScriptのnew演算子"
        date="2023-04-10"
        id="oreteki-javascript-new"
        category="tech"
        tags={["Swift", "JavaScript"]}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};
