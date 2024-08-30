import { useRive } from "@rive-app/react-canvas";

export default function Rive({
  src,
  stateMachineName,
}: {
  src: string;
  stateMachineName: string;
}) {
  const { RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachineName,
    // layout: new Layout({
    //   fit: Fit.Cover,
    //   alignment: Alignment.Center,
    // }),
    autoplay: true,
  });
  return <RiveComponent />;
}
