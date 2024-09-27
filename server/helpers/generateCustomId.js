import { EMPLOYEE_ID_LENGTH } from '../config/constants';

const generateCustomId = () => {
  const randomIndexLength = EMPLOYEE_ID_LENGTH - 2;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'UI';
  for (let i = 0; i < randomIndexLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

export default generateCustomId
