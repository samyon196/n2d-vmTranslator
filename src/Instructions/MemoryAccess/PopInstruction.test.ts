import { describe, expect, test } from "vitest";
import { PopInstruction } from "./PopInstruction";
import { ASMInstruction } from "../Assembly/ASMInstruction";
import { CInstruction } from "../Assembly/Computation/CInstruction";
import { AInstruction } from "../Assembly/Addressing/AInstruction";
type ASMBlock = Array<ASMInstruction>;

describe("Pop Instruction Tests", () => {
  test("Correct object construction", () => {
    const popInst = new PopInstruction("local", 2);
    expect(popInst).toBeDefined();
    expect(popInst.segment).toEqual("local");
  });
  test("should compile correctly the pop local 2", () => {
    const popInst = new PopInstruction("local", 2);
    const asmListing: ASMBlock = [
      // CALCULATE TARGET LCL ADDR
      new AInstruction("LCL"),
      new CInstruction("D", "M", "null"),
      new AInstruction("2"),
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
    expect(popInst.compile()).toEqual(asmListing);
  });
  test("should compile correctly the pop local 3", () => {
    const popInst = new PopInstruction("local", 3);
    const asmListing: ASMBlock = [
      // CALCULATE TARGET LCL ADDR
      new AInstruction("LCL"),
      new CInstruction("D", "M", "null"),
      new AInstruction("3"),
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
    expect(popInst.compile()).toEqual(asmListing);
  });
});
