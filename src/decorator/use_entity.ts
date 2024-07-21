import type { EntitySchema } from "typeorm/entity-schema/EntitySchema";

export function UseEntity(entity: EntitySchema | Function) {
  return (target: Function, propertyKey: string, descriptor: number) => {
    if (!target.prototype.entitiesLoadList)
      target.prototype.entitiesLoadList = [{ key: descriptor, entity }];
    else target.prototype.entitiesLoadList.push({ key: descriptor, entity });
  };
}
