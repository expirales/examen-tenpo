import { useEffect } from "react";

type UseInfiniteScrollProps = {
  callback: () => void;
  offset?: number; // Distancia antes del final donde debe dispararse (en px)
};

const useInfiniteScroll = ({
  callback,
  offset = 300,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight - scrollTop - clientHeight < offset) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, offset]);
};

export default useInfiniteScroll;
