import { useState } from "react";
import { Blueprint, BlueprintBook } from "../types/Blueprint";
import { Grid } from "./Grid";

export function BlueprintRenderer({ book }: { book: BlueprintBook }) {
  const [selectedBlueprint, setSelectedBlueprint] = useState<
    Blueprint | undefined
  >();

  return (
    <>
      <h1>{book.label}</h1>
      <div>Blueprints:</div>
      {book.blueprints.map((b) => (
        <button
          onClick={() =>
            setSelectedBlueprint(
              book.blueprints.find((bp) => bp.index === b.index)
            )
          }
        >
          {b.blueprint.label}
        </button>
      ))}

      {selectedBlueprint ? <Grid blueprint={selectedBlueprint} /> : null}
    </>
  );
}
