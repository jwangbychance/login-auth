import { describe, vi, it, expect } from "vitest";
import SideProfile from "./SideProfile";
import { render } from "@testing-library/react";

describe("SideProfile", () => {
  it("should render", () => {
    const { queryAllByText } = render(<SideProfile />);
    expect(queryAllByText("Status: Online"));
  });
});
