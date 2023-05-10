import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Post } from "../src/types/Post.types";
import { Tag } from "../src/types/Tag.types";
import { Category, categories } from "../src/types/Category.types";
import { convertMarkdownToHtml } from "./convert-markdown";

const generateBlogFromData = async (
  data: any,
  content: string
): Promise<Post> => {
  const { title, date, id, category, tags, description } = data;

  const isTagValidated = (targets: string[]): boolean => {
    return targets.every((target) => tags.includes(target));
  };

  if (
    typeof title !== "string" ||
    typeof date !== "string" ||
    typeof id !== "string" ||
    !categories.includes(category) ||
    !isTagValidated(tags) ||
    typeof description !== "string"
  ) {
    throw Error("some data are not applicable to Post");
  }

  try {
    const convertedBody = await convertMarkdownToHtml(content, date);

    const post: Post = {
      title,
      date,
      id,
      category,
      tags,
      content: convertedBody,
      description,
    };

    return post;
  } catch {
    throw Error("some error are occured while converting markdown");
  }
};

const postsDirectory = path.join(process.cwd(), "posts");
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
      const data = matterResult.data;
      const content = matterResult.content;

      const post = await generateBlogFromData(data, content);
      return post;
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

export async function getPostsByTag(tag: Tag) {
  const allPosts = await getSortedPostsData();
  const targetPosts = allPosts.filter((post) => {
    return post.tags.includes(tag);
  });
  return targetPosts;
}

export async function getPostsByCategory(category: Category) {
  const allPosts = await getSortedPostsData();
  const targetPosts = allPosts.filter((post) => {
    return post.category === category;
  });
  return targetPosts;
}
