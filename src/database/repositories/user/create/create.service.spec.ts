import { CreateUserService } from "./create.service";

describe("CreateUserService", () => {
  test("Test generatedKey function", () => {
    const key = new CreateUserService().generateKey();

    expect(String(key).length).toBe(4);
    expect(typeof key).toBe("number");
  });
});
