import type { PropsWithChildren } from "react";

type RenderIfProps = PropsWithChildren<{
  condition: boolean;
}>;

export default function RenderIf({ condition, children }: RenderIfProps) {
  if (!condition) return null;
  return <>{children}</>;
}
