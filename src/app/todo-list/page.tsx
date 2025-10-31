import { UserButton } from "@/domains/identity/account/components/button/user-button";
import { getUser } from "@/domains/identity/helpers/get-user";

export default async function TodoListPage() {
  const authResult = await getUser();

  if (authResult.isErr()) {
    throw new Error(authResult.error.message);
  }

  const user = authResult.value;

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <UserButton className="fixed top-4 right-4 z-50" />
    </div>
  );
}
