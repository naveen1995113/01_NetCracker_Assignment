import {
  differentPaths,
  differentMethods,
  differentPathsAndMethods,
} from "../index";
describe("Testing custom openapi3rule", () => {
  it("Testing for different paths", () => {
    expect(differentPaths()).toEqual([
      {
        path: ["paths"],
        before: "/todos",
        after: "/todos1",
        action: "rename",
        type: "non-breaking",
      },
    ]);
  });
  it("Testing for different methods", () => {
    expect(differentMethods()).toEqual([
      {
        path: ["paths", "/todos"],
        before: "get",
        after: "post",
        action: "rename",
        type: "unclassified",
      },
    ]);
  });
  it("Testing for both different paths and methods", () => {
    expect(differentPathsAndMethods()).toEqual([
      {
        path: ["paths"],
        before: "/todos",
        after: "/todos1",
        action: "rename",
        type: "non-breaking",
      },
      {
        path: ["paths", "/todos"],
        before: "get",
        after: "post",
        action: "rename",
        type: "unclassified",
      },
    ]);
  });
});
