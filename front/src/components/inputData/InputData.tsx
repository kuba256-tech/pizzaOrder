import { useAppSelector } from '../../app/hooks';
import { selectRegisterError } from '../../sections/users-login-signin/usersSlice';

interface IDataInput {
  title: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputData: React.FC<IDataInput> = ({ title, name, type, onChange }) => {
  const registerError = useAppSelector(selectRegisterError);

  const getFieldError = (fieldName: string) => {
    try {
      return registerError?.errors[fieldName].message;
    } catch (e) {
      return undefined;
    }
  };

  return (
    <div className="input-group">
      <label htmlFor={name} className="input-group-label">
        {title}
      </label>
      <input autoComplete="off" onChange={onChange} id={name} name={name} type={type} className="input-group-input" />
      <span className="helper-text">{getFieldError(name)}</span>
    </div>
  );
};

export default InputData;
