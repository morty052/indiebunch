import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Indie } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import UserAvatar from "./UserAvatar";
import { Separator } from "./ui/separator";
import Tag from "./Tag";
import { TooltipComponent } from "./Tooltip";

function ProjectCard() {
  return (
    <div className="relative rounded-xl border border-light/40 px-2 py-6 md:px-4">
      <div className="flex">
        <img
          className="aspect-square w-40 rounded-lg"
          src="https://github.com/shadcn.png"
          alt=""
        />
        <div className="space-y-2 px-2">
          <p className="text-lg font-semibold md:text-2xl">Algolia</p>
          <p className="">
            A tower building game of some sorts men i don't have it all yet but
            i know i will the word here is faith and believe
          </p>
          <div className="flex gap-x-2">
            <UserAvatar className="h-8 w-8 md:h-8 md:w-8" />
            <UserAvatar className="h-8 w-8 md:h-8 md:w-8" />
            <UserAvatar className="h-8 w-8 md:h-8 md:w-8" />
          </div>
          <Button className="w-full max-w-xs rounded-3xl bg-blue-500 hover:bg-blue-600">
            <p>Contribute</p>
          </Button>
        </div>
      </div>
      {/* FOLLOW BUTTON */}
      <div className="absolute right-2 top-1">
        <TooltipComponent text="Get updates on this project">
          <Button
            size={"plain"}
            variant={"outline"}
            className="p-1 hover:bg-blue-400"
          >
            <p className="text-xs text-light">Monitor</p>
          </Button>
        </TooltipComponent>
      </div>
    </div>
  );
}

function ProfileDetails({
  tools,
  skills,
  links,
}: {
  tools: string[] | undefined;
  skills: string[] | undefined;
  links: string[] | undefined;
}) {
  return (
    <>
      <div className="">
        <p className="text-center">Skills</p>
        <div className="flex gap-x-2">
          {skills?.map((skill) => <Tag title={skill} key={skill} />)}
        </div>
      </div>
      <Separator></Separator>
      <div className="">
        <p className="text-center">Tools</p>
        <div className="flex gap-x-2">
          {tools?.map((tool) => <Tag title={tool} key={tool} />)}
        </div>
      </div>
      <Separator></Separator>
      <p>Badges</p>
      <Separator></Separator>
      <div className="">
        <p className="text-center">Links</p>
        <div className="flex gap-x-2">
          {links?.map((link) => <Tag title={link} key={link} />)}
        </div>
      </div>
    </>
  );
}

function LargeIndieCard({ indie }: { indie: Indie | null }) {
  const { name, tools, skills, links } = indie ?? {};
  return (
    <div className="flex max-w-lg flex-col items-center space-y-2 rounded-2xl p-2 md:border md:p-4">
      <UserAvatar className="h-28 w-28 md:h-32 md:w-32" />
      <div className="flex flex-col space-y-1">
        <p className="text-lg font-semibold md:text-2xl">{name}</p>
      </div>

      <Button className="w-full max-w-xs rounded-xl bg-blue-500">
        <p className="">Follow</p>
      </Button>
      <ProfileDetails tools={tools} skills={skills} links={links} />
    </div>
  );
}

function RecommendationsTab({
  recommendations,
}: {
  recommendations: unknown[];
}) {
  return (
    <div className="">
      {recommendations?.length === 0 && <p>No recommendations yet</p>}
    </div>
  );
}

function ProfileTabs() {
  return (
    <Tabs defaultValue="projects" className="">
      <TabsList className="grid w-[400px] grid-cols-3">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <div className="max-h-[500px] w-full space-y-6 overflow-y-scroll">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </TabsContent>
      <TabsContent value="recommendations">
        <div className="">
          <RecommendationsTab recommendations={[]} />
        </div>
      </TabsContent>
      <TabsContent value="services"></TabsContent>
    </Tabs>
  );
}

function ProfileModal({
  buttonRef,
  indie,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
  indie: Indie | null;
}) {
  const { tag_line } = indie ?? {};
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="hidden" ref={buttonRef} variant="outline" />
      </SheetTrigger>
      <SheetContent className="flex min-w-max justify-end bg-dark text-light">
        <div className="w-full max-w-screen-lg">
          <div className="grid gap-4 py-4 md:grid-cols-3 md:gap-x-8">
            <LargeIndieCard indie={indie} />
            <div className="col-span-2 hidden space-y-3 md:block">
              <strong className="text-2xl xl:text-3xl">{tag_line}</strong>
              <ProfileTabs />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ProfileModal;
