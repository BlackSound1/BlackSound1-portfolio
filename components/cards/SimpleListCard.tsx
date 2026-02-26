import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getLogoSVG, handleLogoExceptions } from '@/lib/utils';

interface SimpleListCardProps {
  title: string;
  list: string[];
}

/**
 * A simple card with list items enumerated.
 * @param title The title of the card.
 * @param list The list to enumerate in the card.
 * @returns A simple card with list items enumerated.
 */
export default function SimpleListCard({ list, title }: SimpleListCardProps) {
  return (
    <Card className="mb-4 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none">
      <CardHeader>
        <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors duration-200">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {list.map((item) => {
            const Icon = getLogoSVG(handleLogoExceptions(item));
            return (
              <li className="flex items-center gap-1.5" key={item}>
                {Icon} {item}
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
