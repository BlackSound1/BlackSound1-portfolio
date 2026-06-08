import { Card, CardContent } from "@/components/ui/card";
import ExternalLink from "@/components/ui/ExternalLink";

interface Link {
  url: string;
  description: string;
}

interface LinkCardProps {
  links: Link[];
}

/**
 * A LinkCard component for rendering Cards around lists of links on the `/links` page.
 * @param links The list of {`url`, `description`} links to render.
 * @returns A LinkCard component.
 */
export default function LinkCard({ links }: LinkCardProps) {
  return (
    <Card className="mb-4 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none">
      <CardContent>
        <ul className="flex flex-col gap-4">
          {links.map((link) => {
            return (
              <li className="flex" aria-label={`external-link-${link.description}`} key={link.url}>
                <ExternalLink description={link.description} url={link.url} />
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
