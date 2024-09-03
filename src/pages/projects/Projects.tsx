import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="grid h-full place-content-center rounded-lg text-light md:border md:p-8">
      <div className="flex flex-col items-center gap-y-3">
        <img
          className="h-64 w-64"
          src="https://builds.contra.com/734f9b2d/assets/static/contact-signing.isKHxGFK.webp"
          alt=""
        />
        <div className="space-y-1">
          <p className="text-center text-xl font-semibold leading-none">
            Get started with a new project
          </p>
          <p>Created projects can be shared with others</p>
        </div>
        <Link to={"/create/project"}>
          <Button className="space-x-1 bg-blue-500 hover:bg-blue-600">
            <span>Create Project </span>
            <span>&rarr;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
