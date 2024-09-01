import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Badge,
  ChevronDown,
  CompassIcon,
  Feather,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

const SideBarLink = ({ children, to }: { children: ReactNode; to: string }) => {
  return (
    <Link
      to={`${to}`}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-light transition-all hover:text-neutral-300"
    >
      {children}
    </Link>
  );
};

const SideBarSeperator = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center py-2 pl-3 text-light">
      <p>{title}</p>
      <Separator className="mx-2 mt-1 flex-1 bg-light/30" />
      <ChevronDown className="h-4 w-4 text-light" />
    </div>
  );
};

const LargeScreenNavbarLinks = () => {
  return (
    <>
      <SideBarLink to="/workspace/dashboard">
        <Home className="h-4 w-4" />
        Dashboard
      </SideBarLink>
      <SideBarLink to="discover">
        <CompassIcon className="h-4 w-4" />
        Discover
      </SideBarLink>
      <SideBarSeperator title="Branding" />
      <SideBarLink to="profile">
        <Package className="h-4 w-4" />
        Profile{" "}
      </SideBarLink>
      <SideBarLink to="#">
        <Users className="h-4 w-4" />
        Portfolio
      </SideBarLink>
      <SideBarSeperator title="Social" />

      <SideBarLink to="tavern">
        <CompassIcon className="h-4 w-4" />
        Tavern
      </SideBarLink>
      <SideBarLink to="connections">
        <CompassIcon className="h-4 w-4" />
        Connections
      </SideBarLink>
      <SideBarLink to="#">
        <Users className="h-4 w-4" />
        Groups
      </SideBarLink>
    </>
  );
};
const SmallScreenNavbarLinks = () => {
  return (
    <>
      <nav className="grid gap-2 text-lg font-medium">
        <Link to="#" className="flex items-center gap-2 text-lg font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          to="#"
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Home className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          to="#"
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
        >
          <ShoppingCart className="h-5 w-5" />
          Orders
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge>
        </Link>
        <Link
          to="#"
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Package className="h-5 w-5" />
          Products
        </Link>
        <Link
          to="#"
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Users className="h-5 w-5" />
          Customers
        </Link>
        <Link
          to="#"
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <LineChart className="h-5 w-5" />
          Analytics
        </Link>
      </nav>
    </>
  );
};

export const SmallScreenWorkSpaceSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SmallScreenNavbarLinks />
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const WorkSpaceSideBar = () => {
  return (
    <div className="fixed left-0 top-0 hidden h-screen w-[220px] border-r md:block lg:w-[280px]">
      <div className="relative hidden h-full bg-neutral-900 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6 text-light" />
              <span className="text-sm text-light">Workspace</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <LargeScreenNavbarLinks />
              <SideBarSeperator title="Projects" />
              <SideBarLink to="#">
                <Users className="h-4 w-4" />
                Manage Projects
              </SideBarLink>
              <SideBarLink to="#">
                <Users className="h-4 w-4" />
                Promote Project
              </SideBarLink>
              <button className="mt-2 rounded-3xl border border-dashed py-2">
                <p className="text-light">Create Project</p>
              </button>
            </nav>
          </div>
        </div>

        {/* MARQUEE BUTTON */}
        <div className="absolute bottom-8 p-4">
          <div className="grid h-12 w-12 place-content-center rounded-full bg-purple-300">
            <Feather className="text-light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceSideBar;
