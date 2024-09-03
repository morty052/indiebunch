import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabclassName =
  "rounded-none border-b cursor-pointer border-light/30 bg-transparent text-xl data-[state=active]:border-red-300 data-[state=active]:bg-transparent data-[state=active]:text-light data-[state=active]:border-b-2";

const Tavern = () => {
  return (
    <div className="px-[-30px]">
      <Tabs defaultValue="projects" className="">
        <TabsList className="grid w-full grid-cols-2 bg-transparent">
          <TabsTrigger asChild className={tabclassName} value="projects">
            <p className="font-semibold">Projects</p>
          </TabsTrigger>
          <TabsTrigger className={tabclassName} asChild value="services">
            <a className="">Bounties</a>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <p className="text-light">Projects</p>
        </TabsContent>
        <TabsContent value="recommendations">
          <div className=""></div>
        </TabsContent>
        <TabsContent value="services">
          <div className="">
            <p
              onClick={() => {
                console.log("cliecked");
              }}
              className="text-light"
            >
              ggdg
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tavern;
