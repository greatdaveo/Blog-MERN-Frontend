import React from "react";
import ReactQuill from "react-quill";

const TextEditor = ({ value, onChange }) => {
  // Modules object for setting up the Quill editor

  //   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    imageUpload: true,
  };

  return (
    <>
      <ReactQuill
        value={value}
        module={modules}
        onChange={onChange}
        theme={"snow"}
      />
    </>
  );
};

export default TextEditor;
