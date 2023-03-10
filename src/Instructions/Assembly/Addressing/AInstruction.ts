import { ASMInstruction } from "../ASMInstruction";

export class AInstruction implements ASMInstruction {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  print(): string {
    return "@" + this.value;
  }
}
