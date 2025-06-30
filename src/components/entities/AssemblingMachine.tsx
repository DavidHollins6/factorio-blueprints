import { Entity } from "../../types/Blueprint";

export function AssemblingMachine({ entity }: { entity: Entity }) {
  const displaySize = 62,
    columns = 8,
    rows = 4;
  const col = 0;
  const row = 0;
  const backgroundX = -col * displaySize;
  const backgroundY = -row * displaySize;

  return (
    <>
      <div
        style={{
          width: `${displaySize}px`,
          height: `${displaySize}px`,
          backgroundImage: "url(entities/assembling-machine-2.png)",
          backgroundPosition: `${backgroundX}px ${backgroundY}px`,
          backgroundSize: `${columns * displaySize}px ${rows * displaySize}px`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
        }}
      ></div>
    </>
  );
}
