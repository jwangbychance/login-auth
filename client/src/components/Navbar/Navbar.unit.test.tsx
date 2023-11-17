import { describe, vi, it, expect } from "vitest";
import Navbar from "./Navbar";
import { render } from "@testing-library/react";

describe("Navbar", () => {
  it("should render", () => {
    const { queryAllByText } = render(<Navbar />);
    expect(queryAllByText("Login Auth")).not.toBeNull();
  });

  it("should render nav with logged in user", () => {
    const user = {
      username: "username",
      member: false,
    };
    const { queryByText } = render(<Navbar user={user} />);
    expect(queryByText("Profile")).not.toBeNull();
  });

  it("should render become member button if user is not member", () => {
    const user = {
      username: "username",
      member: true,
    };
    const { queryByText } = render(<Navbar user={user} />);
    expect(queryByText("Become a member!")).not.toBeNull();
  });
});
