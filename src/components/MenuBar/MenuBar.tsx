import styles from "./MenuBar.module.scss";
import { useState } from "react";
import { nameLink } from "../Layout/Layout";
import Link from "next/link";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <>
          <div style={{ textAlign: "right" }}>
            <button
              onClick={onClickHandler}
              style={{ backgroundColor: "white" }}
            >
              <img src="/Cross.svg" alt="Cross" />
            </button>
          </div>
          <div className={styles.menues}>
            {nameLink.map((item) => {
              return (
                <Link href={item.link} className={styles.links}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <button onClick={onClickHandler} style={{ backgroundColor: "white" }}>
          <img src="/Hamburger.svg" alt="Hamburger" />
        </button>
      )}
    </>
  );
};

export default MenuBar;
