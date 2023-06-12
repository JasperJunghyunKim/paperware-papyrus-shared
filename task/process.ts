import { Model } from "..";

export interface Input {
  packagingType: Model.Enum.PackagingType;
  sizeX: number;
  sizeY: number;
}

export interface Data extends Input {
  quantity: number;
}

export function applicate(
  input: Input,
  tasks: Model.Task[],
  lastTaskId: number
): Data {
  const items: Model.Task[] = tasks
    .reduce(
      (acc: Model.Task[], task: Model.Task) => {
        const parentTask = tasks.find((p) => p.id === task.parentTaskId);
        if (parentTask) {
          acc.push(parentTask);
        }
        return acc;
      },
      [tasks.find((p) => p.id === lastTaskId)!]
    )
    .reverse();

  let data: Data = {
    packagingType: input.packagingType,
    sizeX: input.sizeX,
    sizeY: input.sizeY,
    quantity: 0,
  };

  for (const item of items) {
    data = operate(data, item);
  }

  return data;
}

function operate(input: Data, operator: Model.Task): Data {
  switch (operator.type) {
    case "CONVERTING":
      return operateConverting(
        input,
        operator.taskConverting?.sizeX ?? 1,
        operator.taskConverting?.sizeY ?? 1
      );
    case "GUILLOTINE":
      return operateGuillotine(
        input,
        operator.taskGuillotine?.sizeX ?? 1,
        operator.taskGuillotine?.sizeY ?? 1
      );
    case "RELEASE":
      return operateQuantity(input, operator.taskQuantity?.quantity ?? 0);
    default:
      throw new Error(`Unknown task type: ${operator.type}`);
  }
}

function operateConverting(input: Data, sizeX: number, sizeY: number): Data {
  return {
    packagingType: "SKID",
    sizeX,
    sizeY,
    quantity: input.quantity,
  };
}

function operateGuillotine(input: Data, sizeX: number, sizeY: number): Data {
  return {
    packagingType: "SKID",
    sizeX,
    sizeY,
    quantity: input.quantity,
  };
}

function operateQuantity(input: Data, quantity: number): Data {
  return {
    packagingType: input.packagingType,
    sizeX: input.sizeX,
    sizeY: input.sizeY,
    quantity,
  };
}
