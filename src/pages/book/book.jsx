import React from "react";
// import closeIcon from "../../assets/svg/close.svg";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "./book.css";
import PdfViewer from "../../components/pdf-viewer";
const Book = () => {
  const path = localStorage.getItem("book_path");
  const windowWidth = window.innerWidth;

  return (
    <div className="book_content">
      <PdfViewer file={path} />
    </div>
  );
};

export default Book;
