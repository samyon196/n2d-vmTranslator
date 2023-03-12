import { describe, expect, test } from "vitest";
import { PopInstruction } from "./PopInstruction";
import { ASMInstruction } from "../Assembly/ASMInstruction";
import { CInstruction } from "../Assembly/Computation/CInstruction";
import { AInstruction } from "../Assembly/Addressing/AInstruction";
type ASMBlock = Array<ASMInstruction>;

describe("Pop Instruction Tests", () => {
  test("Correct object construction", () => {
    const popInst = new PopInstruction("local");
    expect(popInst).toBeDefined();
    expect(popInst.segment).toEqual("local");
  });
  test("Correct pop local 2 compilation", () => {
    const popInst = new PopInstruction("local");
    const asmListing: ASMBlock = [
      new AInstruction(0), // Set memory to point at M[0], where SP is located
      new CInstruction("AM", "M-1", "null"), // Point at stack top and SP--
      // R13 = M
      new AInstruction(13)
      new AInstruction(2),
      new CInstruction("D", "A", "null"),
      new AInstruction(1),
      new CInstruction("A", "M", "null"),
      new CInstruction("A", "A+D", "null"),
      // M = tmp
    ];
    asmListing.push(new CInstruction("M", "M+1", "null"));
    asmListing.push(new AInstruction(33));
    asmListing.push(new AInstruction(33));
    expect(popInst.compile()).toEqual(asmListing);
  });
});
