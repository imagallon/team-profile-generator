const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager.js");
const manager = new Manager("Israel", 5, "israel@email.com", 12);

describe("Manager", () => {
  describe("constructor", () => {
    it("sets officeNumer and role for managers", () => {
      expect(manager).toEqual({
        name: "Israel",
        id: 5,
        email: "israel@email.com",
        officeNumber: 12,
      });
    });
  });
  describe("getRoles", () => {
    const result = manager.getRole();
    expect(result).toBe("Manager");
  });
});
