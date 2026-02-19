import Link from 'next/link';
import { SidebarTrigger } from './sidebar';

export default function Header() {
  return (
    <div className="header sticky top-0 z-10 flex items-center justify-between p-5 select-none mb-[-5]">
      <div></div>
      <nav className="font-mono flex items-center gap-6">
        <Link className="transition-colors duration-200" href="/research">
          Research
        </Link>
        <Link className="transition-colors duration-200" href="/uses">
          Uses
        </Link>
        <SidebarTrigger className=' transition-colors duration-200 hover:cursor-pointer'/>
      </nav>
    </div>
  );
}
