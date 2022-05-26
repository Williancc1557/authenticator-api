import { CreateUserService } from "./create.service";

describe("CreateUserService", () => {
  test("Test generatedconfirmationToken function", () => {
    const confirmationToken = new CreateUserService().generateconfirmationToken();

    expect(String(confirmationToken).length).toBe(4);
    expect(typeof confirmationToken).toBe("number");
  });
});
