import { describe, vi, it, expect } from "vitest";
import UserContent from "./UserContent";
import { fireEvent, getByText, render } from "@testing-library/react";

describe("UserContent", () => {
  it("should render", () => {
    const user = {
      username: "username",
      member: true,
    };
    const { queryAllByText } = render(<UserContent user={user} />);
    expect(queryAllByText("Welcome back username!"));
  });

  it("should render messages for members", () => {
    const user = {
      username: "username",
      member: true,
    };
    const { queryAllByText } = render(<UserContent user={user} />);
    expect(queryAllByText("Create a message!"));
  });

  it("should not render messages for members", () => {
    const user = {
      username: "username",
      member: false,
    };
    const { queryAllByText } = render(<UserContent user={user} />);
    expect(queryAllByText("Become a member to unlock these messages!"));
  });
});
