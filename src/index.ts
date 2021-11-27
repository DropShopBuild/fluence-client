import { Fluence, FluencePeer } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import { registerCalc, CalcDef } from "./_aqua/calc";
import { demoCalculation } from "./_aqua/demo-calculation";

class Calc implements CalcDef {
  private _state: number = 0;

  add(n: number) {
    this._state += n;
  }

  subtract(n: number) {
    this._state -= n;
  }

  multiply(n: number) {
    this._state *= n;
  }

  divide(n: number) {
    this._state /= n;
  }

  reset() {
    this._state = 0;
  }

  getResult() {
    return this._state;
  }
}

const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise<void>((resolve) =>
    process.stdin.once("data", () => {
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};

async function main() {
  const peer = new FluencePeer();
  await peer.start({
    connectTo: krasnodar[0],
  });
  registerCalc(new Calc());
  try {
    console.log("test = ", await demoCalculation(peer));
  } catch (err) {
    console.log("err", err);
  }

  await console.log("application started");
  console.log("peer id is: ", peer.getStatus().peerId);
  console.log("relay is: ", peer.getStatus().relayPeerId);
  console.log("press any key to continue");
  await keypress();

  await peer.stop();
}

main();
