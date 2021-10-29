import { FC, useEffect, useRef, useState } from 'react';
import { Prompt, useHistory, useLocation } from 'react-router';
import { Location, Action } from 'history';
// interfaces
import { PreventNavigationPromptProps } from './PreventNavigationPrompt.interface';
// styles
import {
  ModalContainer,
  Modal,
  ModalBackground,
  ControlsContainer,
  Button,
} from './PreventNavigationPrompt.styled';

function isSameRoute(prevRoute: Location, nextRoute: Location) {
  if (prevRoute.pathname !== nextRoute.pathname) {
    return false;
  }

  if (prevRoute.search !== nextRoute.search) {
    return false;
  }

  if (JSON.stringify(prevRoute.state) !== JSON.stringify(nextRoute.state)) {
    return false;
  }

  return true;
}

const PreventNavigationPrompt: FC<PreventNavigationPromptProps> = (props) => {
  const { when } = props;

  const history = useHistory();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const nextLocation = useRef<Location>();
  const nextAction = useRef<Action>();
  const [isNavigationAllowed, setIsNavigationAllowed] = useState(false);

  const handleNavigationAway = (
    location: Location<unknown>,
    action: Action
  ): string | boolean => {
    if (!isNavigationAllowed) {
      setIsModalOpen(true);
      nextLocation.current = location;
      nextAction.current = action;

      return false;
    }

    return true;
  };

  const handleNavigate = () => {
    setIsNavigationAllowed(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isNavigationAllowed) {
      return;
    }
    if (!nextLocation.current) {
      console.error('Something wrong with the next location!');

      return;
    }

    if (isSameRoute(location, nextLocation.current)) {
      setIsModalOpen(false);
      setIsNavigationAllowed(false);

      return;
    }

    switch (nextAction.current) {
      case 'PUSH': {
        history.push(nextLocation.current!);
        break;
      }
      case 'REPLACE': {
        history.replace(nextLocation.current!);
        break;
      }
      case 'POP': {
        history.goBack();
        break;
      }
      default:
        break;
    }
  }, [isNavigationAllowed, history, location]);

  useEffect(() => {
    if (!when) {
      return;
    }

    const handleUnload = function (ev: BeforeUnloadEvent) {
      ev.preventDefault();

      ev.returnValue = '';
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [when]);

  return (
    <>
      <Prompt when={when} message={handleNavigationAway} />
      <ModalContainer $show={isModalOpen}>
        <ModalBackground onClick={closeModal} />
        <Modal>
          <h1>Do you want to leave page?</h1>

          <ControlsContainer>
            <Button onClick={handleNavigate}>Yes</Button>
            <Button onClick={closeModal}>No</Button>
          </ControlsContainer>
        </Modal>
      </ModalContainer>
    </>
  );
};

export default PreventNavigationPrompt;
