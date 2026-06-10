import posthog from "posthog-js";

import LinkCard from "@/components/cards/LinkCard";
import SocialLinksSection from "@/components/sections/SocialLinksSection";
import Break from "@/components/ui/break";
import Heading from "@/components/ui/Heading";

export default function Links() {
  posthog.capture("$pageview", { page: "links" });
  return (
    <section id="links-section" data-testid="links-section" className="space-y-5">
      <Heading level={1} text="Links" />

      <p className="max-w-prose text-lg leading-relaxed" aria-label="paragraph-intro">
        This page has a bunch of cool links I found.
      </p>

      <SocialLinksSection />

      <Heading level={2} text="Computer Science" />

      <section className="flex flex-col gap-4" data-testid="links-compsci">
        <LinkCard
          links={[
            { url: "https://quantum.country/", description: "Quantum Country" },
            { url: "https://samwho.dev/", description: "Sam Who" },
            {
              url: "https://playground.tensorflow.org/#activation=tanh&batchSize=12&dataset=xor&regDataset=reg-plane&learningRate=1&regularizationRate=0&noise=0&networkShape=3,1&seed=0.86554&showTestData=false&discretize=false&percTrainData=80&x=true&y=true&xTimesY=false&xSquared=true&ySquared=true&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false",
              description: "Neural Network Playground",
            },
            { url: "https://missing.csail.mit.edu/", description: "The Missing Semester of Your CS Education" },
            { url: "https://brianmcfee.net/dstbook-site/content/intro.html", description: "Digital Signals Theory" },
            { url: "https://bbycroft.net/llm", description: "LLM Visualization" },
          ]}
        />
      </section>

      <Break />

      <Heading level={2} text="Programming" />

      <section className="flex flex-col gap-4" data-testid="links-programming">
        <LinkCard
          links={[
            { url: "https://gigamonkeys.com/book/", description: "Practical Common LISP" },
            {
              url: "https://allendowney.github.io/ModSimPy/index.html",
              description: "Modeling and Simulation in Python",
            },
            { url: "https://guide.bash.academy/", description: "The Bash Guide" },
            { url: "https://makefiletutorial.com/", description: "Learn Makefiles" },
          ]}
        />
      </section>

      <Break />

      <Heading level={2} text="Other Personal Sites I Think are Cool" />

      <section className="flex flex-col gap-4" data-testid="links-other">
        <LinkCard
          links={[
            { url: "https://jasoncameron.dev/", description: "Jason Cameron (my main inspiration for this site!)" },
            { url: "https://brennan.day/", description: "Brennan Day" },
            { url: "https://ari.lt/", description: "Ari" },
            { url: "https://tonsky.me/", description: "Tonsky" },
            { url: "https://maya.land/", description: "Maya" },
            { url: "https://incorporealbard.online/", description: "Incorporeal Bard" },
          ]}
        />
      </section>

      <Break />

      <Heading level={2} text="Miscellaneous" />

      <section className="flex flex-col gap-4" data-testid="links-misc">
        <LinkCard
          links={[
            { url: "https://joy.recurse.com/?page=1", description: "The Joy of Computing" },
            { url: "https://letsgetcreative.today/", description: "Let's Get Creative" },
          ]}
        />
      </section>
    </section>
  );
}
