import { useRef, useState, type ChangeEvent } from 'react';

interface Props {
  name: string;
  label: string;
  onGetFile: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<Props> = ({ name, label, onGetFile }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

  const activeInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
    onGetFile(e);
  };

  return (
    <div className="file-input">
      <input type="file" name={name} ref={inputRef} onChange={onFileChange} style={{ display: 'none' }} />
      <div className="file-input-content">
        <input type="text" disabled value={fileName} onChange={activeInput} />
        <button onClick={activeInput}>Upload</button>
      </div>
    </div>
  );
};

export default FileInput;
