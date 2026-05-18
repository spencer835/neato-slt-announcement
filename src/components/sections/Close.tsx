import Image from "next/image";
import { SectionWrapper } from "@/src/components/ui/SectionWrapper";

const CLOSE_LINE = "More to come. Excited for what's next.";

export function Close() {
  return (
    <SectionWrapper
      id="close"
      background="warm"
      className="min-h-[72vh]"
      contentClassName="flex min-h-[52vh] flex-col items-center justify-center text-center"
    >
      <Image
        src="/brand/neato-wordmark.svg"
        alt="Neato"
        width={132}
        height={48}
        className="h-auto w-[112px] sm:w-[132px]"
      />
      <p className="type-display-medium mt-12 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
        {CLOSE_LINE}
      </p>
      <p className="mt-6 text-lg italic text-ink-muted">— Anthony & Spencer</p>
    </SectionWrapper>
  );
}
