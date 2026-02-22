import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getLogoSVG } from '@/lib/utils';

interface ComputerProps {
  name: string;
  cpu: string;
  ram: number;
  storage: string;
  graphics: string;
  os: string;
}

const CpuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-cpu"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12" />
    <path d="M9 9h6v6h-6l0 -6" />
    <path d="M3 10h2" />
    <path d="M3 14h2" />
    <path d="M10 3v2" />
    <path d="M14 3v2" />
    <path d="M21 10h-2" />
    <path d="M21 14h-2" />
    <path d="M14 21v-2" />
    <path d="M10 21v-2" />
  </svg>
);

const RamIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M21.55,11.05a1,1,0,0,0,.95.95v6.68H1.5V12a1,1,0,0,0,0-1.91V5.32h21v4.77A1,1,0,0,0,21.55,11.05Z" />
      <polygon points="13.91 9.14 10.09 9.14 6.27 9.14 6.27 12.96 10.09 12.96 13.91 12.96 17.73 12.96 17.73 9.14 13.91 9.14" />
      <line x1="4.36" y1="15.82" x2="4.36" y2="18.68" />
      <line x1="8.18" y1="15.82" x2="8.18" y2="18.68" />
      <line x1="12" y1="15.82" x2="12" y2="18.68" />
      <line x1="15.82" y1="15.82" x2="15.82" y2="18.68" />
      <line x1="19.64" y1="15.82" x2="19.64" y2="18.68" />
    </g>
  </svg>
);

const StorageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-database"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
    <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
    <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
  </svg>
);

const GraphicsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    viewBox="0 0 512 512"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g fill="currentcolor">
      <path d="M480.003,128H48c0-22.056-17.944-40-40-40c-4.418,0-8,3.582-8,8s3.582,8,8,8c13.234,0,24,10.766,24,24v288 c0,4.418,3.582,8,8,8s8-3.582,8-8v-8h16.01C77.238,408,88,397.238,88,384.01V384h392.003C497.646,384,512,369.646,512,352.003 V159.997C512,142.354,497.646,128,480.003,128z M496,352.003c0,8.821-7.176,15.997-15.997,15.997H80c-4.418,0-8,3.582-8,8v8.01 c0,4.406-3.584,7.99-7.99,7.99H48V144h432.003c8.821,0,15.997,7.176,15.997,15.997V352.003z" />
      <path d="M240,192c-22.922,0-43.057,12.12-54.363,30.28c-0.784,0.849-1.379,1.856-1.737,2.954c-5.03,9.136-7.9,19.621-7.9,30.766 c0,11.406,3.013,22.115,8.264,31.399c0.187,0.398,0.407,0.778,0.656,1.14C196.078,307.354,216.586,320,240,320 c35.29,0,64-28.71,64-64c0-11.406-3.013-22.115-8.264-31.399c-0.187-0.398-0.407-0.778-0.656-1.14 C283.922,204.646,263.414,192,240,192z M192,256c0-4.395,0.605-8.648,1.717-12.695c3.596,3.178,8.453,6.73,15.035,10.53 c6.376,3.681,11.742,6.078,16.208,7.612c-2.622,2.061-5.987,4.385-10.208,6.821c-8.449,4.878-14.816,7.039-18.36,7.752 C193.58,269.922,192,263.144,192,256z M288,256c0,4.103-0.52,8.087-1.493,11.891c-3.617-3.227-8.542-6.848-15.259-10.726 c-5.96-3.441-11.036-5.758-15.321-7.298c2.483-1.885,5.564-3.966,9.321-6.135c8.447-4.876,14.816-7.039,18.36-7.752 C286.42,242.078,288,248.856,288,256z M273.948,222.099c-4.562,1.524-10.087,3.96-16.699,7.777 c-6.252,3.61-10.952,6.997-14.49,10.051C242.31,236.682,242,232.717,242,228c0-9.763,1.314-16.361,2.469-19.785 C255.934,209.279,266.244,214.384,273.948,222.099z M227.619,209.627C226.655,214.344,226,220.354,226,228 c0,7.056,0.557,12.721,1.401,17.26c-3.022-1.232-6.59-2.938-10.65-5.282c-8.302-4.793-13.33-9.159-15.769-11.883 C207.376,219.18,216.739,212.535,227.619,209.627z M206.049,289.898c4.564-1.524,10.086-3.954,16.702-7.774 c6.252-3.61,10.952-6.997,14.49-10.051C237.69,275.318,238,279.283,238,284c0,9.763-1.314,16.361-2.469,19.785 C224.065,302.721,213.753,297.615,206.049,289.898z M252.381,302.373C253.345,297.656,254,291.646,254,284 c0-7.633-0.653-13.635-1.614-18.347c3.066,1.237,6.708,2.97,10.863,5.368c8.764,5.06,13.892,9.652,16.163,12.33 C273.012,292.546,263.486,299.405,252.381,302.373z" />
      <path d="M440,168c-4.418,0-8,3.582-8,8s3.582,8,8,8c8.822,0,16,7.178,16,16v112c0,8.822-7.178,16-16,16H240 c-39.701,0-72-32.299-72-72s32.299-72,72-72h168c4.418,0,8-3.582,8-8s-3.582-8-8-8H240c-48.523,0-88,39.477-88,88s39.477,88,88,88 h200c17.645,0,32-14.355,32-32V200C472,182.355,457.645,168,440,168z" />
      <path d="M112,232H88c-8.822,0-16,7.178-16,16v16c0,8.822,7.178,16,16,16h24c8.822,0,16-7.178,16-16v-16 C128,239.178,120.822,232,112,232z M88,264v-16h24l0.001,16H88z" />
      <path d="M112,176H88c-8.822,0-16,7.178-16,16v16c0,8.822,7.178,16,16,16h24c8.822,0,16-7.178,16-16v-16 C128,183.178,120.822,176,112,176z M88,208v-16h24l0.001,16H88z" />
      <path d="M112,288H88c-8.822,0-16,7.178-16,16v16c0,8.822,7.178,16,16,16h24c8.822,0,16-7.178,16-16v-16 C128,295.178,120.822,288,112,288z M88,320v-16h24l0.001,16H88z" />
      <path d="M432,200h-24c-4.418,0-8,3.582-8,8s3.582,8,8,8h24c4.418,0,8-3.582,8-8S436.418,200,432,200z" />
      <path d="M432,296h-24c-4.418,0-8,3.582-8,8s3.582,8,8,8h24c4.418,0,8-3.582,8-8S436.418,296,432,296z" />
      <path d="M432,224h-24c-4.418,0-8,3.582-8,8s3.582,8,8,8h24c4.418,0,8-3.582,8-8S436.418,224,432,224z" />
      <path d="M432,248h-24c-4.418,0-8,3.582-8,8s3.582,8,8,8h24c4.418,0,8-3.582,8-8S436.418,248,432,248z" />
      <path d="M432,272h-24c-4.418,0-8,3.582-8,8s3.582,8,8,8h24c4.418,0,8-3.582,8-8S436.418,272,432,272z" />
    </g>
  </svg>
);

interface OsIconProps {
  system: string;
}

const OsIcon = ({ system }: OsIconProps) => {
  const osCleaned = system.split(' ')[0].toLowerCase();
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
        <CardDescription>
          <ul>
            <li className="flex items-center gap-1.5">
              <CpuIcon /> {cpu}
            </li>
            <li className="flex items-center gap-1.5">
              <RamIcon /> {ram} GB RAM
            </li>
            <li className="flex items-center gap-1.5">
              <StorageIcon /> {storage} Storage
            </li>
            <li className="flex items-center gap-1.5">
              <GraphicsIcon /> {graphics} Graphics
            </li>
            <li className="flex items-center gap-1.5">
              <OsIcon system={os} /> {os}
            </li>
          </ul>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
