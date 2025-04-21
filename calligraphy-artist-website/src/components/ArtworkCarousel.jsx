// No unused imports
import "./ArtworkCarousel.css";
import art1 from "../assets/sample1.jpg";
import art2 from "../assets/sample2.jpg";
import art3 from "../assets/sample3.jpg";
import art4 from "../assets/sample1.jpg";
import art5 from "../assets/sample2.jpg";
import art6 from "../assets/sample3.jpg";

const artworks = [
  { id: 1, title: "Modern Calligraphy", image: art1 },
  { id: 2, title: "Wedding Invitation", image: art2 },
  { id: 3, title: "Arabic Script", image: art3 },
  { id: 4, title: "Ceramic Art", image: art4 },
  { id: 5, title: "Elegant Handwriting", image: art5 },
  { id: 6, title: "Classic Manuscript", image: art6 },
];

const ArtworkCarousel = () => {
  return (
    <section className="carousel-section">
      <h2 className="text-center fw-bold mb-4">Artwork Showcase</h2>
      <div className="carousel-container">
        <div className="carousel-track">
          {[...artworks, ...artworks].map((art, index) => (
            <div className="carousel-card" key={index}>
              <img src={art.image} alt={art.title} />
              <p className="carousel-title">{art.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtworkCarousel;







// import { useEffect, useRef } from "react";
// import "./ArtworkCarousel.css";
// import art1 from "../assets/sample1.jpg";
// import art2 from "../assets/sample2.jpg";
// import art3 from "../assets/sample3.jpg";
// import art4 from "../assets/sample1.jpg";
// import art5 from "../assets/sample2.jpg";
// import art6 from "../assets/sample3.jpg";2
// const artworks = [
//   { id: 1, title: "Modern Calligraphy", image: art1 },
//   { id: 2, title: "Wedding Invitation", image: art2 },
//   { id: 3, title: "Arabic Script", image: art3 },
//   { id: 4, title: "Ceramic Art", image: art4 },
//   { id: 5, title: "Elegant Handwriting", image: art5 },
//   { id: 6, title: "Classic Manuscript", image: art6 },
// ];

// const ArtworkCarousel = () => {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const carouselElement = carouselRef.current;
//     const scrollWidth = carouselElement.scrollWidth / 2;
//     let scrollInterval;

//     const startScrolling = () => {
//       scrollInterval = setInterval(() => {
//         if (carouselRef.current) {
//           carouselRef.current.scrollLeft += 5; // Fixed speed
//           if (carouselRef.current.scrollLeft >= scrollWidth) {
//             carouselRef.current.scrollLeft = 0; // Reset to beginning
//           }
//         }
//       }, 30);
//     };

//     const stopScrolling = () => clearInterval(scrollInterval);

//     startScrolling();
//     carouselElement.addEventListener("mouseenter", stopScrolling);
//     carouselElement.addEventListener("mouseleave", startScrolling);

//     return () => {
//       stopScrolling();
//       if (carouselElement) {
//         carouselElement.removeEventListener("mouseenter", stopScrolling);
//         carouselElement.removeEventListener("mouseleave", startScrolling);
//       }
//     };
//   }, []);

//   return (
//     <section className="carousel-section">
//       <h2 className="text-center fw-bold mb-4">Artwork Showcase</h2>
//       <div className="carousel-container" ref={carouselRef}>
//         <div className="carousel-track">
//           {artworks.concat(artworks).map((art, index) => (
//             <div className="carousel-card" key={index}>
//               <img src={art.image} alt={art.title} />
//               <p className="carousel-title">{art.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArtworkCarousel;