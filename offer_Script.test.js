const changingList = require("./offer_Script");

/**
 * test if array of the tool types contain a certain type
 */
const toolTypes = ["sewing", "canvas", "glass", "other"];

it("the list toolTypes should contain sewing", () => {
  expect(toolTypes).toContain("sewing");
});

const tools = {
  sewing: ["ابر", "خيوط", "اقمشة", "طارة", "آخر"],

  canvas: ["فرش", "مزيل الوان", "الوان", "لوحة الوان", "آخر"],

  glass: ["ادوات نحت", "صحن دوار", "قوالب تشكيل", "اخر"],

  other: [
    "ابر",
    "خيوط",
    "اقمشة",
    "طارة",
    "فرش",
    "مزيل الوان",
    "الوان",
    "لوحة الوان",
    "ادوات نحت",
    "صحن دوار",
    "قوالب تشكيل",
    "آخر",
  ],
};

//test if array contains the elements
describe("arrayContaining", () => {
  const expectedSewing = ["ابر", "خيوط", "اقمشة", "طارة", "آخر"];
  it("matches even if received contains additional elements", () => {
    expect(["ابر", "خيوط", "اقمشة", "طارة", "آخر"]).toEqual(
      expect.arrayContaining(expectedSewing)
    );
  });
  it("does not match if received does not contain expected elements", () => {
    expect(["فرش", "مزيل الوان", "الوان", "لوحة الوان", "آخر"]).not.toEqual(
      expect.arrayContaining(expectedSewing)
    );
  });
});


