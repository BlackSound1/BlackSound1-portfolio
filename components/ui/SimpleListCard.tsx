import { Card, CardContent } from "./card";

interface SimpleListCardProps {
    list: string[];
}

/**
 * A simple card with list items enumerated.
 * @param list The list to enumerate in the card.
 * @returns A simple card with list items enumerated.
 */
export default function SimpleListCard({
    list,
}: SimpleListCardProps) {
    return (
      <Card className="mb-4 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none">
        <CardContent>
          <ul>
            {list.map((item) => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </CardContent>
      </Card>
    );
}
