import { Entity } from "../types/Blueprint";
import { AssemblingMachine } from "./entities/AssemblingMachine";
import { ElectricPole } from "./entities/ElectricPole";
import { TransportBelt } from "./entities/TransportBelt";
import { UndergroundBelt } from "./entities/UndergroundBelt";

export function EntityGridItem({ entity }: { entity?: Entity }) {
  if (!entity) {
    return null;
  }

  switch (entity.name) {
    case "assembling-machine-2":
      return <AssemblingMachine entity={entity} />;
    case "small-electric-pole":
      return <ElectricPole entity={entity} />;
    case "transport-belt":
      return <TransportBelt entity={entity} />;
    case "underground-belt":
      return <UndergroundBelt entity={entity} />;
    default:
      console.log("missing: ", entity.name);
      return null;
  }

  // return <img height={32} width={32} src={`entities/${entity.name}.png`} />;
}
