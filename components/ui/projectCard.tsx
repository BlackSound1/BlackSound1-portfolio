import { ReactElement } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "./tag";
import TagLogo from "@/public/tag.svg"


interface ProjectProps {
    name: string;
    alt: string;
    imagePath?: string;
    technologies: string[];
    description: string;
    link: string;
}

export default function ProjectCard(
    {
        name,
        alt,
        imagePath,
        technologies,
        description,
        link,
    }: ProjectProps
): ReactElement {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={name + ": " + description}
            className="block h-full"
        >
            <Card className="bg-mantle hover:border-accent focus-visible:border-accent group h-full flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none">
                <CardHeader>
                    <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors">{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    {imagePath &&
                        <div className="mx-auto w-full mb-6 h-80 md:h-56 lg:h-44 flex items-center justify-center overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src={imagePath}
                                alt={alt}
                                width={800}
                                height={450}
                                className="max-h-full w-auto object-contain"
                                priority
                            />
                        </div>
                    }
                    <CardDescription className="">
                        <div className="flex flex-wrap gap-2 overflow-hidden text-xs">
                            <Image priority src={TagLogo} alt="Tag Logo" height={16} />
                            {technologies.map((name) => {
                                return <Tag key={name} lang={name} />
                            })}
                        </div>
                        <p className="mt-3 font-semibold">
                            {description}
                        </p>
                    </CardDescription>
                </CardContent>
            </Card>
        </a>
    );
}
