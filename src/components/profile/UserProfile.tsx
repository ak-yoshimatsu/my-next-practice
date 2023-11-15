'use client';

import { ProfileProps } from '@/types/users';
import { useForm } from 'react-hook-form'

type Props = {
  name: string;
  email: string;
}

export default function UserProfile({ name, email }: Props) {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<ProfileProps>({ mode: 'onBlur', reValidateMode: 'onBlur' });

  const onSubmit = handleSubmit(data => {
    console.log(data, errors);
  });

  return (
    <form onSubmit={onSubmit} onError={(err) => console.log(err)} className='m-5'>
      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
      <div className="my-2">
        <input
          type="text"
          defaultValue={name}
          id="name"
          className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('name', { required: '必須項目です。' })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>

      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
      <div className="my-2">
        <input
          type="text"
          defaultValue={email}
          id="email"
          className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('email', { required: '必須項目です。' })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
      <div className="my-2">
        <input
          type="text"
          id="password"
          className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('password', { required: '必須項目です。', pattern: { value: /^[0-9a-zA-Z]*$/, message: '半角英数字で入力してください' } })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <label htmlFor="passwordConfirm" className="block text-sm font-medium leading-6 text-gray-900">パスワード確認用</label>
      <div className="my-2">
        <input
          type="text"
          id="passwordConfirm"
          className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('passwordConfirm', { required: '必須項目です。', validate: (value) => value === getValues("password") || "パスワードが一致しません" })}
        />
        {errors.passwordConfirm && <p style={{ color: 'red' }}>{errors.passwordConfirm.message}</p>}
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        送信
      </button>
    </form>
  );
}
