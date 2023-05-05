//[tag]の数だけそれに対応するページを作成する

import { getPostsByTag, getSortedPostsData } from "../../../lib/posts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { TAGS } from "../../constants/tags";
import { Tag } from "../../types/Tag.types";
import { Post } from "../../types/Post.types";
import { PostCard } from "../../components/PostCard";
import { Layout } from "../../components/Layout";
import { TagContentWrapper } from "../../components/TagContentWrapper";

type PostsProps = {
  tag: Tag;
  posts: Post[];
};
const TagPage: NextPage<PostsProps> = ({ tag, posts }) => {
  return (
    <Layout>
      <TagContentWrapper tag={tag} posts={posts} />
    </Layout>
  );
};

//ありうる全てのtagに対してページを生成する
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TAGS.map((tag) => ({
    params: {
      tag,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as Tag;
  const posts = await getPostsByTag(tag);
  return {
    props: {
      tag,
      posts,
    },
  };
};

export default TagPage;
