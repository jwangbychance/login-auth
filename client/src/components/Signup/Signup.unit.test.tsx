import { describe, vi, it, expect } from "vitest";
import Signup from "./Signup";
import { fireEvent, render } from "@testing-library/react";

describe("Signup", () => {
  const setShowSignUp = vi.fn();

  it("should render signup form", () => {
    const { queryAllByText } = render(
      <Signup showSignUp={true} setShowSignUp={setShowSignUp} />
    );
    expect(queryAllByText("Username")).not.toBeNull();
    expect(queryAllByText("Password")).not.toBeNull();
    expect(queryAllByText("Confirm Password")).not.toBeNull();
  });

  it("should update the component state when the username changes", () => {
    const { getByTestId } = render(
      <Signup showSignUp={true} setShowSignUp={setShowSignUp} />
    );
    const usernameInput = getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "username" } });
    expect(usernameInput.getAttribute("value")).toBe("username");
  });

  it("should render with error message when trying to signup with an existing username", () => {
    const { queryByText, getByTestId } = render(
      <Signup showSignUp={true} setShowSignUp={setShowSignUp} />
    );
    const usernameInput = getByTestId("username-input");
    const passwordInput = getByTestId("password-input");
    const confirmPasswordInput = getByTestId("confirm-password-input");
    const signupBtn = getByTestId("signup-button");
    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });
    fireEvent.click(signupBtn);
    expect(
      queryByText(
        "Username already exists. Please login or try another username."
      )
    );
  });
});
