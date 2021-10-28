import React, { FC, useState } from 'react';

const TestFormPage: FC = () => {
  const [text, setText] = useState('');

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;

    setText(value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  return (
    <div>
      <h1>Test Form Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Input"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestFormPage;
