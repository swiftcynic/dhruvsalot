import { useEffect, useRef } from "react";

interface ClickOutsideHandler {
  (): void;
}

interface UseClickOutside {
  (handler: ClickOutsideHandler): ReturnType<typeof useRef>;
}

const useClickOutside: UseClickOutside = (handler) => {
  const domNode = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

export default useClickOutside;
