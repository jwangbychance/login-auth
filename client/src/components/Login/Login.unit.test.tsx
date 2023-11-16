import { describe, vi, it, expect } from "vitest";
import Login from "./Login";
import { fireEvent, getByText, render } from "@testing-library/react";

describe("Login", () => {
  const setShowLogin = vi.fn();

  it("should render login form", () => {
    const { queryAllByText } = render(
      <Login showLogin={true} setShowLogin={setShowLogin} />
    );
    expect(queryAllByText("username")).not.toBeNull();
    expect(queryAllByText("password")).not.toBeNull();
  });

  it("should update the component state when the username changes", () => {
    const { getByTestId } = render(
      <Login showLogin={true} setShowLogin={setShowLogin} />
    );
    const usernameInput = getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "username" } });
    expect(usernameInput.getAttribute("value")).toBe("username");
  });

  it("should render with error message when trying to login with incorrect username/password", () => {
    const { queryByText, getByTestId } = render(
      <Login showLogin={true} setShowLogin={setShowLogin} />
    );
    const usernameInput = getByTestId("username-input");
    const passwordInput = getByTestId("password-input");
    const loginBtn = getByTestId("login-button");
    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(loginBtn);
    expect(queryByText("Incorrect username or password. Please try again."));
  });
});
