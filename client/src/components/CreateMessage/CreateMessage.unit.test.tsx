import { describe, vi, it, expect } from "vitest";
import CreateMessage from "./CreateMessage";
import { fireEvent, render } from "@testing-library/react";

describe("CreateMessage", () => {
  const setShowCreateMessage = vi.fn();

  it("should render create message form", () => {
    const { queryAllByText } = render(
      <CreateMessage
        showCreateMessage={true}
        setShowCreateMessage={setShowCreateMessage}
        username="username"
      />
    );
    expect(queryAllByText("message")).not.toBeNull();
  });
});
