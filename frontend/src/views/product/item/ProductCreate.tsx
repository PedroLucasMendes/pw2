'use client';

import { useState } from 'react';
import { FormEvent } from 'react';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import TextInput from '@/components/form/TextInput/TextInput';
import NumberInput from '@/components/form/NumberInput/NumberInput';
import TextArea from '@/components/form/TextArea/TextArea';
import { CreateProductDto } from '../Product.types';

function ProductCreate() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState("0.00")
  const [stock, setStock] = useState(0)
  const [description, setDescription] = useState("")
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const product: CreateProductDto = {
        name,
        price,
        stock,
        description
    };
    fetch(`${process.env.NEXT_PUBLIC_API}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then((res => res.json()))
    .then(() => {
        router.push("/")
        console.log('Produto criado com sucesso');
    })
    .catch((error) => {
        console.error('Erro ao criar produto:', error);
    });

    console.log('Produto criado:', product);
    setName('');
    setPrice('0.00');
    setStock(0);
    setDescription('');
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Criar produto</h1>
      <form method="post" onSubmit={handleSubmit} className='flex'>
        <TextInput 
         value={name} 
         onChange={setName} 
         name="name" 
         label="Nome" 
         required
        />
        <TextInput 
         value={price} 
         onChange={setPrice} 
         name="price" 
         label="Preço" 
         required
        />
        <NumberInput 
         value={stock} 
         onChange={setStock} 
         name="stock" 
         label="Estoque" 
         required
        />
        <TextArea 
         value={description} 
         onChange={setDescription} 
         name="description" 
         label="Descrição" 
         rows={6}
        />
        <button 
         type="submit" 
         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Criar Produto
        </button>
      </form>

    </>
  );
}

export default ProductCreate;

