import { useRef } from "react";

export const useLink = () => {
  const a = useRef<HTMLAnchorElement>();
  const click = (url: string, target: string = "") => {
    if (!a.current) {
      a.current = document.createElement("a");
      a.current.style.display = "none";
      a.current.target = target;
    }
    a.current.href = url;
    a.current.click();
  };

  return {
    openPage: (url: string) => click(url, "_blank"),
    clickOnLink: (url: string) => click(url, ""),
  };
};
