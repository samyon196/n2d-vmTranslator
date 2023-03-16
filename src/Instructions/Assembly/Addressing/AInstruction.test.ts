import { describe, expect, test } from "vitest";
import { AInstruction } from "./AInstruction";

describe("A Instruction", () => {
  describe("print()", () => {
    test("prints number with @ prefix", () => {
      const cInst = new AInstruction("3");
      expect(cInst.print()).toEqual("@3");
    });

    test("supports numbers with multiple digits", () => {
      const cInst = new AInstruction("259");
      expect(cInst.print()).toEqual("@259");
    });

    test("should allow pointer addresses", () => {
      const cInst = new AInstruction("SP");
      expect(cInst.print()).toEqual("@SP");
    });
  });
});
