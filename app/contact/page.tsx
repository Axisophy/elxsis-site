export default function ContactPage() {
    return (
      <main className="mx-auto max-w-[1440px] px-4 lg:px-8 py-10 lg:py-16">
        <h1 className="text-sm md:text-base tracking-[0.18em] uppercase text-neutral-500 font-[600]">
          Contact
        </h1>
        <div className="mt-4 max-w-3xl space-y-4 text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          <p>
            For commissions, collaborations, or enquiries about existing work,
            please get in touch via{" "}
            <a
              href="mailto:studio@elxsis.com"
              className="underline underline-offset-4 decoration-pink-500 hover:text-pink-600"
            >
              studio@elxsis.com
            </a>
            .
          </p>
          <p>
            Elxsis is particularly interested in collaborations with research
            groups, observatories, labs, museums, and technology organisations
            exploring the visual potential of scientific and mathematical systems.
          </p>
        </div>
      </main>
    );
  }