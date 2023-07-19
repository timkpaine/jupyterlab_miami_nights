import "isomorphic-fetch";

import plugin from "../src/index";

describe("Checks activate", () => {
  test("Check activate", () => {
    const {activate} = plugin;
    expect(activate);
  });
});
