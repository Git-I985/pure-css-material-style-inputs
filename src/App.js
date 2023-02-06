import React from 'react';
import './style.scss';

function Input({ label, ...params }) {
  return (
    <div class="input-container">
      <input {...{ ...params, placeholder: 'empty' }} />
      <label>{label}</label>
    </div>
  );
}

export default function App() {
  return (
    <div class="preview">
      <Input label="Default" />
      <Input label="Disabled" disabled />
      <Input label="Email" type="email" />
    </div>
  );
}
