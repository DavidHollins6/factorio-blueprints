import Pako from "pako";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [inputVal, setInputval] = useState<string>("");
  const [blueprint, setBlueprint] = useState<unknown>();

  const decodeBlueprint = (string) => {
    //var binary = Base64.decode(str.substring(1))
    var encoded = Uint8Array.from(atob(string.substring(1)), (c) =>
      c.charCodeAt(0)
    );
    console.log("binary", encoded);
    var decoded = Pako.inflate(encoded, { to: "string" });
    console.log("uzip", decoded);
    return JSON.parse(decoded);
  };

  return (
    <div>
      {blueprint ? (
        <div>{JSON.stringify(blueprint)}</div>
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
