import Link from "@docusaurus/Link";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type PageButtonItem = {
  text: string;
  target: string;
};

const PageButtonList: PageButtonItem[] = [
  {
    text: "Digital Portfolio",
    target: "/portfolio/intro",
  },
  {
    text: "Reference Documentation",
    target: "/docs/intro",
  },
  {
    text: "Professional Blog",
    target: "/blog",
  },
];

function PageButton({ text, target }: PageButtonItem) {
  return (
    <Link className="button button--secondary button--lg" to={target}>
      {text}
    </Link>
  );
}

/**
 * Displays a responsive row set of navigation buttons
 */
export default function HomepageButtons(): ReactNode {
  return (
    <section className={styles.buttons}>
      <div className="container">
        <div className={clsx("row", styles.buttonRow)}>
          {PageButtonList.map((props, idx) => (
            <PageButton key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
