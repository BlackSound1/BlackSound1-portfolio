import { SVG_Link } from "@/lib/SVG_store";

interface ExternalLinkProps {
  url: string;
  description: string;
}

/**
 * An ExternalLink component for consistent styling of external
 * links on the `/links` page.
 * @param url The URL of the page.
 * @param description A human-readable description that will be shown instead of the URL.
 * @returns An ExternalLink component.
 */
export default function ExternalLink({ url, description }: ExternalLinkProps) {
  return (
    <span className="external-link w-fit">
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col-1 gap-2">
       {SVG_Link()} {description}
      </a>
    </span>
  );
}
