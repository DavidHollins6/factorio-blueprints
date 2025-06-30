import Pako from "pako";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { BlueprintBook, BlueprintRoot } from "../types/Blueprint";
import { BlueprintRenderer } from "../components/BlueprintRenderer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [inputVal, setInputval] = useState<string>("");
  const [blueprint, setBlueprint] = useState<BlueprintRoot>();

  const decodeBlueprint = (string) => {
    //var binary = Base64.decode(str.substring(1))
    var encoded = Uint8Array.from(atob(string.substring(1)), (c) =>
      c.charCodeAt(0)
    );
    var decoded = Pako.inflate(encoded, { to: "string" });
    return JSON.parse(decoded) as BlueprintRoot;
  };

  return (
    <div>
      {blueprint ? (
        <BlueprintRenderer book={blueprint.blueprint_book} />
      ) : (
        <div>
          <label>Enter a blueprint</label>
          <textarea
            value={inputVal}
            onChange={(e) => setInputval(e.target.value)}
            rows={6}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (inputVal) {
                setBlueprint(decodeBlueprint(inputVal));
              }
            }}
          >
            Show
          </button>
        </div>
      )}
    </div>
  );
}
