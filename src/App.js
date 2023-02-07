import React from 'react';
import './style.scss';

function Input({
  label,
  style = {},
  leftIconClick = () => {},
  rightIconClick = () => {},
  ...params
}) {
  const id = React.useId();
  return (
    <div className="input-container" style={style}>
      <div className="left-icon" onClick={leftIconClick}></div>
      <div className="right-icon" onClick={rightIconClick}></div>
      <input id={id} {...{ ...params, placeholder: 'empty' }} />
      <label for={id}>{label}</label>
    </div>
  );
}

export default function App() {
  const [val, setVal] = React.useState('');
  return (
    <div class="preview">
      <Input label="Default" />
      <Input label="Disabled" disabled />
      <Input label="Email" type="email" />
      <Input label="Email invalid prefill" type="email" value="asd" />
      <Input
        label="Search"
        type="text"
        style={{
          '--l-icon-size': '20px',
          '--r-icon-size': '16px',
          '--icon-space': '4px',
          '--left-icon': "url('/icons/search.svg')",
          '--right-icon': "url('/icons/cross.svg')",
        }}
        rightIconClick={() => {
          setVal('');
        }}
        leftIconClick={() => {}}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Input
        label="Search"
        type="text"
        style={{
          '--r-icon-size': '16px',
          '--right-icon': "url('/icons/cross.svg')",
        }}
      />
    </div>
  );
}
