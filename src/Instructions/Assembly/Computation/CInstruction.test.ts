import { describe, expect, test } from "vitest";
import { CInstruction } from "./CInstruction";

describe("C Instruction", () => {
  describe("print()", () => {
    test("full instruction", () => {
      const cInst = new CInstruction('M', 'D+A', 'JNE');
      expect(cInst.print()).toEqual("M=D+A;JNE");
    });

    test("support for null destination", () => {
      const cInst = new CInstruction('null', 'D+A', 'JNE');
      expect(cInst.print()).toEqual("D+A;JNE");
    });

    test("support for null branching", () => {
      const cInst = new CInstruction('M', 'D+A', 'null');
      expect(cInst.print()).toEqual("M=D+A");
    });
  });
});
