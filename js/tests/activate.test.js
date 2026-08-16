import "isomorphic-fetch";

import plugin from "../src/index";

describe("Checks activate", () => {
  test("Check activate", () => {
<<<<<<< before updating
    const {activate} = plugin;
    expect(activate);
=======
    expect(_activate).toBeDefined();
>>>>>>> after updating
  });
});
