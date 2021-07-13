const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer.js");
const engineer = new Engineer("Israel", 5, "israel@email.com", "imagallon");


describe("Engineer", () => {
  describe("constructor", () => {
    it("sets gitHub and role for engineer", () => {
      expect(engineer).toEqual({
        name: "Israel",
        id: 5,
        email: "israel@email.com",
        gitHubUserName: "imagallon",
      });
    });
  });
  describe("getRoles", () => {
    const result = engineer.getRole();
    expect(result).toBe("Engineer");
  });
  describe("getGithub", () => {
    const result = engineer.getGithub();
    expect(result).toBe("imagallon");
  });
});