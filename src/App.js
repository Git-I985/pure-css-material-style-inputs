import React from 'react';
import './style.scss';

function Input({ label, ...params }) {
  const id = React.useId();
  return (
    <div class="input-container">
      <input id={id} {...{ ...params, placeholder: 'empty' }} />
      <label for={id}>{label}</label>
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
