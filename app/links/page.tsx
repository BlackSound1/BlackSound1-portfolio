import posthog from 'posthog-js';

import SocialLinksSection from '@/components/sections/SocialLinksSection';
import Break from '@/components/ui/break';
import ExternalLink from '@/components/ui/ExternalLink';

export default function Links() {
  posthog.capture('$pageview', { page: 'links' });
  return (
    <section id="links-section" className="space-y-5">
      <p className="max-w-prose text-lg leading-relaxed">This page has a bunch of cool links and sites I found.</p>
      <SocialLinksSection />

      <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
        Computer Science
      </h1>

      <div className="flex flex-col gap-6">
        <ExternalLink url="https://quantum.country/" description="Quantum Country" />
        <ExternalLink url="https://samwho.dev/" description="Sam Who" />
        <ExternalLink
          url="https://playground.tensorflow.org/#activation=tanh&batchSize=12&dataset=xor&regDataset=reg-plane&learningRate=1&regularizationRate=0&noise=0&networkShape=3,1&seed=0.86554&showTestData=false&discretize=false&percTrainData=80&x=true&y=true&xTimesY=false&xSquared=true&ySquared=true&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false"
          description="Neural Network Playground"
        />
        <ExternalLink url="https://missing.csail.mit.edu/" description="The Missing Semester of Your CS Education" />
        <ExternalLink
          url="https://brianmcfee.net/dstbook-site/content/intro.html"
          description="Digital Signals Theory"
        />
        <ExternalLink url="https://bbycroft.net/llm" description="LLM Visualization" />
      </div>

      <Break />

      <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
        Programming
      </h1>

      <div className="flex flex-col gap-6">
        <ExternalLink url='https://gigamonkeys.com/book/' description='Practical Common LISP' />
        <ExternalLink url="https://allendowney.github.io/ModSimPy/index.html" description='Modeling and Simulation in Python' />
        <ExternalLink url="https://guide.bash.academy/" description='The Bash Guide' />
        <ExternalLink url="https://makefiletutorial.com/" description='Learn Makefiles' />
      </div>

      <Break />

      <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
        Other Personal Sites I Think are Cool
      </h1>

      <div className="flex flex-col gap-6">
        <ExternalLink url='https://jasoncameron.dev/' description='Jason Cameron (my main inspiration for this site!)' />
        <ExternalLink url='https://brennan.day/' description='Brennan Day' />
        <ExternalLink url='https://ari.lt/' description='Ari' />
        <ExternalLink url='https://tonsky.me/' description='Tonsky' />
        <ExternalLink url='https://maya.land/' description='Maya' />
        <ExternalLink url='https://incorporealbard.online/' description='Incorporeal Bard' />
      </div>

      <Break />

      <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
        Miscellaneous
      </h1>

      <div className="flex flex-col gap-6">
        <ExternalLink url='https://joy.recurse.com/?page=1' description='The Joy of Computing' />
        <ExternalLink url='https://letsgetcreative.today/' description='Let&apos;s Get Creative' />
      </div>
    </section>
  );
}
