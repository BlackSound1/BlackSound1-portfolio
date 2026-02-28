import posthog from 'posthog-js';

import ComputerCard from '@/components/cards/computerCard';
import SimpleListCard from '@/components/cards/SimpleListCard';
import SocialLinksSection from '@/components/sections/SocialLinksSection';
import Break from '@/components/ui/break';

export default function Uses() {
  posthog.capture('$pageview', { page: 'uses' });
  return (
    <section id="uses-section" className="space-y-5">
      <p className="max-w-prose text-lg leading-relaxed">
        This page details all the important tools and technologies I use
      </p>
      <SocialLinksSection />

      <h2 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
        Computers
      </h2>

      <h3 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent transition-colors duration-200">
        Main Computer
      </h3>

      <ComputerCard
        name="Acer Aspire T"
        cpu="Intel Core i5-10400"
        ram={30}
        storage="1.14 TB"
        graphics="Intel UHD"
        os="Windows 11 Home"
      />

      <h3 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent transition-colors duration-200">
        Development Computer
      </h3>

      <ComputerCard
        name="Lenovo ThinkStation P920"
        cpu="Intel Xeon Silver"
        ram={128}
        storage="1 TB"
        graphics="Quadro P620"
        os="Ubuntu 24.04 LTS"
      />

      <h3 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent transition-colors duration-200">
        Laptop
      </h3>

      <ComputerCard
        name="Lenovo ThinkPad T490s"
        cpu="Intel Core i7-8565U"
        ram={8}
        storage="256 GB"
        graphics="Intel UHD"
        os="CachyOS 6 (for now)"
      />

      <Break />

      <h2 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
        Software
      </h2>

      <SimpleListCard
        title="Programming"
        list={['VS Code', 'IntelliJ', 'PyCharm', 'Docker', 'Windows', 'Linux', 'UV', 'Git', 'GitHub']}
      />

      <SimpleListCard
        title="Music"
        list={[
          'REAPER',
          'Amplitube 5',
          'Kontakt',
          'Vital',
          'BBC Symphony Orchestra',
          'MODO DRUM',
          'MODO BASS',
          'Spitfire LABS',
          'MuseScore',
          'Guitar Pro',
          'Various old free VSTs',
        ]}
      />

      <Break />

      <h2 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
        Hardware
      </h2>

      <SimpleListCard
        title="Peripherals"
        list={[
          'PreSonus Studio 24c audio interface',
          'Logi MX Master 3S mouse',
          'Logi Z200 speakers',
          'AKG k240 headphones',
          'KORG guitar tuner and metronome',
          'Nektar Impact LX25+ MIDI controller',
        ]}
      />

      <SimpleListCard
        title="Instruments"
        list={[
          'Ibanez Jem Jr. electric guitar (white)',
          'Epiphone Les Paul Studio electric guitar (black)',
          'Yamaha FX370C acoustic guitar',
          'Yamaha Portatone electronic keyboard',
        ]}
      />
    </section>
  );
}
