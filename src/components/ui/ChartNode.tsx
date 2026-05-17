import clsx from "clsx";
import Image from "next/image";

type NodeVariant = "founder" | "member";

export function ChartNode({
  variant,
  name,
  title,
  image,
  initials,
  className,
}: {
  variant: NodeVariant;
  name: string;
  title: string;
  image?: string;
  initials?: string;
  className?: string;
}) {
  return (
    <article
      className={clsx(
        "soft-shadow flex w-[172px] flex-col items-center rounded-[28px] border border-line bg-white px-4 py-4 text-center text-ink",
        variant === "founder" ? "w-[188px] border-ink/10 bg-blossom-soft/60" : "",
        className,
      )}
    >
      {variant === "member" && image ? (
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-deep text-lg font-semibold text-canvas">
          {initials}
        </div>
      )}
      <div className="mt-3">
        <div className="text-[15px] font-semibold tracking-[-0.02em]">{name}</div>
        <div className="mt-1 text-sm leading-snug text-ink-muted">{title}</div>
      </div>
    </article>
  );
}
