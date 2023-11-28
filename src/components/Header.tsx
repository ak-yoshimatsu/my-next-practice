import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-sky-500 text-white text-2xl p-5">
      <h1>
        <Link href="/">Photos List</Link>
      </h1>
    </header>
  );
};

export default Header;
