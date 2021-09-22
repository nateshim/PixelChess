import NewPuzzleFormInput from './NewPuzzleFormInput';

export default function NewPuzzleForm(props) {

  return (
    <form className="NewPuzzleForm" onSubmit={props.handleSubmit}>
      <NewPuzzleFormInput
        id="name"
        type="text"
        title="Name"
        state={props.info.name}
        setState={props.info.setName}
        hasError={props.info.hasNameError}
        errorMessage="name must be 1-12 characters in length"
        />
      <NewPuzzleFormInput
        id="author"
        type="text"
        title="Author"
        state={props.info.author}
        setState={props.info.setAuthor}
        hasError={props.info.hasAuthorError}
        errorMessage="author must be 1-12 characters in length"
        />
      <NewPuzzleFormInput
        id="initialBoard"
        type="text"
        title="Initial Board (FEN)"
        state={props.info.initialBoard}
        setState={props.info.setInitialBoard}
        hasError={props.info.hasInitialBoardError}
        errorMessage="invalid board"
        />
      <NewPuzzleFormInput
        id="numMoves"
        type="number"
        title="Number of Moves"
        state={props.info.numMoves}
        setState={props.info.setNumMoves}
        hasError={props.info.hasNumMovesError}
        errorMessage="please provide a value"
        />
      <NewPuzzleFormInput
        id="moves"
        type="text"
        title="Moves (SAN)"
        state={props.info.moves}
        setState={props.info.setMoves}
        hasError={props.info.hasMovesError}
        errorMessage="incorrect format. make sure that there are no spaces or commmas in between moves"
        />
      {props.isInvalidPuzzle ? <div className="ErrorMessage">Invalid Puzzle</div> : <div></div>}
      <button type="submit">Publish Puzzle!</button>
    </form>
  );
};