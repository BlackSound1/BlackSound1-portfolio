interface ExternalLinkProps {
  url: string;
  description: string;
}

export default function ExternalLink({ url, description }: ExternalLinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span className="external-link">{description}</span>
    </a>
  );
}
