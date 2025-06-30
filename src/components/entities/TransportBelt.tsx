import { Entity } from "../../types/Blueprint";

const SPRITE_WIDTH = 68;
const SPRITE_HEIGHT = 66;
const GAP_X = 60;
const GAP_Y = 60;
const COLS = 16;

export function TransportBelt({ entity }: { entity: Entity }) {
  const displaySize = 30;
  const col = 1;
  const row = 1;

  const totalWidth = SPRITE_WIDTH + GAP_X;
  const totalHeight = SPRITE_HEIGHT + GAP_Y;

  const x = col * totalWidth;
  const y = row * totalHeight;

  return (
    <>
      <div
        style={{
          width: `${displaySize}px`,
          height: `${displaySize}px`,
          backgroundImage: "url(entities/transport-belt.png)",
          backgroundPosition: `-${x}px -${y}px`,
          backgroundSize: `calc(${COLS * totalWidth}px * (30 / ${SPRITE_WIDTH})) auto`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
        }}
      ></div>
    </>
  );
}
