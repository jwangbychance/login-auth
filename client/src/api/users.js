import axios from "axios";

export const signupUser = async (username, password) => {
  try {
    const { status } = await axios.post("/api/sign-up", {
      username,
      password,
    });
    return { status };
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (username, password) => {
  try {
    const { status } = await axios.post("/api/log-in", {
      username,
      password,
    });
    return { status };
  } catch (err) {
    throw err;
  }
};

export const getUser = async () => {
  try {
    const { status, data } = await axios.get("/api/user");
    return { status, user: data.user };
  } catch (err) {
    throw err;
  }
};

export const logoutUser = async () => {
  try {
    await axios.post("/api/log-out").then((res) => {
      window.location.href = "/";
    });
  } catch (err) {
    throw err;
  }
};
