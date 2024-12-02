const NewsFeed = () => {
    // array of news articles 
    const newsArticles = [
      {
        title: "New Rental Regulations Announced",
        description: "The government has announced new rental regulations effective from next month. Find out how this impacts you.",
        author: "Admin",
        date: "2024-08-08",
        imgSrc: "http://placehold.it/766x515",
        link: "#",
      },
      {
        title: "Top 10 Rental Properties in Sydney",
        description: "Explore our list of the top 10 rental properties in Sydney for the month of August.",
        author: "Admin",
        date: "2024-08-07",
        imgSrc: "http://placehold.it/766x515",
        link: "#",
      },
      {
        title: "Customer Stories: Finding the Perfect Home",
        description: "Read our customer stories about their journey to finding the perfect home through One Ring Rentals.",
        author: "Admin",
        date: "2024-08-06",
        imgSrc: "http://placehold.it/766x515",
        link: "#",
      },
    ];
  
    return (
      <div className="grid-style1 clearfix">
        {/* loop through array to display each article */}
        {newsArticles.map((article, index) => (
          <div className="item col-md-4" key={index}>
            <div className="image">
              <a href={article.link}>
                <span className="btn btn-default">
                  <i className="fa fa-file-o"></i> Read More
                </span>
              </a>
              <img src={article.imgSrc} alt={article.title} />
            </div>

            <div className="tag"><i className="fa fa-file-text"></i></div>
            {/* article information */}
            <div className="info-blog">
              <span className="title">{article.title}</span> 
              <span className="text">{article.description}</span> 
              <span className="meta">
                <span className="author"><i className="fa fa-user"></i> {article.author}</span> 
                <span className="date"><i className="fa fa-clock-o"></i> {article.date}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default NewsFeed;
  