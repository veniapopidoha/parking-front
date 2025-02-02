import { useSelector } from 'react-redux';
import {
  DropDown,
  Instructions,
  InstructionsWrap,
  PencilIcon,
  Image,
  InstructionsText,
  TextArea,
  Button,
  Status,
} from './style';
import Pencil from '../../../../images/pencil.svg';
import bgImg from '../../../../images/bg4.png';
import { Checkbox } from './Components/Checkbox';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { backLink } from '../../../../App';

export const EditUser = ({ building }) => {
  const user = useSelector((state) => state);
  const [isToEdit, setIsToEdit] = useState(false);
  const [value, setValue] = useState(localStorage.getItem('instructions'));
  const [isSubmited, setIsSubmited] = useState(false);

  const ChangeInstruction = () => {
    if (value !== '' && value !== null && !!building.name !== false) {
      localStorage.setItem('instructions', value);
      axios
        .patch(`${backLink}/building-instructions`, {
          buildingName: building.name,
          instructions: localStorage.getItem('instructions') || value,
        })
        .then((res) => {
          setValue(res.data.instructions);
          setIsSubmited(!isSubmited);
        });
    }
  };

  return (
    <>
      <div>
        {user.status === 'manager' && building.name && (
          <DropDown>
            <Checkbox
              text={'See reports'}
              value={'reports'}
              building={building}
            />
            <Checkbox
              text={'See patrol reports'}
              value={'patrols'}
              building={building}
            />
            <Checkbox
              text={'Edit instructions'}
              value={'edit'}
              building={building}
            />
            <Status>Notifications</Status>
            <Checkbox
              text={'Patrols notification'}
              value={'patrol-notif'}
              building={building}
            />
            <Checkbox
              text={'Instractions for Manager'}
              value={'instruct-for-manage'}
              building={building}
            />
            <Checkbox
              text={'Instractions for Client'}
              value={'instruct-for-client'}
              building={building}
            />
            <Checkbox
              text={'Limit Notification'}
              value={'limit-notif'}
              building={building}
            />
            <Checkbox
              text={'New visitor'}
              value={'visitor-notif'}
              building={building}
            />
          </DropDown>
        )}
        <Instructions>
          <InstructionsWrap>
            <InstructionsText>Employee Instructions</InstructionsText>
            {user.status === 'manager' && (
              <PencilIcon src={Pencil} onClick={() => setIsToEdit(!isToEdit)} />
            )}
            {user.status === 'client' && building.instructionsAllowed && (
              <PencilIcon src={Pencil} onClick={() => setIsToEdit(!isToEdit)} />
            )}
          </InstructionsWrap>
          {isToEdit ? (
            <>
              <TextAreaComponent value={value} setValue={setValue} />
              <Button
                onClick={() => {
                  ChangeInstruction();
                  setIsToEdit(false);
                }}
              >
                Edit
              </Button>
            </>
          ) : (
            <InstructionsText style={{ lineHeight: '24px' }}>
              {user.status === 'employee'
                ? building.residentInstructions
                : value || building.instructions}
            </InstructionsText>
          )}
        </Instructions>
      </div>
      <Image src={bgImg} alt='bg' />
    </>
  );
};

export const TextAreaComponent = ({ value, setValue }) => {
  return (
    <TextArea
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></TextArea>
  );
};
