import { Post } from "../../types/Post.types";

export type PostCardProps = Pick<Post, "title" | "date" | "id" | "tags">;
