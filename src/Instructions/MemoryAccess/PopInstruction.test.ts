import { describe, expect, test } from "vitest";
import { PopInstruction } from "./PopInstruction";
import { ASMInstruction } from "../Assembly/ASMInstruction";
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

    ]
    expect(popInst.compile()).toEqual("local");
  });
});
