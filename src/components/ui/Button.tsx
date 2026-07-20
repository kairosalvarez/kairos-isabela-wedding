import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  children,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        `
          inline-flex
          items-center
          justify-center

          w-full

          rounded-full

          bg-[var(--primary)]

          px-10
          py-4

          text-sm
          font-semibold
          uppercase
          tracking-[0.22em]

          text-white

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:shadow-2xl
          hover:shadow-[var(--primary)]/25
          active:scale-[0.98]
        `,
        className
      )}
    >
      {children}
    </a>
  );
}