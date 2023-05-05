import { Layout } from "../components/Layout";
import utilStyles from "../../styles/utils.module.scss";
import { GetStaticProps, NextPage } from "next";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import { Date } from "../components/Date";
import { Post } from "../types/Post.types";
import { PostCard } from "../components/PostCard";
import { PostList } from "../components/PostList";
import { CategoryContentWrapper } from "../components/CategoryContentWrapper";

type PostsProps = {
  posts: Post[];
};

const Home: NextPage<PostsProps> = ({ posts }) => {
  return (
    <Layout>
      <CategoryContentWrapper posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};

export default Home;
