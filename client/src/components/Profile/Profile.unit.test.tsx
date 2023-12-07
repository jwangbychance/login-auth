import { describe, vi, it, expect } from "vitest";
import Profile from "./Profile";
import { render } from "@testing-library/react";

describe("Profile", () => {
  it("should render profile card with member status", () => {
    const user = {
      username: "username",
      member: true,
    };
    const { queryByText } = render(<Profile user={user} />);
    expect(queryByText("Member status: Member"));
  });

  it("should render profile card with guest status", () => {
    const user = {
      username: "username",
      member: false,
    };
    const { queryByText } = render(<Profile user={user} />);
    expect(queryByText("Member status: Guest"));
  });
});
