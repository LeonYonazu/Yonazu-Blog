import { Post } from "../../types/Post.types";
import { Tag } from "../../types/Tag.types";
import styles from "./PostFooter.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

type PostFooterProps = {
  tags: Tag[];
  post: Post;
};

const PostFooter = (props: PostFooterProps) => {
  const { tags, post } = props;
  const url = `https://twitter.com/share?url=https://www.yukendev.com/blogs/${post.id}&text=${post.title}`;
  const [hidden, setHidden] = useState(true);
  const router = useRouter();
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(location.href);
      setHidden(false);
      setTimeout(() => {
        setHidden(true);
      }, 1000);
    } catch {
      console.log("failed to copy");
    }
  };

  return (
    <>
      <ul className={styles.tags}>
        {tags.map((tag, index) => {
          return (
            <li
              className={styles.tag}
              key={index}
              onClick={() => {
                router.push({
                  pathname: "/tags/[tag]",
                  query: { tag },
                });
              }}
            >
              {tag}
            </li>
          );
        })}
      </ul>
      <div className={styles.comment}>
        <p>シェアをしていただけると僕が大変喜びます🙇‍♂️</p>
      </div>
      <nav className={styles.icons}>
        <div style={{ marginRight: "0.75rem" }}>
          <a href={url}>
            <img src="/Twitter.svg" alt="Twitter" />
          </a>
        </div>
        <div className={styles.clip}>
          {!hidden && <div className={styles.popup}>copied!</div>}
          <button onClick={copyToClipboard}>
            <img src="/Clip.svg" alt="Clip" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default PostFooter;
