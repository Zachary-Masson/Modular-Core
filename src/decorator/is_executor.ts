export function IsExecutor() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    target["exec"] = descriptor.value;
  };
}
