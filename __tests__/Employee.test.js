const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee("Grant");

    expect(employee.name).toBe("Grant");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

