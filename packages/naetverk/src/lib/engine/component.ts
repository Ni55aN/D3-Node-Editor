import { Engine } from './engine';
import { NodeData, WorkerInputs, WorkerOutputs } from '../core';

export abstract class Component {
  name: string;
  data: unknown = {};
  engine: Engine | null = null;

  protected constructor(name: string) {
    this.name = name;
  }

  abstract worker(
    node: NodeData,
    inputs: WorkerInputs,
    outputs: WorkerOutputs,
    ...args: unknown[]
  ): void;
}