import { Bell, CircleUser } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import WorkSpaceSideBar, {
  SmallScreenWorkSpaceSidebar,
} from "./WorkspaceSideBar";
import { useLocation } from "react-router-dom";

const usePathname = () => {
  const pathname = useLocation().pathname;
  return pathname.replace("/workspace", "").replace("/", "");
};

function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-neutral-900 px-4 lg:h-[60px] lg:px-6">
      <SmallScreenWorkSpaceSidebar />
      <div className="flex w-full flex-1 items-center">
        <h3 className="text-2xl font-semibold text-light first-letter:capitalize">
          {pathname}
        </h3>
      </div>
      <Button variant="outline" size="icon" className="group ml-auto h-8 w-8">
        <Bell className="h-4 w-4 text-light group-hover:text-dark" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

function WorkSpaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="mx-auto grid w-full max-w-screen-2xl bg-neutral-900">
        <WorkSpaceSideBar />
        <div className="flex flex-col md:ml-[80px] xl:ml-[280px]">
          <Header />
          <main className="flex h-screen flex-1 flex-col gap-4 lg:gap-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default WorkSpaceLayout;
