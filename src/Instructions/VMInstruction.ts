import { ASMInstruction } from "./Assembly/ASMInstruction";
type ASMBlock = Array<ASMInstruction>;

export interface VMInstruction {
  compile: () => ASMBlock;
}
