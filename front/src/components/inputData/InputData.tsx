interface IDataInput {
  title: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputData: React.FC<IDataInput> = ({ title, name, type, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name} className="input-group-label">
        {title}
      </label>
      <input autoComplete="off" onChange={onChange} id={name} name={name} type={type} className="input-group-input" />
    </div>
  );
};

export default InputData;
