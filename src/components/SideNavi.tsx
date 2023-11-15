import Link from 'next/link';
import React from 'react';

const SideNavi = () => {
  const navigation = [
    { id: 1, name: 'photos', href: '/' },
    { id: 2, name: 'spa', href: '/spa' },
    { id: 3, name: 'profile', href: '/profile' },
  ];

  return (
    <div className='pl-[20px] bg-sky-100'>
      {navigation.map(({ id, href, name}) => {
        return <Link key={id} href={href} className='ml-5'>{name}</Link>
      })}
    </div>
  );
};

export default SideNavi;