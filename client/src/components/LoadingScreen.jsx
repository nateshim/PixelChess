function LoadingScreen(props) {
  return (
    <div>
      {props.isLoading ?
        <div className="Loading">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        :
        <div>
        {props.children}
        </div>
      }
    </div>
  )
};

export default LoadingScreen;