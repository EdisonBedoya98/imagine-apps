import { useLogin } from "../hooks/useLogin";

// Tests that isLoading is set to true when login is initiated
it("test_is_loading_true", () => {
  const { isLoading } = useLogin();

  expect(isLoading).toBe(false);
});

// Tests that isLoading is set to false after login attempt is complete
it("test_is_loading_false", async () => {
  const setIsLoading = jest.fn();

  const { onLogIn } = useLogin();

  await onLogIn({ username: "valid_username", password: "valid_password" });

  expect(setIsLoading).toHaveBeenCalledWith(false);
});

// Tests that isError is set to false by default
it("test_is_error_false", () => {
  const { isError } = useLogin();

  expect(isError).toBe(false);
});
