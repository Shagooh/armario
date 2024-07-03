const Carousel = () => {
  return (
    <div style={{ width: '100%', padding: "100px" }}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ width: '1000px', margin: '0 auto' }}>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="imgs/Banner2.png"
              className="d-block"
              alt="..."
              style={{ width: "1000px", height: "400px"}} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="imgs/Banner1.png" 
              className="d-block" 
              alt="..."  
              style={{ width: "1000px", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img 
              src="imgs/Banner3.png" 
              className="d-block" 
              alt="..." 
              style={{ width: "1000px", height: "400px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;