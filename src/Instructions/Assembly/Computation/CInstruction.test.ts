import { describe, expect, test } from "vitest";
import { CInstruction } from "./CInstruction";

describe("C Instruction", () => {
  describe("print()", () => {
    test("prints number with @ prefix", () => {
      const cInst = new CInstruction(3);
      expect(cInst.print()).toEqual("@3");
    });

    test("supports numbers with multiple digits", () => {
      const cInst = new CInstruction(259);
      expect(cInst.print()).toEqual("@259");
    });
  });
});
