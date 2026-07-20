type CardProps = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
        w-full
        rounded-3xl
        bg-[var(--surface)]
        p-8
        shadow-lg
      "
    >
      {children}
    </div>
  );
}