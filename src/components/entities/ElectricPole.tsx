import { Entity } from "../../types/Blueprint";

export function ElectricPole({ entity }: { entity: Entity }) {
  const displayWidth = 30,
    displayHeight = 60,
    columns = 4,
    rows = 1;
  const col = 0;
  const row = 0;
  const backgroundX = -col * displayWidth;
  const backgroundY = -row * displayHeight;

  return (
    <>
      <div
        style={{
          width: `${displayWidth}px`,
          height: `${displayHeight}px`,
          backgroundImage: "url(entities/small-electric-pole.png)",
          backgroundPosition: `${backgroundX}px ${backgroundY}px`,
          backgroundSize: `${columns * displayWidth}px ${rows * displayHeight}px`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
        }}
      ></div>
    </>
  );
}
