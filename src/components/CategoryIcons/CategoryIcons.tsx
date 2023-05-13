import styles from "./CategoryIcons.module.scss";
import Link from "next/link";

const CategoryIcons = () => {
  return (
    <>
      <h1 className={styles.title}>カテゴリー</h1>
      <nav style={{ display: "flex", flexWrap: "wrap" }}>
        <Link href="/categories/tech">
          <div className={styles.category}>
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src="/CategoryTech.svg" alt="CategoryTech" />
            </span>
            <p className={styles.categorytext}>Tech</p>
          </div>
        </Link>
        <Link href="/categories/book">
          <div className={styles.category}>
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src="/CategoryBook.svg" alt="CategoryBook" />
            </span>
            <p className={styles.categorytext}>Book</p>
          </div>
        </Link>
        <Link href="/categories/note">
          <div className={styles.category}>
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src="/CategoryNote.svg" alt="CategoryNote" />
            </span>
            <p className={styles.categorytext}>Note</p>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default CategoryIcons;
