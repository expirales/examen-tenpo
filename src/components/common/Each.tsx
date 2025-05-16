import type { ReactNode } from "react";

type EachProps<T> = {
  items: T[];
  render: (item: T, index: number) => ReactNode;
  fallback?: ReactNode;
};

function Each<T>({ items, render, fallback }: EachProps<T>) {
  if (items.length === 0) {
    return <>{fallback || null}</>;
  }

  return <>{items.map((item, index) => render(item, index))}</>;
}

export default Each;
