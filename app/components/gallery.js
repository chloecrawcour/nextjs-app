const Gallery = () => {
  // array of regions 
  const regions = [
    { name: "Sydney", location: "New South Wales", imgSrc: "http://placehold.it/760x670" },
    { name: "Melbourne", location: "Victoria", imgSrc: "http://placehold.it/760x670" },
    { name: "Brisbane", location: "Queensland", imgSrc: "http://placehold.it/760x670" },
    { name: "Perth", location: "Western Australia", imgSrc: "http://placehold.it/760x670" },
    { name: "Adelaide", location: "South Australia", imgSrc: "http://placehold.it/760x670" },
    { name: "Hobart", location: "Tasmania", imgSrc: "http://placehold.it/760x670" },
  ];

  return (
    <div className="grid-style1 clearfix">
      {/* structure for displaying items */}
      <div className="row">
        {regions.map((region, index) => (
          <div className="item col-md-4" key={index}>
            <div className="image">
              <a href="#">
                <h3>{region.name}</h3> 
                <span className="location">{region.location}</span>
              </a>
              <img src={region.imgSrc} alt={region.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
  