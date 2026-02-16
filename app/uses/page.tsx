import posthog from 'posthog-js';

import SocialLink from '@/components/ui/SocialLink';

export default function Uses() {
  posthog.capture('$pageview', { page: 'uses' });
  return (
    <section id='uses-section' className='space-y-5'>
      <p className='max-w-prose text-lg leading-relaxed'>This page details all the important tools and technologies I use</p>

      <div className="flex flex-wrap items-center gap-x-4 pt-2">
        <SocialLink name="GitHub" url="https://github.com/BlackSound1" />
        <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/ordon/" />
      </div>

      
    </section>
  );
}
