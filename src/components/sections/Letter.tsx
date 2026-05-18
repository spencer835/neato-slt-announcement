import { SectionWrapper } from "@/src/components/ui/SectionWrapper";

const LETTER_COPY = `Team —

This memo is about three things: formalizing the leadership structure, recognizing the people who've earned the next step, and giving you a clear picture of what we're building together as we plan for the next quarter and beyond.`;

export function Letter() {
  return (
    <SectionWrapper
      id="letter"
      background="canvas"
      eyebrow="A Note From Anthony & Spencer"
      className="min-h-[72vh]"
      contentClassName="flex justify-center"
    >
      <div className="max-w-3xl">
        <div className="type-body space-y-6 text-xl text-ink sm:text-2xl">
          {LETTER_COPY.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p
          className="mt-10 text-right text-lg italic text-ink-muted"
          dangerouslySetInnerHTML={{ __html: "— Anthony & Spencer\n" }}
        />
      </div>
    </SectionWrapper>
  );
}
