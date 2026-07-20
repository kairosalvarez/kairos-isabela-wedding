import { wedding } from "@/data/wedding";

export default function DateBlock() {
  return (
    <div className="text-center">
      <h2
        style={{ fontFamily: "var(--font-title)" }}
        className="
          text-8xl
          font-semibold
          leading-none
          text-[var(--primary)]
        "
      >
        {wedding.date.day}
      </h2>

      <p
        className="
          mt-4
          text-sm
          uppercase
          tracking-[0.35em]
          text-[var(--gold)]
        "
      >
        {wedding.date.month}
      </p>

      <p
        className="
          mt-1
          text-sm
          uppercase
          tracking-[0.35em]
          text-[var(--gold)]
        "
      >
        {wedding.date.year}
      </p>
    </div>
  );
}