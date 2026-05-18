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
        variant === "founder"
          ? "w-[204px] border-blossom/25 bg-blossom-soft/60 px-5 py-5"
          : "",
        className,
      )}
    >
      {image ? (
        <div
          className={clsx(
            "relative overflow-hidden rounded-full",
            variant === "founder"
              ? "h-24 w-24 ring-4 ring-blossom/18"
              : "h-16 w-16",
          )}
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes={variant === "founder" ? "96px" : "64px"}
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className={clsx(
            "flex items-center justify-center rounded-full bg-deep font-semibold text-canvas",
            variant === "founder" ? "h-24 w-24 text-2xl" : "h-16 w-16 text-lg",
          )}
        >
          {initials}
        </div>
      )}
      <div className="mt-3">
        <div
          className={clsx(
            "font-semibold tracking-[-0.02em]",
            variant === "founder" ? "text-base" : "text-[15px]",
          )}
        >
          {name}
        </div>
        <div
          className={clsx(
            "mt-1 leading-snug text-ink-muted",
            variant === "founder" ? "text-[15px]" : "text-sm",
          )}
        >
          {title}
        </div>
      </div>
    </article>
  );
}
