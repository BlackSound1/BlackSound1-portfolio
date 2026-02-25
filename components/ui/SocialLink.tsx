'use client';

import posthog from 'posthog-js';
import { ReactElement } from 'react';

import { getLogoSVG } from '@/lib/utils';

interface SocialLinkProps {
  name: string;
  url: string;
}

/**
 * A clickable link to one of my social pages.
 * @param name The name of the social site.
 * @param url The URL to my page on the site.
 * @param logo The logo of the site.
 * @returns {ReactElement} A clickable link to one of my social pages.
 */
export default function SocialLink({ url, name }: SocialLinkProps): ReactElement {
  const Icon = getLogoSVG(name.toLowerCase());

  return (
    <a
      id={`${name}-link`}
      className="hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 text-sm"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture('social-link-clicked', { site: name })}
      aria-label={name}
    >
      {Icon ? Icon : null}
      {name}
    </a>
  );
}
