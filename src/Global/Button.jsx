function Button({ classNm, children, handleClick }) {
  return (
    <button className={`${classNm} px-6 py-2 rounded-md`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
