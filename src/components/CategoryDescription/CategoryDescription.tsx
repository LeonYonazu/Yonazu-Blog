import { Category } from "../../types/Category.types";
import styles from "./CategoryDescription.module.scss";

type CategoryDescriptionProps = {
  category: Category;
};

const CategoryDescription: React.FC<CategoryDescriptionProps> = ({
  category,
}): JSX.Element => {
  const RenderDescription = () => {
    const desc = (): string => {
      if (category === "tech") {
        return "技術系で学んだことを備忘録的に書きます。";
      } else if (category === "book") {
        return "読んだ本の感想などを書きます。まだ方針は決まってないですが、技術書のことがメインになりそうです。";
      } else if (category === "note") {
        return "『note』とかいうかっこいい括りにしてますが、『その他』です。技術系のことでも、本系のことでもないものを書きます。";
      }
    };
    return <>{desc()}</>;
  };
  return <p className={styles.description}>{RenderDescription()}</p>;
};

export default CategoryDescription;
