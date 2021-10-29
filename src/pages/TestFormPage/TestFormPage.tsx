import React, { FC, useState } from 'react';
import { Prompt, useHistory } from 'react-router';
// styles
import { Modal, ModalContainer } from './TestFormPage.styled';

const TestFormPage: FC = () => {
  const history = useHistory();

  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;

    setText(value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  console.log('showModal', showModal);

  return (
    <div>
      <Prompt
        when={!!text}
        message={(location, action) => {
          const message = `You are going away from page ${location.pathname}. All the data in the form would be destroyed! Do you still want to go?`;

          setShowModal(true);

          return false;
        }}
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

      <ModalContainer
        style={{
          display: showModal ? 'flex' : 'none',
        }}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <Modal onClick={(ev: any) => ev.stopPropagation()}>
          <h1>Do you want to leave page?</h1>

          <button onClick={() => {}}>Yes</button>
          <button
            onClick={(ev: any) => {
              ev.stopPropagation();

              setShowModal(false);
            }}
          >
            No
          </button>
        </Modal>
      </ModalContainer>
    </div>
  );
};

export default TestFormPage;
