import { ReactElement } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type WorkProps = {
    company: string;
    title: string;
    time: string;
    description: string;
}

export default function WorkCard(
    {
        company,
        title,
        time,
        description
    }: WorkProps
): ReactElement {
    return (
        <Card className="mb-4">
            <CardHeader>
                <CardTitle className="text-center text-text group-hover:text-accent text-xl font-semibold transition-colors">{title}</CardTitle>
                <div className="flex items-center justify-between">
                    <span className="flex items-center text-xl font-semibold md:text-3xl">{company}</span>
                    <span className="flex items-center text-xl font-semibold md:text-3xl">{time}</span>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <p>{description}</p>
                </CardDescription>
            </CardContent>
        </Card>
    );
}
