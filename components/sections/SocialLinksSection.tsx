import SocialLink from "../ui/SocialLink";

export default function SocialLinksSection() {
  return (
    <section className="flex flex-wrap items-center gap-x-4 pt-2">
      <SocialLink name="GitHub" url="https://github.com/BlackSound1" />
      <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/ordon/" />
    </section>
  );
}
