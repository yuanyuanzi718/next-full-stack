import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nike",
  description: "Nike",
};

export default function NikeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
