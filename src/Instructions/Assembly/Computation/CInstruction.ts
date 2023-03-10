import { ASMInstruction } from "../ASMInstruction";

export class CInstruction implements ASMInstruction {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  print(): string {
    return "@" + this.value;
  }
}
