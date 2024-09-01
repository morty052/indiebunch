import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const MarqueePhoto = () => {
  return (
    <div className="h-52 w-full rounded-xl bg-purple-600 md:max-w-64"></div>
  );
};

const UserAvatar = ({ className }: { className?: string }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
