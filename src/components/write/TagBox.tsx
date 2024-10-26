import '../../styles/board/TagBox.scss';
import React from 'react';

const TagBox = () => {
  return (
    <div className={`tag-box-block`}>
      <h4>태그</h4>
      <form className={`tag-form`}>
        <input placeholder={`태그를 입력하세요`} />
        <button type={`submit`}>추가</button>
      </form>
      <TagList tags={[{tag: '태그1'}, {tag: '태그2'}, {tag: 'tag3'}]}/>
    </div>
  );
};

const TagList: React.FC<TagListProps> = ({tags}) => {
  return (
    <div className={`tag-list`}>
      {tags.map(item => (
        <TagItem key={item.tag} tag={item.tag} />
      ))}
    </div>
  );
};

const TagItem: React.FC<TagItemProps> = ({ tag }) => {
  return (
    <div className={`tag`}>#{tag}</div>
  );
};

type TagListProps = {
  tags: TagItemProps[]
}

type TagItemProps = {
  tag: string;
};

export default TagBox;