import styles from "./CategoryContentWrapper.module.scss";
import { PostList } from "../PostList";
import { CategoryContentWrapperProps } from "./CategoryContentWrapper.types";
import { CategoryDescription } from "../CategoryDescription";
import { CategoryIcons } from "../CategoryIcons";

const CategoryContentWrapper: React.FC<CategoryContentWrapperProps> = ({
  category,
  posts,
}) => {
  return (
    <div className={styles.wrapper}>
      <CategoryIcons />
      {category ? (
        <>
          <h1 className={styles.categorytitle}>{category}</h1>
          <CategoryDescription category={category} />
          <hr className={styles.border} />
        </>
      ) : (
        <h1 className={styles.indextitle}>記事一覧</h1>
      )}
      <PostList posts={posts} />
    </div>
  );
};

export default CategoryContentWrapper;
