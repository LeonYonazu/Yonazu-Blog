import { PostCardProps } from "./PostCard.types";
import styles from "./PostCard.module.scss";
import utilStyles from "../../../styles/utils.module.scss";

import Link from "next/link";

const PostCard = ({
  onClick,
  title,
  date,
  id,
  category,
  tags,
}: PostCardProps) => {
  return (
    <div>
      <article className={styles.card}>
        <time dateTime={date} className={utilStyles.textSm}>
          {date}
        </time>
        <h3 className={styles.title}>
          <Link href={`/posts/${id}`}>{title}</Link>
        </h3>
        <ul>
          {/* ここをliタグじゃなくて、<TagCard key={index} tag={tag} />とする。TagCardコンポーネントは押すと、タグのみの */}
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default PostCard;
