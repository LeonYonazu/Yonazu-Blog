//[tag]の数だけそれに対応するページを作成する

import { getPostsByTag, getSortedPostsData } from "../../../lib/posts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { TAGS } from "../../constants/tags";
import { Tag } from "../../types/Tag.types";
import { Post } from "../../types/Post.types";
import { Layout } from "../../components/Layout";
import { Category } from "../../types/Category.types";
import { CategoryContentWrapper } from "../../components/CategoryContentWrapper";
import { CATEGORIES } from "../../constants/categories";
import { getPostsByCategory } from "../../../lib/posts";

type PostsProps = {
  category: Category;
  posts: Post[];
};
const CategoryPage: NextPage<PostsProps> = ({ category, posts }) => {
  return (
    <Layout>
      <CategoryContentWrapper posts={posts} category={category} />
    </Layout>
  );
};

//ありうる全てのtagに対してページを生成する
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATEGORIES.map((category) => ({
    params: {
      category,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as Category;
  const posts = await getPostsByCategory(category);
  return {
    props: {
      category,
      posts,
    },
  };
};

export default CategoryPage;
