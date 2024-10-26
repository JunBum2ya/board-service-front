import Button from '../Button';
import '../../styles/board/WriteActionButtons.scss';

const WriteActionButtons = () => {
  return (
    <div className={`write-action-buttons-block`}>
      <Button style={{backgroundColor: '#22b8cf'}}>포스트 등록</Button>
      <Button>취소</Button>
    </div>
  );
};

export default WriteActionButtons;