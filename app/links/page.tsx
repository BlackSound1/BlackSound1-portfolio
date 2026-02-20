import posthog from "posthog-js";

import SocialLinksSection from "@/components/sections/SocialLinksSection";
import Break from "@/components/ui/break";

export default function Links() {
    posthog.capture("$pageview", { page: 'links' });
    return (
        <section id="links-section" className="space-y-5">
            <p className="max-w-prose text-lg leading-relaxed">
              This page has a bunch of cool links and sites I found.
            </p>
            <SocialLinksSection />

            <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">Computer Science</h1>

            <div className="flex flex-col gap-6">
              <a href="https://quantum.country/">Quantum Country</a>
              <a href="https://samwho.dev/">Sam Who</a>
              <a href="https://playground.tensorflow.org/#activation=tanh&batchSize=12&dataset=xor&regDataset=reg-plane&learningRate=1&regularizationRate=0&noise=0&networkShape=3,1&seed=0.86554&showTestData=false&discretize=false&percTrainData=80&x=true&y=true&xTimesY=false&xSquared=true&ySquared=true&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false">Neural Network Playground</a>
              <a href="https://missing.csail.mit.edu/">The Missing Semester of Your CS Education</a>
              <a href="https://brianmcfee.net/dstbook-site/content/intro.html">Digital Signals Theory</a>
              <a href="https://bbycroft.net/llm">LLM Visualization</a>
            </div>

            <Break />

            <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">Programming</h1>

            <div className="flex flex-col gap-6">
              <a href="https://gigamonkeys.com/book/">Practical Common LISP</a>
              <a href="https://allendowney.github.io/ModSimPy/index.html">Modeling and Simulation in Python</a>
              <a href="https://guide.bash.academy/">The Bash Guide</a>
              <a href="https://makefiletutorial.com/">Learn Makefiles</a>
            </div>

            <Break />

            <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">Other Personal Sites I Think are Cool</h1>

            <div className="flex flex-col gap-6">
              <a href="https://jasoncameron.dev/">Jason Cameron (my main inspiration for this site!)</a>
              <a href="https://brennan.day/">Brennan Day</a>
              <a href="https://ari.lt/">Ari</a>
              <a href="https://tonsky.me/">Tonsky</a>
              <a href="https://maya.land/">Maya</a>
              <a href="https://incorporealbard.online/">Incorporeal Bard</a>
            </div>

            <Break />

            <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">Miscellaneous</h1>

            <div className="flex flex-col gap-6">
              <a href="https://joy.recurse.com/?page=1">The Joy of Computing</a>
              <a href="https://letsgetcreative.today/">Let&apos;s Get Creative</a>
            </div>
        </section>
    );
}
