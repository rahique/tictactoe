const Restart = () => {
  return (
    <button
      type="button"
      className="resetBtn"
      onClick={() => {
        window.location.reload();
      }}
    >
      restart game
    </button>
  );
};
export default Restart;
