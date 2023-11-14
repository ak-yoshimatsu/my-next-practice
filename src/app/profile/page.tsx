import { getUsersById } from '@/lib/api/users/getter';
import React from 'react';

export default async function Profile() {
  const user = await getUsersById()

  return (
    <div>
      <h2 className='bg-green-200 p-5'>Profile</h2>

      <div className="sm:col-span-3">
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
        <div className="mt-2">
          <input type="text" defaultValue={user.name} name="name" id="name" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div className="mt-2">
          <input type="text" defaultValue={user.email} name="email" id="email" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
    </div>
  );
};
