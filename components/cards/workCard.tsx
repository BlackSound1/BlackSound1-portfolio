"use client";

import posthog from "posthog-js";
import { ReactElement } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "@/components/ui/tag";
import { getLogoSVG } from "@/lib/utils";

interface WorkProps {
  company: string;
  title: string;
  time: string;
  technologies: string[];
  description: ReactElement;
  url: string;
}

/**
 * A clickable card showing an individual work experience.
 * @param company The company I work(ed) for.
 * @param title My job title.
 * @param time The time I worked there.
 * @param description A brief job description and some accomplishments.
 * @param technologies A list of technologies used during this job.
 * @param url A link to the company's page
 * @returns A clickable card showing an individual work experience.
 */
export default function WorkCard({ company, title, time, technologies, description, url }: WorkProps): ReactElement {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture("work-clicked", { company: company })}
    >
      <Card
        className="mb-4 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none"
        data-testid="work card"
      >
        <CardHeader>
          <CardTitle
            className="text-text group-hover:text-accent text-xl font-semibold transition-colors duration-200"
            data-testid="work card title"
          >
            {title}
          </CardTitle>
          <div className="flex items-center justify-between">
            <span className="flex items-center text-l font-semibold" data-testid="work card company">
              {company}
            </span>
            <span className="flex items-center text-l font-semibold" data-testid="work card time">
              {time}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div className="flex flex-wrap mt-2 gap-2 overflow-hidden text-xs">
              <div data-testid="work card svg">{getLogoSVG("tag")}</div>
              {technologies.map((name) => {
                return <Tag key={name} lang={name} />;
              })}
            </div>
            <p className="mt-2 font-semibold" data-testid="work card description">
              {description}
            </p>
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
}
