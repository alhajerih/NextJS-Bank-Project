import { getToken } from "@/lib/token";

const baseUrl = `https://react-bank-project.eapi.joincoded.com/mini-project/api`;

async function getHeaders() {
  const headers = new Headers();
  const token = await getToken();

  headers.append(`Content-Type`, `application/json`);
  headers.append("Authorization", `Bearer ${token}`);
  return headers;
}
export { getHeaders, baseUrl };
