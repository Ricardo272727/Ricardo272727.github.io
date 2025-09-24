import { useRef } from "react";

export const useLink = () => {
  const a = useRef<HTMLAnchorElement>();

  const getARef = () => {
    if(!a.current){
      a.current = document.createElement('a');
      a.current.style.display = 'none';
    }
    return a.current;
  }

  const click = (url: string, target: string = "") => {
    const aTag = getARef();
    aTag.target = target;
    aTag.href = url;
    aTag.click();
  };

  const download = (url:string) => {
    const aTag = getARef();
    aTag.href = url;
    aTag.download = 'CV-Ricardo-Segura-Cuanalo.pdf';
    aTag.click();
  }

  return {
    openPage: (url: string) => click(url, "_blank"),
    clickOnLink: (url: string) => click(url, ""),
    downloadFile: (url:string) => download(url),
  };
};
