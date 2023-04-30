import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Post } from "../src/types/Post.types";

const postsDirectory = path.join(process.cwd(), "posts");
// ここでは、
//①getStaticPathsで使うためのgetPostById関数
//②getSortedPostData関数(getStaticPropsなどで使う)を作成する
export const getSortedPostsData = async () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const fileContent = fs.readFileSync(
        path.join(postsDirectory, fileName),
        "utf-8"
      );
      const matterResult = matter(fileContent);
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();
      return {
        ...(matterResult.data as Omit<Post, "content">),
        content: contentHtml,
      };
    })
  );
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export async function getPostById(id: string) {
  const allPosts = await getSortedPostsData();
  const targetPost = allPosts.find((post) => post.id == id);
  return targetPost;
}
