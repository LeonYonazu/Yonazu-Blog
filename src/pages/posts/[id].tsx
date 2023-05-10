import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getPostById, getSortedPostsData } from "../../../lib/posts";
import { Layout } from "../../components/Layout";
import { Date } from "../../components/Date";
import utilStyles from "../../../styles/utils.module.scss";
import Head from "next/head";
import { Post } from "../../types/Post.types";
import { PostFooter } from "../../components/PostFooter";
import { PostWrapper } from "../../components/PostWrapper";

type PostProps = {
  post: Post;
};

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostWrapper post={post} />
    </Layout>
  );
};

//ありうる全てのidに対してページを作成したい
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getSortedPostsData();
  const paths = data.map((datum) => ({
    params: {
      id: datum.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

//それぞれのparamsに対して(配列の要素数だけ)getStaticPropsが呼ばれる
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  return {
    props: {
      post,
    },
  };
};

export default Post;
