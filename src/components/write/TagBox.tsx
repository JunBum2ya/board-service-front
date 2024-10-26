import '../../styles/board/TagBox.scss';
import React, { ChangeEvent, FormEvent, FormEventHandler, useCallback, useState } from 'react';

const TagBox = () => {

  const [input, setInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const insertTag = useCallback((tag: string) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  }, [tags]);

  const onRemove = useCallback((tag: string) => {
    setTags(tags.filter(t => t !== tag));
  }, [tags]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    insertTag(input.trim());
    setInput('');
  }, [insertTag, input]);

  return (
    <div className={`tag-box-block`}>
      <h4>태그</h4>
      <form className={`tag-form`} onSubmit={onSubmit}>
        <input placeholder={`태그를 입력하세요`} value={input} onChange={onChange} />
        <button type={`submit`}>추가</button>
      </form>
      <TagList tags={tags} onRemove={onRemove} />
    </div>
  );
};

const TagList: React.FC<TagListProps> = ({ tags, onRemove }) => {
  return (
    <div className={`tag-list`}>
      {tags.map(tag => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </div>
  );
};

const TagItem: React.FC<TagItemProps> = ({ tag, onRemove }) => {

  const onClick = useCallback(() => {
    onRemove(tag);
  }, [onRemove, tag]);

  return (
    <div className={`tag`} onClick={onClick}>#{tag}</div>
  );
};

type TagListProps = {
  tags: string[];
  onRemove: (tag: string) => void;
}

type TagItemProps = {
  tag: string;
  onRemove: (tag: string) => void;
};

export default TagBox;