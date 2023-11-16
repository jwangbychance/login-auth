import { afterEach, describe, expect, test, vi, it } from "vitest";
import { signupUser, loginUser, getUser, joinMemberSociety } from "./users";
import axios from "axios";
import "dotenv/config.js";

describe("users api call tests", async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("register user", () => {
    const axiosPostSpy = vi.spyOn(axios, "post");

    it("should register a user", async () => {
      await signupUser("username", "password");
      expect(axiosPostSpy).toHaveBeenCalledWith("/api/sign-up", {
        username: "username",
        password: "password",
      });
    });
  });

  describe("login user", () => {
    const axiosPostSpy = vi.spyOn(axios, "post");

    it("should login a user", async () => {
      await loginUser("username", "password");
      expect(axiosPostSpy).toHaveBeenCalledWith("/api/log-in", {
        username: "username",
        password: "password",
      });
    });
  });

  describe("get user", () => {
    const axiosGetSpy = vi.spyOn(axios, "get");

    it("should get a user", async () => {
      await getUser();
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/user");
    });

    it("should return status and user details", async () => {
      const { status, userDetails } = await getUser();
      expect(status).toEqual(200);
      expect(userDetails).toEqual({ username: "username", member: false });
    });
  });

  describe("user joins member society", () => {
    const axiosPutSpy = vi.spyOn(axios, "put");

    it("should update user to member", async () => {
      await joinMemberSociety("username", "some-member-key");
      expect(axiosPutSpy).toHaveBeenCalledWith("/api/become-member", {
        username: "username",
        memberKey: "some-member-key",
      });
    });
  });
});
