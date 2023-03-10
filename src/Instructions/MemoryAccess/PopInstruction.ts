import { VMInstruction } from "../VMInstruction";
export class PopInstruction implements VMInstruction {
  segment: string;
  constructor(segment: string) {
    this.segment = segment;
  }
}
