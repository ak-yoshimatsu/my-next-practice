import { UserProps } from "@/types/users";

export async function getUsersById(id: number = 1) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const result: UserProps = await res.json();
  return result;
}
