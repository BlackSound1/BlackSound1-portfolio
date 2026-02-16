import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

interface ComputerProps {
  name: string;
  cpu: string;
  ram: number;
  storage: string;
  graphics: string;
  os: string;
}

/**
 * A card showing various details of a single computer.
 * @param name The name/ brand of the computer.
 * @param cpu The CPU of the computer.
 * @param ram The number of GB of RAM the computer has.
 * @param storage The amount of total storage the computer has.
 * @param graphics The nature of the graphics card.
 * @param os The operating system of the computer.
 * @returns A card with info about an individual computer.
 */
export default function ComputerCard({
  name,
  cpu,
  ram,
  storage,
  graphics,
  os
}: ComputerProps) {
  return (
    <Card className='mb-4 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none'>
      <CardHeader>
        <CardTitle className='text-text group-hover:text-accent text-xl font-semibold transition-colors duration-200'>
            {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <ul>
            <li>{cpu}</li>
            <li>{ram} GB RAM</li>
            <li>{storage} Storage</li>
            <li>{graphics} Graphics</li>
            <li>{os}</li>
          </ul>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
