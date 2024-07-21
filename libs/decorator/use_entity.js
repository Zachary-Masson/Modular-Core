"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseEntity = UseEntity;
function UseEntity(entity) {
    return (target, propertyKey, descriptor) => {
        if (!target.prototype.entitiesLoadList)
            target.prototype.entitiesLoadList = [{ key: descriptor, entity }];
        else
            target.prototype.entitiesLoadList.push({ key: descriptor, entity });
    };
}
