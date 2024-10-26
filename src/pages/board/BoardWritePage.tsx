import Editor from '../../components/write/Editor';
import TagBox from '../../components/write/TagBox';
import Responsive from '../../components/Responsive';

const BoardWritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
};

export default BoardWritePage;