import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import * as Logos from "../../assets/logos";
import UserAvatar, { MarqueePhoto } from "@/components/UserAvatar";
import UserBadge from "@/components/UserBadge";
import Tag from "@/components/Tag";
import ProfileModal from "@/components/ProfileModal";
import { useCallback, useRef, useState } from "react";
import { Indie } from "@/types";

const suggestions = [
  { title: "Unity", value: "UNITY", icon: Logos.unity },
  { title: "Rive", value: "RIVE", icon: Logos.rive_logo },
  { title: "Blender", value: "BLENDER", icon: Logos.blender_logo },
  { title: "Canva", value: "RIVE", icon: Logos.canva },
  { title: "Figma", value: "FIGMA", icon: Logos.figma },
];

const MockIndies = [
  {
    username: "@Tarzan",
    name: "Tarzan Micheal",
    tag_line: "Indie game dev specialized in unity and c# programming",
    skills: ["unity", "c#"],
    tools: ["unity", "c#"],
    badges: ["unity", "c#"],
    origin_story: "unity",
    links: ["unity", "c#"],
  },
  {
    username: "@Winifred",
    name: "Winifred Micheal",
    tag_line: "Indie game dev specialized in unity and c# programming",
    skills: ["unity", "c#"],
    tools: ["unity", "c#"],
    badges: ["unity", "c#"],
    origin_story: "unity",
    links: ["unity", "c#"],
  },
  {
    username: "@Sonia",
    name: "Sonia Micheal",
    tag_line: "Indie game dev specialized in unity and c# programming",
    skills: ["unity", "c#"],
    tools: ["unity", "c#"],
    badges: ["unity", "c#"],
    origin_story: "unity",
    links: ["unity", "c#"],
  },
];

function SuggestionItem({ title, icon }: { title: string; icon: string }) {
  return (
    <Button className="group h-8 space-x-2 rounded-2xl bg-light hover:bg-purple-300">
      <img className="h-4 w-4 object-contain md:h-6 md:w-6" src={icon} alt="" />
      <p className="text-sm text-dark group-hover:text-white">{title}</p>
    </Button>
  );
}

function SuggestedSearches() {
  return (
    <div className="flex w-full items-center gap-2">
      <p className="hidden text-sm text-light md:block">Suggestions:</p>
      <div className="flex flex-wrap gap-2 md:max-w-none">
        {suggestions.map((suggestion, index) => (
          <SuggestionItem
            key={index}
            title={suggestion.title}
            icon={suggestion.icon}
          />
        ))}
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <form className="space-y-3">
      <div className="flex items-center gap-x-4">
        <Input className="max-w-2xl rounded-2xl" placeholder="Search" />
        <Filter className="h-5 w-5 text-white" />
      </div>
      <SuggestedSearches />
    </form>
  );
}

function UserTags() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag title="Game Dev" />
      <Tag title="3D Models" />
    </div>
  );
}

function UserBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      <UserBadge />
      <UserBadge />
      <UserBadge />
      <UserBadge />
    </div>
  );
}

function IndieCard({ onClick, indie }: { onClick: () => void; indie: Indie }) {
  const { username, name } = indie;
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col gap-4 border-b border-light/30 pb-3 text-light hover:bg-muted-foreground md:flex-row md:p-3"
    >
      <MarqueePhoto />
      <div className="flex-1 space-y-2">
        <div className="flex gap-x-2">
          <UserAvatar />
          <div className="">
            <p className="">{name}</p>
            <p className="hidden text-sm md:block"></p>
            <div className="flex items-center pt-1">
              <p className="text-sm">{username}</p>
              <div className="mx-1 h-4 border-l bg-white" />
              <p className="text-sm">5.5k Followers</p>
            </div>
          </div>
        </div>
        <p className="text-sm md:hidden">
          Indie game dev specialized in unity and c# programming
        </p>
        <UserBadges />
        <UserTags />
      </div>
    </div>
  );
}

const Discover = () => {
  const [activeIndie, setActiveIndie] = useState<Indie | null>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);

  const viewIndie = useCallback(
    (indie: Indie) => {
      setActiveIndie(indie);
      profileButtonRef.current?.click();
    },
    [setActiveIndie, profileButtonRef],
  );

  return (
    <div className="p-2 md:p-6">
      <SearchBar />
      <div className="space-y-3 overflow-scroll py-6">
        {MockIndies.map((indie, index) => (
          <IndieCard
            indie={indie}
            onClick={() => viewIndie(indie)}
            key={index}
          />
        ))}
      </div>
      <ProfileModal indie={activeIndie} buttonRef={profileButtonRef} />
    </div>
  );
};

export default Discover;
