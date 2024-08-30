import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Indie } from "@/types";

function ProfileModal({
  buttonRef,
  indie,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
  indie: Indie | null;
}) {
  const { username } = indie ?? {};
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="hidden" ref={buttonRef} variant="outline" />
      </SheetTrigger>
      <SheetContent className="min-w-[90%]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-semibold">{username}</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default ProfileModal;
