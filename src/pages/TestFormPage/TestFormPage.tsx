import React, { FC, useState } from 'react';
import { Prompt } from 'react-router';

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
      <Prompt
        when={!!text}
        message={(location) =>
          `You are going away from page ${location.pathname}. All the data in the form would be destroyed! Do you still want to go?`
        }
      />
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
