import Heading from '@/components/ui/Heading';
import SocialLink from '@/components/ui/SocialLink';

export default function NotFound() {
  return (
    <section id="global-404-section" className="space-y-5 px-4 md:px-0">
      <p className="max-w-prose text-lg leading-relaxed">This page does not exist!</p>

      <div className="flex justify-center">
        <Heading level={2} text="[404]" />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 pt-2">
        <SocialLink name="GitHub" url="https://github.com/BlackSound1" />
        <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/ordon/" />
      </div>
    </section>
  );
}
