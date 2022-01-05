import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Nav from '../Main/Nav';
import { loginAccess } from '../Login/LocalStorage';

// Types
interface FileData {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

const Upload = () => {
  const dispatch = useDispatch();
  const loginChk = useSelector((state: RootState) => state.user.value);
  const [file, setFile] = useState<FileData | null>(null);
  const [fileName, setFileName] = useState('이미지 파일을 업로드 해주세요.');

  const handleImageSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const imageFile = event.target.files[0];
      setFile(imageFile);
      setFileName(imageFile.name);
    }
  };

  useEffect(() => {
    //login
    loginAccess(dispatch, loginChk);
  }, []);

  return (
    <>
      <Nav />

      <>
        <label htmlFor="image">{fileName}</label>
        <input id="image" type={'file'} onChange={handleImageSelectChange} />
        <button type={'submit'}>제출</button>
      </>
    </>
  );
};

export default Upload;
