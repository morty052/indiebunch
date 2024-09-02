import Tag from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Routes, Route } from "react-router-dom";

function Header() {
  return (
    <nav className="text-light">
      <div className="flex items-center justify-between border-b px-2 py-4">
        <h3 className="font-black">Add a new service </h3>
        <div className="flex items-center gap-x-2">
          <p>Cancel</p>
          <div className="h-8 w-px border-l border-white/30"></div>
          <p>Get started</p>
        </div>
      </div>
    </nav>
  );
}

const tags = ["unity", "c#"];

function SuggestedTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag} title={tag} />
      ))}
    </div>
  );
}

function NewServiceForm() {
  return (
    <div className="mx-auto max-w-xl space-y-3 rounded-xl bg-white p-4 text-dark">
      <div className="">
        <h3 className="font-semibold">What type of Service are you adding ?</h3>
        <p className="text-sm">Pick a category for your new service</p>
      </div>
      <form action="">
        <div className="">
          <Input className="rounded-xl" />
        </div>
        <div className="flex justify-end pt-2">
          <Button>
            <p>Get started</p>
          </Button>
        </div>
        <SuggestedTags />
      </form>
    </div>
  );
}

const CreateService = () => {
  return (
    <div className="space-y-6">
      <Header />
      <Routes>
        <Route path="/" element={<NewServiceForm />} />
      </Routes>
    </div>
  );
};

export default CreateService;
