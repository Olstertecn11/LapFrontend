

const Container = ({ Component }) => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-4 hidden-md-down">
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8">
          <Component />
        </div>
      </div>
    </div>
  )
}

export default Container;
