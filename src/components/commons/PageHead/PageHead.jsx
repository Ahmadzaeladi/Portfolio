import { useEffect } from "react";

export default function PageHead({ title = "Portfolio" }) {
  useEffect(() => {
    const defaultTitle = "Ahmad Zaeladi | Full-Stack Web Developer";
    document.title =
      title && title !== "Portfolio"
        ? `${title} | Ahmad Zaeladi`
        : defaultTitle;
  }, [title]);

  return null;
}
