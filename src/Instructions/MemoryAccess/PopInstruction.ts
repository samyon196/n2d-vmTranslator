import { VMInstruction } from "../VMInstruction";
import { ASMInstruction } from "../Assembly/ASMInstruction";
import { AInstruction } from "../Assembly/Addressing/AInstruction";
import { CInstruction } from "../Assembly/Computation/CInstruction";
type ASMBlock = Array<ASMInstruction>;
export class PopInstruction implements VMInstruction {
  segment: string;
  offset: number;
  private sections: Map<string, string>;
  constructor(segment: string, offset: number) {
    this.sections = new Map([
      ["local", "LCL"],
      ["argument", "ARG"],
      ["this", "THIS"],
      ["that", "THAT"],
    ]);
    this.segment = segment;
    this.offset = offset;
  }
  compile(): ASMBlock {
    const x: ASMBlock = [
      // CALCULATE TARGET LCL ADDR
      new AInstruction(this.sections.get(this.segment) + ""),
      new CInstruction("D", "M", "null"),
      new AInstruction(this.offset.toString()),
      new CInstruction("D", "A+D", "null"),
      // STORE TARGET ADDR AT R13
      new AInstruction("13"),
      new CInstruction("M", "D", "null"),
      // GET ELEMENT FROM STACK
      new AInstruction("SP"),
      new CInstruction("AM", "M-1", "null"),
      new CInstruction("D", "M", "null"),
      // WRITE TO ADDR STORED AT R13
      new AInstruction("13"),
      new CInstruction("A", "M", "null"),
      new CInstruction("M", "D", "null"),
    ];
    return x;
  }
}
