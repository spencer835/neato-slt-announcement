import clsx from "clsx";
import Image from "next/image";

export function PersonCard({
  name,
  title,
  image,
  featured = false,
  inverse = false,
  newBadge = false,
  className,
}: {
  name: string;
  title: string;
  image: string;
  featured?: boolean;
  inverse?: boolean;
  newBadge?: boolean;
  className?: string;
}) {
  return (
    <article
      className={clsx(
        "soft-shadow relative flex flex-col items-center rounded-[2rem] border p-6 text-center transition-transform duration-200",
        inverse
          ? "border-white/12 bg-white/8 text-canvas"
          : newBadge
            ? "border-blossom bg-blossom-soft/40 text-ink ring-2 ring-blossom/60"
            : "border-line/90 bg-white/75 text-ink",
        featured ? "min-h-[22rem]" : "min-h-[20rem]",
        "hover:-translate-y-1",
        className,
      )}
    >
      {newBadge && (
        <span className="type-eyebrow absolute right-5 top-5 rounded-full bg-blossom px-3 py-1 text-[0.6875rem] text-white">
          New This Week
        </span>
      )}
      <div
        className={clsx(
          "relative h-32 w-32 overflow-hidden rounded-full sm:h-36 sm:w-36",
          newBadge ? "ring-4 ring-blossom" : "ring-1 ring-black/5",
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 128px, 144px"
          className="object-cover"
        />
      </div>
      <h3 className="type-display-small mt-6 text-2xl">{name}</h3>
      <p
        className={clsx(
          "type-body mt-3 text-base",
          inverse ? "text-canvas/78" : "text-ink-muted",
        )}
      >
        {title}
      </p>
    </article>
  );
}
