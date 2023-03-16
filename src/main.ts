import { readFileSync, writeFileSync } from "fs";

if (process.argv.length < 3) {
  console.log("Error in usage - Please supply filename");
  process.exit(-1);
}
try {
  const fileName = process.argv[2];
  // Read program
  const vmSourceCode = readFileSync(fileName, "utf8");
  const lines = vmSourceCode.split(/\r\n|\r|\n/);
  for (const line of lines) {
    const op = line.split(" ");
    const isMemAccess = op[0] == "push" || op[0] == "pop";
    const isCalculation = op[0] == "add" || op[0] == "neg";
    if(isMemAccess) {
      
    }
  }
  // write to file
  //writeFileSync(fileName + "." + outExt, bin);
} catch (err) {
  console.log(err);
}
