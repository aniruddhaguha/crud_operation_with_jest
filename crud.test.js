const { createUser, getUser, updateUser, deleteUser, resetUsers } = require('./crud');

beforeEach(() => {
  resetUsers(); // Reset store before each test
});

describe("CRUD Operations Test Suite", () => {

  // -------------------- CREATE --------------------
  test("C1: Create user with valid data", () => {
    const user = { id: 1, name: "Aniruddha" };
    expect(createUser(user)).toEqual(user);
    expect(getUser(1)).toEqual(user);
  });

  test("C2: Create user with missing ID throws error", () => {
    expect(() => createUser({ name: "No ID" })).toThrow("Invalid user data");
  });

  test("C3: Create user with missing name throws error", () => {
    expect(() => createUser({ id: 2 })).toThrow("Invalid user data");
  });

  // -------------------- READ --------------------
  test("R1: Get existing user by ID", () => {
    createUser({ id: 3, name: "Alice" });
    expect(getUser(3)).toEqual({ id: 3, name: "Alice" });
  });

  test("R2: Get non-existent user returns null", () => {
    expect(getUser(999)).toBeNull();
  });

  test("R3: Get user after deletion returns null", () => {
    createUser({ id: 4, name: "Bob" });
    deleteUser(4);
    expect(getUser(4)).toBeNull();
  });

  // -------------------- UPDATE --------------------
  test("U1: Update existing user data", () => {
    createUser({ id: 5, name: "Charlie" });
    const updated = updateUser(5, { name: "Charles" });
    expect(updated.name).toBe("Charles");
    expect(getUser(5).name).toBe("Charles");
  });

  test("U2: Update non-existent user returns null", () => {
    expect(updateUser(999, { name: "Ghost" })).toBeNull();
  });

  test("U3: Partial update adds new field", () => {
    createUser({ id: 6, name: "David" });
    const updated = updateUser(6, { age: 30 });
    expect(updated.age).toBe(30);
    expect(getUser(6).name).toBe("David"); // existing field unchanged
  });

  // -------------------- DELETE --------------------
  test("D1: Delete existing user successfully", () => {
    createUser({ id: 7, name: "Eve" });
    expect(deleteUser(7)).toBe(true);
    expect(getUser(7)).toBeNull();
  });

  test("D2: Delete non-existent user returns false", () => {
    expect(deleteUser(999)).toBe(false);
  });

  test("D3: Delete same user twice", () => {
    createUser({ id: 8, name: "Frank" });
    expect(deleteUser(8)).toBe(true);
    expect(deleteUser(8)).toBe(false);
  });

  // -------------------- EDGE / MISC --------------------
  test("E1: Reset users empties store", () => {
    createUser({ id: 9, name: "Grace" });
    resetUsers();
    expect(getUser(9)).toBeNull();
  });

  test("E2: Multiple users creation", () => {
    createUser({ id: 10, name: "Hank" });
    createUser({ id: 11, name: "Ivy" });
    expect(getUser(10)).toEqual({ id: 10, name: "Hank" });
    expect(getUser(11)).toEqual({ id: 11, name: "Ivy" });
  });

  test("E3: Invalid type input throws error", () => {
    expect(() => createUser("invalid")).toThrow();
  });

});