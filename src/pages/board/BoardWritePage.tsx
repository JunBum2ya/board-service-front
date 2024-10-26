import Editor from '../../components/write/Editor';
import TagBox from '../../components/write/TagBox';
import Responsive from '../../components/Responsive';
import WriteActionButtons from '../../components/write/WriteActionButtons';

const BoardWritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <WriteActionButtons/>
    </Responsive>
  );
};

export default BoardWritePage;