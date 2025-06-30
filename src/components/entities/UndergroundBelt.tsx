import { Entity } from "../../types/Blueprint";

const SPRITE_WIDTH = 60;
const SPRITE_HEIGHT = 60;
const GAP_X = 120;
const GAP_Y = 110;
const COLS = 4;

export function UndergroundBelt({ entity }: { entity: Entity }) {
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
          backgroundImage: "url(entities/underground-belt.png)",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}
