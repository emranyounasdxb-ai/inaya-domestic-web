// Leaf pages own metadata/schema; descendants must not inherit index data.
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
