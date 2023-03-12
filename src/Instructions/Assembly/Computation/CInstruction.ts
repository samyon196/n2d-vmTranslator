import { ASMInstruction } from "../ASMInstruction";

export class CInstruction implements ASMInstruction {
  destination: string;
  computation: string;
  branch: string;
  constructor(destination: string, computation: string, branch: string) {
    this.destination = destination;
    this.computation = computation;
    this.branch = branch;
  }
  print(): string {
    if (this.destination === "null") {
      return `${this.computation};${this.branch}`;
    }
    if (this.branch === "null") {
      return `${this.destination}=${this.computation}`;
    }
    return `${this.destination}=${this.computation};${this.branch}`;
  }
}
