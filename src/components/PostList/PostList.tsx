import { Post } from "../../types/Post.types";
import { PostCard } from "../PostCard";
import styles from "./PostList.module.scss";
type PostsProps = {
  posts: Post[];
};
const PostList: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post, index) => {
        return (
          <PostCard
            title={post.title}
            date={post.date}
            id={post.id}
            tags={post.tags}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default PostList;
