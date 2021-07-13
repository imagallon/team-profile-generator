const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern.js");
const intern = new Intern("Israel", 5, "israel@email.com", "UCSD");


describe("Intern", () => {
  describe("constructor", () => {
    it("sets school and role for intern", () => {
      expect(intern).toEqual({
        name: "Israel",
        id: 5,
        email: "israel@email.com",
        school: "UCSD",
      });
    });
  });
  describe("getRoles", () => {
    const result = intern.getRole();
    expect(result).toBe("Intern");
  });
  describe("getSchool", () => {
    const result = intern.getSchool();
    expect(result).toBe("UCSD");
  });
});