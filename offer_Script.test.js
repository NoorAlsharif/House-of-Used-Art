
const offer = require("./offer_Script");

/**
 * check if script is available by passing the log from script page
 */
 jest.fn(() => "This is the offer_Script page")
 test("Checks if offer_Script page is available", () => {
   const result = offer.log("This is the offer_Script page");
   expect(result).toBe("This is the offer_Script page")
  });

////////////////////////////////////

/**
 * test if array of the tool types contain a certain type
 */
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

////////////////////////////////////

/**
 * Check if text box is visible when check box is checked
 

import CustomPrice from './offer_Script';

it("text box in visible", () => {

  const box = offer.EnableTextBox.CustomPrice;
  const hidden = box.hidden = true;
  const check = offer.hasPrice.checked;
 
 
  expect(CustomPrice.hidden).toBe(true);
  

});
*/





