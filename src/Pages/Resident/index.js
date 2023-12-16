import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { backLink } from '../../App';
import {
  Wrap,
  TopWrap,
  BottomWrap,
  Status,
  TextWrap,
  Leftside,
  ResidentLeft,
} from './style';
import { Button } from '../SignIn/style';
import { Visitors } from './Components/Visitors';
import { FavoriteComboBox } from './Components/FavoriteComboBox';
import { EditName } from '../../Components/EditName';
import { AddVisitor } from './Components/AddVisitor';
import { Instructions, InstructionsText, InstructionsWrap } from '../ManagerPage/Components/EditUser/style';

export const Resident = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [plate, setPlate] = useState('');
  const [colour, setColour] = useState('');
  const [make, setMake] = useState('');
  const [favorite, setFavorite] = useState({});
  const [isAllVisitors, setIsAllVisitors] = useState(false);
  const [visitors, setVisitors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);
  const data = useSelector((state) => state);
  const [numOfReg, setNumOfReg] = useState(data.numberOfRegistration)

  useEffect(() => {
    setPlate(favorite.plate);
    setMake(favorite.make);
    setColour(favorite.colour);
  }, [favorite]);

  useEffect(() => {
    axios
      .get(`${backLink}/${data.id}`)
      .then((res) => {
        setVisitors(res.data.visitors);
        setNumOfReg(res.data.numberOfRegistration)
        dispatch({
          type: 'ADD_VISITOR_DATA',
          payload: {
            ...res.data.visitors,
          },
        });
      })
      .catch((err) => console.log(err));
  }, [isSubmitted]);

  return (
    <>
      <Wrap>
        <TopWrap>
          <Button
            style={{
              marginTop: '0',
              padding: '14px 50px',
              minWidth: '200px',
            }}
            onClick={() => {
              setShow(!show);
            }}
          >
            Add Visitor
          </Button>
          <FavoriteComboBox setFavorite={setFavorite} visitors={visitors} />
        </TopWrap>
        <BottomWrap>
          <ResidentLeft>
            {show && (
              <AddVisitor
                setIsSubmitted={setIsSubmitted}
                isSubmitted={isSubmitted}
              />
            )}
            <Leftside>
              <TextWrap>
                <EditName />
                <Status>{data.status}</Status>
                <p>Number of registration:{numOfReg}</p>
              </TextWrap>
              <Instructions>
                <InstructionsWrap>
                  <InstructionsText>Resident Instructions</InstructionsText>
                </InstructionsWrap>

                <InstructionsText >
                  {data?.residentInstructions}
                </InstructionsText>
              </Instructions>
            </Leftside>
          </ResidentLeft>
          <Visitors
            visitors={visitors}
            isAllVisitors={isAllVisitors}
            setIsAllVisitors={setIsAllVisitors}
            isFavoriteAdded={isFavoriteAdded}
            setIsFavoriteAdded={setIsFavoriteAdded}
          />
        </BottomWrap>
      </Wrap>
    </>
  );
};
