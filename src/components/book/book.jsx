import "./book.css";
export function BookItem(props) {
  return (
    <div
      onClick={props.onClick}
      className="book-item bs-base"
      datamodaltrigger="modal-book-2"
    >
      <div className="book-cover">
        <div className="effect"></div>
        <div className="light"></div>
        <img className="cover lazyload entered loaded" src={props.img} alt="" />
      </div>
      <div className="book-inside"></div>
    </div>
  );
}
