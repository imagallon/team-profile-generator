const Employee = require("../lib/Employee");
const Manager = require('../lib/Manager.js');
const employee = new Employee("Israel", 5, "israel@email.com");
const manager = new Manager("Israel", 5, "israel@email.com", 12);

describe("Employee", () => {
  describe("constructor", () => {
    it("sets name, id, and email", () => {
      expect(employee).toEqual({
        name: "Israel",
        id: 5,
        email: "israel@email.com",
      });
    });
  });

  describe("getName", () => {
    const result = employee.getName();
    expect(result).toBe("Israel");
  });

  describe("getId", () => {
    const result = employee.getId();
    expect(result).toBe(5);
  });

  describe("getEmail", () => {
    const result = employee.getEmail();
    expect(result).toBe("israel@email.com");
  });

  describe("getRoles", () => {
    const result = employee.getRole()
    expect(result).toBe("Employee");
  })
});

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
    const result = manager.getRole()
    expect(result).toBe("Manager");
  })
});

describe("Engineer", () => {
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
    const result = manager.getRole()
    expect(result).toBe("Manager");
  })
})


// Properties:
// -name: String - The employee's name. ("fred")
// -id: Number - The unique id of the employee. (1)
// -email: String - The email used the contact employee. ("fred@email.com)

// Methods
// getName(): string - returns the employee's name
// getId(): number - returns the employee's name
// getEmail(): string - returns the employee's email
// getRole()—returns 'Employee'
