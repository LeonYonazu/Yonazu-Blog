import { PostCardProps } from "./PostCard.types";
import styles from "./PostCard.module.scss";
import utilStyles from "../../../styles/utils.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

const PostCard = ({ title, date, id, tags }: PostCardProps) => {
  const router = useRouter();
  return (
    <div className={styles.card}>
      <article>
        <time dateTime={date} className={utilStyles.textSm}>
          {date}
        </time>
        <h3
          className={styles.title}
          onClick={() => {
            router.push({
              pathname: "/posts/[id]",
              query: { id },
            });
          }}
        >
          {title}
        </h3>
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
      </article>
    </div>
  );
};

export default PostCard;
