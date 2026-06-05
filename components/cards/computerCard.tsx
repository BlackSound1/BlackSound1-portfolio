import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SVG_CPU, SVG_GPU, SVG_RAM, SVG_Storage } from "@/lib/SVG_store";
import { getLogoSVG } from "@/lib/utils";

interface ComputerProps {
  name: string;
  cpu: string;
  ram: number;
  storage: string;
  graphics: string;
  os: string;
}

interface OsIconProps {
  system: string;
}

const OsIcon = ({ system }: OsIconProps) => {
  const osCleaned = system.split(" ")[0].toLowerCase();
  return getLogoSVG(osCleaned);
};

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
export default function ComputerCard({ name, cpu, ram, storage, graphics, os }: ComputerProps) {
  return (
    <Card className="mb-4 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none">
      <CardHeader>
        <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors duration-200">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center gap-1.5">
            <SVG_CPU /> {cpu}
          </li>
          <li className="flex items-center gap-1.5">
            <SVG_RAM /> {ram} GB RAM
          </li>
          <li className="flex items-center gap-1.5">
            <SVG_Storage /> {storage} Storage
          </li>
          <li className="flex items-center gap-1.5">
            <SVG_GPU /> {graphics} Graphics
          </li>
          <li className="flex items-center gap-1.5">
            <OsIcon system={os} /> {os}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
