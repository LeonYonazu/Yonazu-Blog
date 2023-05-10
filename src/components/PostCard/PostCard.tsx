import { PostCardProps } from "./PostCard.types";
import styles from "./PostCard.module.scss";
import utilStyles from "../../../styles/utils.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

const PostCard = ({ title, date, id, tags, onClick }: PostCardProps) => {
  const router = useRouter();
  return (
    <div className={styles.card}>
      <article>
        <time dateTime={date} className={utilStyles.textSm}>
          {date}
        </time>
        {/* ①Linkコンポーネントを使う方法 */}
        <h3 className={styles.title}>
          <Link href={`/posts/${id}`}>{title}</Link>
        </h3>
        {/* ②router.pushを使う方法
        <h3
          className={styles.title}
          onClick={() => {
            router.push(`/posts/${id}`);
          }}
        >
          {title}
        </h3> */}
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
