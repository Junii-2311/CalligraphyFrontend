import artistPortrait from '../assets/Rafat_Hussain.jpg';

const AboutIntro = () => {
    return (
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <img 
                src={artistPortrait} 
                alt="The Artist"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 fw-bold mb-4">About the Artist</h2>
              <p className="lead mb-4">
                With over a decade of experience, I specialize in transforming words into 
                visual poetry. My work blends traditional techniques with contemporary 
                aesthetics, creating pieces that resonate with emotion and elegance.
              </p>
              <div className="d-flex align-items-center">
                <button className="btn btn-warning me-3 px-4">
                  Read Full Bio
                </button>
                <span className="text-muted">10+ years of experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutIntro;