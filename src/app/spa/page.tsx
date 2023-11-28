'use client';

import { getDetailApi, getIndexApi } from '@/lib/api/spa/getter';
import React, { useEffect, useState } from 'react';
import z from 'zod';

const indexApiSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const getIndex = async () => {
  return await getIndexApi();
};

const getDetail = async () => {
  return await getDetailApi(30);
};

const SpaIndex = () => {
  const [value, setValue] = useState<{ id: number; name: string }>({
    id: 0,
    name: '',
  });

  useEffect(() => {
    const res = getIndex();
    res.then((data) => {
      const validate = indexApiSchema.safeParse(data);
      if (!validate.success) {
        throw new Error('apiのレスポンス情報が不正です。');
      }
      setValue({ ...value, ...data });
    });

    // const res1 = getDetail()
    // res1.then(data => {
    //   const validate = indexApiSchema.safeParse(data);
    //   if (!validate.success) {
    //     throw new Error("apiのレスポンス情報が不正です。");
    //   }
    //   // try {
    //   //   indexApiSchema.parse(data)
    //   //   console.log(data);
    //   // } catch (error) {
    //   //   if (error instanceof z.ZodError) {
    //   //     console.error(error.message);
    //   //   }
    //   // }
    // })
  }, [value]);

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
