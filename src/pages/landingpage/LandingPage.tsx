import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, SearchIcon, Stars } from "lucide-react";
import * as Logo from "../../assets/logos";
import AllConnected from "./components/AllConnected";
import CreatingProjects from "./components/CreatingProjects";

function MarqueeButton({ title, color }: { title: string; color: string }) {
  return (
    <div
      className={`${color} inline-flex w-72 justify-center rounded-2xl py-3`}
    >
      <span className="text-2xl font-semibold tracking-wide text-white">
        {title}
      </span>
    </div>
  );
}

function Banner() {
  return (
    <div
      className={`flex w-72 items-center justify-around rounded-3xl border bg-pink-500/60 px-4 py-1`}
    >
      <Stars className="h-4 w-4 text-white" />
      <span className="ml-4 flex-1 font-medium text-white">See whats new</span>
      <ArrowRight className="h-4 w-4 text-white" />
    </div>
  );
}

function DreamSponsors() {
  return (
    <div className="mx-auto flex max-w-max flex-col items-center space-y-6 rounded-xl bg-white md:p-4">
      <p className="text-neutral-900">
        In our <strong>Dreams </strong>
        we are Trusted by <strong className="framer-text">800K+</strong>{" "}
        freelancers and <strong className="framer-text">20K+ teams</strong> like
      </p>{" "}
      <div className="grid grid-cols-4 items-center md:flex md:gap-x-10">
        <img
          className="h-[80px] w-[80px] object-contain"
          src={Logo.blender_logo}
          alt=""
        />
        <img
          className="h-[80px] w-[80px] object-contain"
          src={Logo.unity}
          alt=""
        />
        <img
          className="h-[80px] w-[80px] object-contain"
          src={Logo.rive_logo}
          alt=""
        />
        <img
          className="h-[80px] w-[80px] object-contain"
          src={Logo.supabase_logo}
          alt=""
        />
        <img
          className="h-[80px] w-[80px] object-contain"
          src={Logo.figma}
          alt=""
        />
        <img
          className="h-[80px] w-[80px] object-contain"
          src={Logo.canva}
          alt=""
        />
      </div>
    </div>
  );
}

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-screen-xl space-y-14 px-2 py-4 xl:px-8">
        <div className="grid gap-x-6 sm:grid-cols-2 md:p-4">
          <div className="space-y-4">
            <Banner />
            <h1 className="text-5xl font-black text-white">Indie Bunch</h1>
            <p className="text-2xl text-white">
              A modern platform created for indie builders to
            </p>
            <div className="flex items-center gap-2">
              <MarqueeButton color="bg-orange-500" title="Connect" />
              <MarqueeButton color="bg-pink-500" title="Collaborate" />
              <p className="text-5xl text-white">&</p>
              <MarqueeButton color="bg-green-500" title="Showcase" />
            </div>
            <Separator className="my-4 bg-white/40" />
            <p className="text-gray-200">
              Build Awesome projects with a new crew <br /> on indie bunch today
            </p>
            <div className="flex md:gap-x-2">
              <Button className="group rounded-2xl bg-purple-400 py-4 hover:bg-purple-600">
                <p className="text-lg text-white">Get Started &#8594;</p>
              </Button>
              <Button className="group space-x-2 rounded-2xl border bg-transparent py-4">
                <span className="text-lg text-white">Browse indies</span>
                <SearchIcon className="mt-1 h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
          <div className="">
            <img src="https://placehold.co/900x600" alt="" />
          </div>
        </div>
        <DreamSponsors />
        <AllConnected />
        <CreatingProjects />
      </section>
    </main>
  );
};

export default LandingPage;
