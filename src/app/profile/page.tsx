import UserProfile from '@/components/profile/UserProfile';
import { getUsersById } from '@/lib/api/users/getter';

export default async function Profile() {
  const user = await getUsersById();

  return (
    <div>
      <h2 className="bg-green-200 p-5">Profile</h2>

      <div className="sm:col-span-3">
        <UserProfile name={user.name} email={user.email} />
      </div>
    </div>
  );
}
