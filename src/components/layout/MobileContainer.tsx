type Props = {
  children: React.ReactNode;
};

export default function MobileContainer({ children }: Props) {
  return (
    <div className="flex min-h-dvh justify-center bg-[var(--surface)]">
      <main
        className="
          w-full
          max-w-[430px]
          min-h-dvh
          overflow-y-auto
          overflow-x-hidden
          bg-[var(--background)]
          shadow-2xl
        "
      >
        {children}
      </main>
    </div>
  );
}