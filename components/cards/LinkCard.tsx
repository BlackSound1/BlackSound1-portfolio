import { Card, CardContent } from "@/components/ui/card";
import ExternalLink from "@/components/ui/ExternalLink";

interface Link {
  url: string;
  description: string;
}

interface LinkCardProps {
  links: Link[];
}

export default function LinkCard({ links }: LinkCardProps) {
  return (
    <Card>
      <CardContent>
        <ul>
          {links.map((link) => {
            return <ExternalLink description={link.description} url={link.url} key={link.url} />;
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
