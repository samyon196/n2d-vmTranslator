import { ASMInstruction } from "../ASMInstruction";

export class AInstruction implements ASMInstruction {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
  print(): string {
    return "@" + this.value;
  }
}
