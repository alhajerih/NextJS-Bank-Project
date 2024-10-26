"use server";

import { redirect } from "next/navigation";
import { baseUrl, getHeaders } from "./config";
import { deleteToken, setToken } from "@/lib/token";

export async function login(username, password) {
  const userData = Object.fromEntries(username, password);
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });
  const { token } = await response.json();

  await setToken(token);
  console.log(token);

  redirect("/");
}

export async function register(formData) {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.token) {
    await setToken(data.token);
    console.log(data.token);
    redirect(`/login`);
  } else {
    console.log("Registration failed:", data);
  }
}

export async function logout() {
  await deleteToken();
  redirect(`/`);
}

export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/auth/users`, {
    method: "GET",
    headers: await getHeaders(),
  });

  const users = await response.json();
  return users;
}
export async function getUserById(userId) {
  const response = await fetch(`${baseUrl}/auth/user/${userId}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return await response.json();
}

export async function getProfile() {
  const response = await fetch(`${baseUrl}/auth/me`, {
    method: "GET",
    headers: await getHeaders(),
  });

  const data = await response.json();

  return data;
}

export async function updateProfile(image) {
  const formData = new FormData();
  formData.append("image", image);

  const headers = await getHeaders();
  // Remove Content-Type to let fetch set it for FormData
  headers.delete("Content-Type");

  const response = await fetch(`${baseUrl}/auth/profile`, {
    method: "PUT",
    headers,
    body: formData,
  });

  const updatedUser = await response.json();
  return updatedUser;
}
