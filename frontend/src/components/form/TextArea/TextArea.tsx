'use client';

import {Textarea as FBTextarea, Label} from 'flowbite-react';
import React from 'react';

interface TextAreaProps {
  name: string;
  value: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  onChange: (s: string) => void;
  rows?: number;
}

function TextArea({name, value, label, placeholder, onChange, required, rows}: TextAreaProps) {
  return (
    <div className="mb-2 block">
      <Label htmlFor={name}> {label}</Label>
      <FBTextarea
        id={name}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder ?? ''}
        required={required ?? false}
        shadow
        rows={rows ?? 4}

        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

export default TextArea;