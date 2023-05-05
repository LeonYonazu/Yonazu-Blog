import { Post } from "../../types/Post.types";

export type TagContentWrapperProps = Pick<
  Post,
  "title" | "date" | "id" | "tags"
>;
