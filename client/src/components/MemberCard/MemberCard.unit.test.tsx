import { describe, vi, it, expect } from "vitest";
import MemberCard from "./MemberCard";
import { fireEvent, getByText, render } from "@testing-library/react";

describe("MemberCard", () => {
  it("should render member card", () => {
    const { queryAllByText } = render(<MemberCard username="username" />);
    expect(queryAllByText("member key"));
  });

  it("should render with error message when incorrect member key is entered", () => {
    const { queryByText, getByTestId } = render(
      <MemberCard username="username" />
    );
    const memberKeyInput = getByTestId("member-key-input");
    const joinMemberBtn = getByTestId("join-member-btn");
    fireEvent.change(memberKeyInput, {
      target: { value: "some-random-member-key" },
    });
    fireEvent.click(joinMemberBtn);
    expect(
      queryByText("Incorrect member key. Please enter the correct member key.")
    );
  });
});
