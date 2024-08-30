import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const MarqueePhoto = () => {
  return (
    <div className="h-52 w-full rounded-xl bg-purple-600 md:max-w-64"></div>
  );
};

const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
