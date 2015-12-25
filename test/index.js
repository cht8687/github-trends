import test from "tape"
import githubtrend from "../src"

test("githubtrend", (t) => {
  t.plan(1)
  t.equal(typeof githubtrend, 'function');
})
