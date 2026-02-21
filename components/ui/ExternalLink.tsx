interface ExternalLinkProps {
  url: string;
  description: string;
}

export default function ExternalLink({ url, description }: ExternalLinkProps) {
  return (
    <span className="external-link w-fit">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {description}
      </a>
    </span>
  );
}
