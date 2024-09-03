import { getServices } from "@/api";
import Tag from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

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

// const tags = ["unity", "c#"];

function SuggestedTags() {
  const { data: tags, isLoading } = useQuery({
    queryFn: getServices,
    queryKey: ["tags"],
  });
  if (isLoading) {
    return null;
  }

  console.log(tags);

  return (
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag, index) => <Tag key={index} title={tag.name} />)}
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

function ServiceInfoForm() {
  const [info, setInfo] = useState({
    title: "",
  });
  return (
    <div className="mx-auto max-w-xl space-y-3 rounded-xl bg-white p-4 text-dark">
      <form action="">
        <div className="flex flex-col space-y-3">
          <div className="">
            <h3 className="font-semibold">Title</h3>
            <p className="text-sm">
              Enter a descriptive title for your service
            </p>
          </div>
          <div className="">
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
            <div className="flex justify-end pt-2">
              <p className="text-sm">{info.title.length}/60</p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="">
            <h3 className="font-semibold">Add Tags</h3>
            <p className="text-sm">
              Add tags that make finding your service easier
            </p>
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Roles
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Tools
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Industry
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <Button>
            <p>Continue</p>
          </Button>
        </div>
      </form>
    </div>
  );
}

function DeliverablesForm() {
  const [info, setInfo] = useState({
    title: "",
  });
  return (
    <div className="mx-auto max-w-xl space-y-3 rounded-xl bg-white p-4 text-dark">
      <form action="">
        <div className="flex flex-col space-y-3">
          <div className="">
            <h3 className="font-semibold">Deliverables</h3>
            <p className="text-sm">
              List the deliverables a client can expect at the end of the
              project.
            </p>
          </div>
          <div className="">
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
            <div className="flex justify-end pt-2">
              <p className="text-sm">{info.title.length}/60</p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="">
            <h3 className="font-semibold">Add Tags</h3>
            <p className="text-sm">
              Add tags that make finding your service easier
            </p>
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Roles
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Tools
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Industry
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <Button>
            <p>Continue</p>
          </Button>
        </div>
      </form>
    </div>
  );
}

function DescriptionForm() {
  const [info, setInfo] = useState({
    title: "",
  });
  return (
    <div className="mx-auto max-w-xl space-y-3 rounded-xl bg-white p-4 text-dark">
      <form action="">
        <div className="flex flex-col space-y-3">
          <div className="">
            <h3 className="font-semibold">Description</h3>
            <p className="text-sm">
              Explain in 2-3 sentences what you're offering and highlight what
              makes you unique
            </p>
          </div>
          <div className="">
            <textarea
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full rounded-xl border p-2"
              rows={3}
            />
            <div className="flex justify-end pt-2">
              <p className="text-sm">{info.title.length}/60</p>
            </div>
          </div>

          <Button>
            <p>Continue</p>
          </Button>
        </div>
      </form>
    </div>
  );
}

function PricingForm() {
  const [info, setInfo] = useState({
    title: "",
  });
  return (
    <div className="mx-auto max-w-xl space-y-3 rounded-xl bg-white p-4 text-dark">
      <form action="">
        <div className="flex flex-col space-y-3">
          <div className="">
            <h3 className="text-xl font-semibold">
              Set up pricing for service
            </h3>
          </div>
          <div className="">
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
            <div className="flex justify-end pt-2">
              <p className="text-sm">{info.title.length}/60</p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="">
            <h3 className="font-semibold">Add Tags</h3>
            <p className="text-sm">
              Add tags that make finding your service easier
            </p>
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Roles
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Tools
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <div className="">
            <label className="text-sm" htmlFor="">
              Industry
            </label>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-xl"
            />
          </div>
          <Button>
            <p>Continue</p>
          </Button>
        </div>
      </form>
    </div>
  );
}

function ImageForm() {
  // const [image, setImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  function handleImage(file: File | undefined) {
    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    // setImage(file);
    setImageUrl(imageUrl);
  }

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleImage(e.dataTransfer?.files?.[0]);
      }}
      className="mx-auto max-w-xl space-y-3 rounded-xl bg-white p-4 text-dark"
    >
      <form action="">
        <div className="flex flex-col space-y-3">
          <div className="">
            <h3 className="text-xl font-semibold">
              Add an image to your service
            </h3>
          </div>
          <div className="">
            <Input
              id="image"
              onChange={(e) => handleImage(e.target?.files?.[0])}
              className="hidden rounded-xl"
              type="file"
            />
            {!imageUrl && (
              <label
                htmlFor="image"
                className="grid h-[350px] w-full cursor-pointer place-content-center rounded-xl border"
              >
                <ImageIcon className="mx-auto h-32 w-32" />
                <p>Click to upload or drag and drop</p>
              </label>
            )}
            {imageUrl && (
              <div className="mx-auto h-[350px] w-full cursor-pointer border">
                <img src={imageUrl} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400">
            Images at least 1600 x 1200 (4:3 aspect ratio) in PNG, JPG, or GIF
            formats work best. 10MB max file size.
          </p>
          <Button onClick={() => navigate("/workspace")}>
            <p>Continue</p>
          </Button>
        </div>
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
        <Route path="/info" element={<ServiceInfoForm />} />
        <Route path="/deliverables" element={<DeliverablesForm />} />
        <Route path="/description" element={<DescriptionForm />} />
        <Route path="/pricing" element={<PricingForm />} />
        <Route path="/image" element={<ImageForm />} />
      </Routes>
    </div>
  );
};

export default CreateService;
