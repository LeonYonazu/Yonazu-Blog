import { Category } from "../../types/Category.types";
import { Post } from "../../types/Post.types";

export type CategoryContentWrapperProps = {
  category?: Category;
  posts: Post[];
};
