import { Tag } from "../../types/Tag.types";
import { Post } from "../../types/Post.types";
import { PostCard } from "../PostCard";
import styles from "./TagContentWrapper.module.scss";
import { PostList } from "../PostList";
type PostsProps = {
  tag: Tag;
  posts: Post[];
};
const TagContentWrapper: React.FC<PostsProps> = ({ tag, posts }) => {
  return (
    <div className={styles.tagcontentwrapper}>
      <div className={styles.tagcontent}>
        <h1 className={styles.tag}>{tag}</h1>
        <hr className={styles.border} />
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default TagContentWrapper;
