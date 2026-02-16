import SocialLink from '@/components/ui/SocialLink';

export default function NotFound() {
  return (
    <section id="global-404-section" className="space-y-5 px-4 md:px-0">
      <p className="max-w-prose text-lg leading-relaxed">This page does not exist!</p>

      <div className="flex justify-center">
        <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent transition-colors duration-200">
          [404]
        </h2>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 pt-2">
        <SocialLink name="GitHub" url="https://github.com/BlackSound1" />
        <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/ordon/" />
      </div>
    </section>
  );
}
