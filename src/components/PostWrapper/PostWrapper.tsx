import { Post } from "../../types/Post.types";
import styles from "./PostWrapper.module.scss";
import { PostFooter } from "../PostFooter";

type PostWrapperProps = {
  post: Post;
};

const PostWrapper = ({ post }: PostWrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.publish}>
          <p>公開日:&nbsp;</p>
          <time dateTime={post.date} className={styles.time}>
            {post.date}
          </time>
        </div>
        <div className='prose max-w-none'>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className={styles.markdownbody}
          />
        </div>
        <hr className={styles.border}></hr>
        <PostFooter tags={post.tags} post={post} />
      </div>
    </div>
  );
};

export default PostWrapper;
