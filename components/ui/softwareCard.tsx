import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

interface SoftwareCardProps {
  type: string;
  software: string[];
}

/**
 * A card of software I use.
 * @param type The type of software it is.
 * @param software The list of software I use for that `type`.
 * @returns A card of software I use for the given `type`.
 */
export default function SoftwareCard({
  type,
  software,
}: SoftwareCardProps) {
    return (
      <Card className="mb-4 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none">
        <CardHeader>
          <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors duration-200">
            {type} Software
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <ul>
              {software.map((soft) => (
                <li key={soft}>{soft}</li>
              ))}
            </ul>
          </CardDescription>
        </CardContent>
      </Card>
    );
}
