import type { EntitySchema } from "typeorm/entity-schema/EntitySchema";
export declare function UseEntity(entity: EntitySchema | Function): (target: Function, propertyKey: string, descriptor: number) => void;
