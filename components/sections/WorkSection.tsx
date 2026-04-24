import { ReactElement } from "react";

import WorkCard from "@/components/cards/workCard";
import Heading from "@/components/ui/Heading";

/**
 * A section component that displays a list of work experience items.
 * @returns A section element containing a list of work experience items.
 */
export default function WorkSection(): ReactElement {
  return (
    <section id="work-section" className="px-4 md:px-0">
      <div className="mb-8">
        <Heading level={2} text="Work Experience" />
      </div>
      <div className="grid grid-cols-1">
        <WorkCard
          company="Verbit"
          url="https://verbit.ai/"
          title="Software Engineer"
          time="Feb. 2025 - Sep. 2025"
          technologies={[
            "C++17",
            "Python",
            "FastAPI",
            "Bash",
            "Docker",
            "AWS",
            "CircleCI",
            "Make",
            "Jira",
            "REST",
          ]}
          description={
            <>Helped build the next generation of North America&apos;s largest realtime captioning solution.</>
          }
        />
        <WorkCard
          company="Tecsys"
          url="https://www.tecsys.com/"
          title="R&D Intern: Full-Stack Pythonista"
          time="Sep. 2021 - Apr. 2023"
          technologies={[
            "Python",
            "Flask",
            "Pandas",
            "Jupyter",
            "AI/ML",
            "JavaScript",
            "HTML",
            "CSS",
            "Docker",
            "Bash",
            "AWS",
            "Make",
            "Jira",
          ]}
          description={
            <>Six consecutive fulltime internships. Developed two large internal projects with a small R&D team.</>
          }
        />
      </div>
    </section>
  );
}
