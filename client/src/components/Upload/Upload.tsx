import { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Nav from '../Main/Nav';
import { loginAccess } from '../Login/LocalStorage';
import axios from 'axios';
import { Dropper, Form, Preview, SubmitButton, Title } from './Upload.Style';
import { Wrapper } from '../Login/Login.style';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from './ProgressBar';

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
  const defaultFileName = '이미지 파일을 업로드 해주세요.';
  const [file, setFile] = useState<FileData | null>(null);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState(defaultFileName);
  const [percent, setPercent] = useState(0);

  const handleImageSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const imageFile = event.target.files[0];
      setFile(imageFile);
      setFileName(imageFile.name);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.onload = (e: any) => setImgSrc(e.target.result);
    }
  };

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file as any);
    try {
      const res = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (e) => {
          setPercent(Math.round((100 * e.loaded) / e.total));
        },
      });
      console.log({ res });
      toast.success('업로드 성공!', {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        setPercent(0);
        setFileName(defaultFileName);
        setImgSrc(undefined);
      }, 3000);
    } catch (err) {
      toast.error('업로드 실패...', {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
      setPercent(0);
      setFileName(defaultFileName);
      setImgSrc(undefined);
    }
  };

  useEffect(() => {
    //login
    loginAccess(dispatch, loginChk);
  }, []);

  return (
    <>
      <Nav />
      <Wrapper>
        <Title>UPLOADS</Title>
        <Form onSubmit={handleOnSubmit}>
          <Preview src={imgSrc} className="image-preview" />
          <ProgressBar percent={percent} />
          <Dropper className="image-dropper">
            {fileName}
            <input id="image" accept="image/*" type={'file'} onChange={handleImageSelectChange} />
          </Dropper>
          <SubmitButton type={'submit'}>SUBMIT</SubmitButton>
          <ToastContainer />
        </Form>
      </Wrapper>
    </>
  );
};

export default Upload;
