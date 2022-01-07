import express, { Request, Response } from 'express';
const app = express();

//multer
const multer = require('multer');
const { v4: uuid } = require('uuid');
const mime = require('mime-types');

//multer option
const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, 'uploads/');
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    cb(null, `${uuid()}.${mime.extension(file.mimetype)}`);
  },
});

const imageFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: (error: Error | null, arg: boolean) => void
) => {
  if (['image/png', 'image/jpeg'].includes(file.mimetype)) cb(null, true);
  else cb(new Error('invalid file type'), false);
};

const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: { fileSize: 1024 * 512 },
});

interface MulterRequest extends Request {
  file: any;
}

//client 업로드 이미지 조회
app.use('/uploads', express.static('upload'));

app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
  console.log((req as MulterRequest).file);
  res.json((req as MulterRequest).file);
});

app.get('/', (req: Request, res: Response) => {
  res.send('running------');
});

app.listen('5000', () => {
  console.log(`
    Server listening on port: 5000
`);
});
