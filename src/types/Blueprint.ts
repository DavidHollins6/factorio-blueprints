export interface BlueprintRoot {
  blueprint_book: BlueprintBook;
}

export interface BlueprintBook {
  blueprints: Blueprint[];
  item: string;
  label: string;
  active_index: number;
  version: number;
}

export interface Blueprint {
  blueprint: Blueprint2;
  index: number;
}

export interface Blueprint2 {
  icons: Icon[];
  entities: Entity[];
  item: string;
  label: string;
  version: number;
}

export interface Icon {
  signal: Signal;
  index: number;
}

export interface Signal {
  type: string;
  name: string;
}

export interface Entity {
  entity_number: number;
  name: string;
  position: Position;
  control_behavior?: ControlBehavior;
  type?: string;
  direction?: number;
  recipe?: string;
  output_priority?: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface ControlBehavior {
  filters: Filter[];
}

export interface Filter {
  signal: Signal2;
  count: number;
  index: number;
}

export interface Signal2 {
  type: string;
  name: string;
}
