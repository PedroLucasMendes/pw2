'use client';

import { useState, } from 'react';
import { FormEvent } from 'react';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';

import productSchema from '../Product.schema';

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
  const [errors, setErrors] = useState<Record<string,string>>({})
  
  const randomNumber = Math.random()*100
  const randomNumberRef = useRef<Number>(Math.random()*100)
  
  console.log(randomNumber)
  console.log(randomNumberRef)




  const handleSubmit = (e: FormEvent) => {

    e.preventDefault();
    const product: CreateProductDto = {
        name,
        price,
        stock,
        description
    };

    const { error } = productSchema.validate(product, {abortEarly: false})

    if(error){
      const errorsDetails: Record<string,string> = {}
      console.log(error.details)
      for (const errorDetail of error.details){
        errorsDetails[errorDetail.path[0]] = errorDetail.message

      }
      setErrors(errorsDetails)
    }else{
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
  }
    
};

  return (
    <>
      <h1 className="text-2xl font-bold">Criar produto</h1>
      <form method="post" onSubmit={handleSubmit} className='flex'>
        <TextInput 
         value={name} 
         onChange={setName} 
         error ={errors['name']}
         name="name" 
         label="Nome" 
         focus
        />
        <TextInput 
         value={price} 
         onChange={setPrice} 
         name="price" 
         label="Preço" 
         error = {errors['price']}
         
        />
        <NumberInput 
         value={stock} 
         onChange={setStock} 
         name="stock" 
         label="Estoque" 
         error = {errors['stock']}
         
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

