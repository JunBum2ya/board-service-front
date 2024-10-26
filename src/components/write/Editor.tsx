import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import '../../styles/components/responsive.scss';
import '../../styles/board/Editor.scss';
import { useEffect, useRef } from 'react';

const Editor = () => {

  const quillElement = useRef<HTMLDivElement>(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if(quillElement.current) {
      // @ts-ignore
      quillInstance.current = new Quill(quillElement.current, {
        theme: 'bubble',
        placeholder: '내용을 작성하세요.',
        modules: {
          toolbar: [
            [{header: 1}, {header: 2}],
            ['bold', 'italic', 'underline','strike'],
            [{list: 'ordered'}, {list: 'bullet'}],
            ['blockquote','code-block','link','image']
          ]
        }
      });
    }
  }, []);

  return (
    <div className={`editor-container`}>
      <div className={`quill-wrapper`}>
        <input className={`title-input`} placeholder={`제목을 입력하세요.`} />
        <div ref={quillElement} />
      </div>
    </div>
  );
};

export default Editor;