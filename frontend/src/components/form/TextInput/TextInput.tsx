'use client';

import {TextInput as FBTextInput, Label} from 'flowbite-react';
import React from 'react';

interface TextInputProps {
  name: string;
  value: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  onChange: (s: string) => void;
}

function TextInput({name, value, label, placeholder, onChange, required}: TextInputProps) {
  return (
    <div className="mb-5">
      <Label htmlFor="email2"> {label}</Label>
      <FBTextInput
        id={name}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder ?? ''}
        required={required ?? false}
        shadow
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

export default TextInput;