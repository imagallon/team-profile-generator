const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("sets name, id, and email", () => {
      const name = "Israel";
      const employee = new Employee("Israel", 5, "israel@email.com");
      expect(employee).toEqual({
        name: "Israel",
        id: 5,
        email: "israel@email.com",
      });
    });
  });
});
// Properties:
// -name: String - The employee's name. ("fred")
// -id: Number - The unique id of the employee. (1)
// -email: String - The email used the contact employee. ("fred@email.com)

// Methods
// getName(): string - returns the employee's name
// getId(): number - returns the employee's name
// getEmail(): string - returns the employee's email
// getRole()—returns 'Employee'
