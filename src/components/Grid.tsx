import { Blueprint } from "../types/Blueprint";
import { EntityGridItem } from "./EntityGridItem";

const gridSize = [
  { index: -12 },
  { index: -11 },
  { index: -10 },
  { index: -9 },
  { index: -8 },
  { index: -7 },
  { index: -6 },
  { index: -5 },
  { index: -4 },
  { index: -3 },
  { index: -2 },
  { index: -1 },
  { index: 0 },
  { index: 1 },
  { index: 2 },
  { index: 3 },
  { index: 4 },
  { index: 5 },
  { index: 6 },
  { index: 7 },
  { index: 8 },
  { index: 9 },
  { index: 10 },
  { index: 11 },
  { index: 12 },
];

export function Grid({ blueprint }: { blueprint: Blueprint }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: `calc(${gridSize.length} * 32px)`,
      }}
    >
      {gridSize.map((x) =>
        gridSize.map((y) => (
          <div
            style={{
              height: "32px",
              width: "32px",
              border: "1px solid black",
              boxSizing: "border-box",
            }}
          >
            <EntityGridItem
              entity={blueprint.blueprint.entities.find(
                (e) => e.position.x === x.index && e.position.y === y.index
              )}
            />
          </div>
        ))
      )}
    </div>
  );
}
