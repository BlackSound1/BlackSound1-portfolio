import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar';

export default function AppSidebar() {
  return (
    <Sidebar className='h-50 translate-y-full' side='right' variant='floating' collapsible='offcanvas'>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
