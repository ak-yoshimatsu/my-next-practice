'use client'

import { getDetailApi, getIndexApi } from '@/lib/api/spa/getter';
import React, { useEffect, useState } from 'react';

const getIndex = async () => {
  return await getIndexApi()
}

const getDetail = async () => {
  return await getDetailApi(30)
}

const SpaIndex = () => {
  const [value, setValue] = useState<{ id: number, name: string}>({ id: 0, name: '' })

  useEffect(() => {
    const res = getIndex()
    res.then(data => setValue({...value, ...data}))

    const res1 = getDetail()
    res1.then(data => console.log(data))
  }, [])

  return (
    <div>
      <hr />
      <p>{value.id}</p>
      <p>{value.name}</p>
      <hr />
    </div>
  );
};

export default SpaIndex;