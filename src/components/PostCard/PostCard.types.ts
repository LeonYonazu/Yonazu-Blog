import { Post } from "../../types/Post.types";

export type PostCardProps = {
  onClick?: () => void;
} & Pick<Post, "title" | "date" | "id" | "tags">;
