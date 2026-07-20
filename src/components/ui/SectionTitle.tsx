type SectionTitleProps = {
  subtitle?: string;
  title: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  titleClassName = "",
  subtitleClassName = "",
}: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {subtitle && (
        <p
          className={`
            max-w-[290px]
            px-4
            mx-auto

            font-body
            text-[11px]
            md:text-xs

            uppercase
            tracking-[0.35em]
            leading-5

            text-[var(--gold)]

            ${subtitleClassName}
          `}
        >
          {subtitle}
        </p>
      )}

      <h2
        className={`
          mt-5
          font-title
          italic
          text-5xl
          md:text-6xl
          font-semibold
          leading-none
          text-[var(--primary)]

          ${titleClassName}
        `}
      >
        {title}
      </h2>
    </div>
  );
}