export function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        <div>◀️</div>
      </button>
      <div>
        {page} of {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>▶️</div>
      </button>
    </div>
  );
}
