import { Wrapper } from './ProgressBar.Style';

// Types
type Props = {
  percent: number;
};

const ProgressBar: React.FC<Props> = ({ percent }) => {
  return (
    <>
      <Wrapper>
        <div style={{ width: `${percent}%` }}>{percent}%</div>
      </Wrapper>
    </>
  );
};

export default ProgressBar;
