"use server";
import { cookies } from "next/headers";

export async function updateCookies() {
  "use server";
  // The random string represents the jwt-token
  cookies().set("accessToken", Math.random().toString(36).substring(2, 22));
}
