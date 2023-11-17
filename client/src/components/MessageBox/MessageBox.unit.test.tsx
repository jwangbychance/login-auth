import { describe, vi, it, expect } from "vitest";
import MessageBox from "./MessageBox";
import { render } from "@testing-library/react";

describe("MessageBox", () => {
  it("should render member messages", () => {
    const { getByTestId } = render(<MessageBox memberStatus={true} />);
    expect(getByTestId("member-messages")).not.toBeNull();
  });

  it("should not render member messages", () => {
    const { getByTestId } = render(<MessageBox memberStatus={false} />);
    expect(getByTestId("guest-messages")).not.toBeNull();
  });
});
