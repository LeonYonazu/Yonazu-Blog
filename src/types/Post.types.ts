import { Category } from "./Category.types";
import { Tag } from "./Tag.types";

export type Post = {
  title: string;
  date: string;
  id: string;
  category?: Category;
  tags?: Tag[];
  description: string;
  content: string;
};
