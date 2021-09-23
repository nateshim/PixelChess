function Move(props) {
  return (
    <div className="Move">
      <p>From: {props.move.from}</p>
      <p>To: {props.move.to}</p>
    </div>
  );
};

export default Move;