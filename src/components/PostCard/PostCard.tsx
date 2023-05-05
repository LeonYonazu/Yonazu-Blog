import { PostCardProps } from "./PostCard.types";
import styles from "./PostCard.module.scss";
import utilStyles from "../../../styles/utils.module.scss";

import Link from "next/link";

const PostCard = ({ title, date, id, tags }: PostCardProps) => {
  return (
    <div className={styles.card}>
      <article>
        <time dateTime={date} className={utilStyles.textSm}>
          {date}
        </time>
        <h3 className={styles.title}>
          <Link href={`/posts/${id}`}>{title}</Link>
        </h3>
        <ul className={styles.tags}>
          {tags.map((tag, index) => {
            return (
              <Link href={`/tags/${tag}`}>
                <li className={styles.tag} key={index}>
                  {tag}
                </li>
              </Link>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default PostCard;
