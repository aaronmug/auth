import axios from "axios";

const API_KEY = "AIzaSyBNU-7PvIyxarYHPkqRR4yynK3Ll0_ltUA";
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export async function createUser(email, password) {
  const response = await axios.post(URL, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}
