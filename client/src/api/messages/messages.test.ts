import { afterEach, describe, expect, test, vi, it } from "vitest";
import { createMessage, viewMessages } from "./messages";
import axios from "axios";

describe("messages api call tests", async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("create message", () => {
    const axiosPostSpy = vi.spyOn(axios, "post");

    it("should create a message", async () => {
      await createMessage(
        "username",
        "content",
        "Sun Nov 12 2023 22:13:20 GMT+1100 (Australian Eastern Daylight Time)"
      );
      expect(axiosPostSpy).toHaveBeenCalledWith("/api/create-message", {
        username: "username",
        content: "content",
        date: "Sun Nov 12 2023 22:13:20 GMT+1100 (Australian Eastern Daylight Time)",
      });
    });
  });
});
