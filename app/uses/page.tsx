import posthog from 'posthog-js';

import SocialLinksSection from '@/components/ui/SocialLinksSection';

export default function Uses() {
  posthog.capture('$pageview', { page: 'uses' });
  return (
    <section id='uses-section' className='space-y-5'>
      <p className='max-w-prose text-lg leading-relaxed'>This page details all the important tools and technologies I use</p>
      <SocialLinksSection />


    </section>
  );
}
