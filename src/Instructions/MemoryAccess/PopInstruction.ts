import { VMInstruction } from "../VMInstruction";
import { ASMInstruction } from '../Assembly/ASMInstruction'
type ASMBlock = Array<ASMInstruction>;
export class PopInstruction implements VMInstruction {
  segment: string;
  constructor(segment: string) {
    this.segment = segment;
  }
  compile(): ASMBlock {
    const x: ASMBlock = [];
    return x;
  }
}
