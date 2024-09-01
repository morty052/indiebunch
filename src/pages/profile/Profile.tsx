import Tag from "@/components/Tag";
import { TooltipComponent } from "@/components/Tooltip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserAvatar from "@/components/UserAvatar";
import { Indie } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

function CreateProjectCard() {
  return (
    <div className="grid place-content-center rounded-2xl border border-dashed p-4">
      <div className="flex items-center gap-x-1">
        <div className="grid place-content-center rounded-full border bg-light">
          <Plus className="h-8 w-8 text-dark" />
        </div>
        <p className="font-semibold">Create Project</p>
      </div>
    </div>
  );
}

function CreateServiceCard() {
  return (
    <Link
      to={"/create/service"}
      className="block cursor-pointer rounded-2xl border border-dashed p-4"
    >
      <div className="flex items-center gap-x-2">
        <div className="grid place-content-center rounded-full border bg-light">
          <Plus className="h-8 w-8 text-dark" />
        </div>
        <div className="space-y-1">
          <p className="font-semibold leading-none">Add Service</p>
          <p className="text-sm leading-none">Add a new service</p>
        </div>
      </div>
    </Link>
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
    <div className="col-span-2 flex flex-col items-center space-y-2 rounded-2xl p-2 md:border md:p-4">
      <UserAvatar className="h-28 w-28 md:h-32 md:w-32" />
      <div className="flex flex-col space-y-1">
        <p className="text-lg font-semibold md:text-2xl">{name}</p>
      </div>
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

function ServicesTab({ services }: { services: unknown[] }) {
  return (
    <div className="">
      <CreateServiceCard />
      {services?.length === 0 && <p>No recommendations yet</p>}
    </div>
  );
}

function ProfileTabs({ projects }: { projects: unknown[] }) {
  return (
    <Tabs defaultValue="projects" className="">
      <TabsList className="grid w-[400px] grid-cols-3">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <CreateProjectCard />
        <div className="max-h-[500px] w-full space-y-6 overflow-y-scroll">
          {projects?.map(() => <ProjectCard />)}
        </div>
      </TabsContent>
      <TabsContent value="recommendations">
        <div className="">
          <RecommendationsTab recommendations={[]} />
        </div>
      </TabsContent>
      <TabsContent value="services">
        <div className="">
          <ServicesTab services={[]} />
        </div>
      </TabsContent>
    </Tabs>
  );
}

const MockIndies = [
  {
    username: "@Tarzan",
    name: "Tarzan Micheal",
    // tag_line: "Indie game dev specialized in unity and c# programming",
    tag_line: "",
    skills: ["unity", "c#"],
    tools: ["unity", "c#"],
    badges: ["unity", "c#"],
    origin_story: "unity",
    links: ["unity", "c#"],
  },
];

const OneLinerComponent = ({ tag_line }: { tag_line: string | undefined }) => {
  const [editingOneLiner, seteditingOneLiner] = useState(false);
  const [oneLiner, setOneLiner] = useState("");

  return (
    <div className="">
      {!editingOneLiner && (
        <div
          onClick={() => seteditingOneLiner(true)}
          className="group flex cursor-pointer items-center gap-x-2"
        >
          <button className="grid h-10 w-10 shrink-0 place-content-center rounded-full border bg-light group-hover:bg-blue-600">
            <Plus className="h-8 w-8 text-dark" />
          </button>
          {tag_line && (
            <strong className="text-2xl xl:text-3xl">{tag_line}</strong>
          )}
          {!tag_line && (
            <strong className="text-2xl leading-[40px] tracking-wide md:text-[40px]">
              Add your unique <br className="hidden md:block" />
              one liner
            </strong>
          )}
        </div>
      )}
      {editingOneLiner && (
        <div className="space-y-1">
          <textarea
            className="h-[81px] w-full border-b bg-transparent text-2xl font-semibold focus:outline-0 lg:text-4xl"
            placeholder="Add your unique one liner"
            rows={1}
            defaultValue={tag_line}
            value={oneLiner}
            maxLength={60}
            onChange={(e) => setOneLiner(e.target.value)}
          />
          <div className="flex justify-end">
            <span>{oneLiner.length}/60</span>
          </div>
          <div className="flex justify-end gap-x-2">
            <button
              onClick={() => seteditingOneLiner(false)}
              className="inline-flex h-6 w-20 items-center justify-center rounded-3xl border px-3"
            >
              <span className="text-sm text-light">Cancel</span>
            </button>
            <button className="inline-flex h-6 w-20 items-center justify-center rounded-3xl bg-light px-3">
              <span className="text-sm text-dark">Save</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Profile = () => {
  const { tag_line } = MockIndies[0] ?? {};
  return (
    <div className="gap-4 py-4 text-light md:grid md:grid-cols-5">
      <LargeIndieCard indie={MockIndies[0]} />
      <div className="col-span-3 hidden space-y-3 md:block">
        <OneLinerComponent tag_line={tag_line} />
        <ProfileTabs projects={[]} />
      </div>
    </div>
  );
};

export default Profile;
