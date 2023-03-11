import "./lattestNews.css";
export default function LattestNews() {
  return (
    <div className="flex">
      <div className="flex-column lattest-news--container">
        <div className="lattest-news__header">
          <h1 className="lattest-news--title">Latest News.</h1>
          <h2 className="lattest-news--subTitle">
            checkout some of our news
          </h2>
        </div>
        <div className="lattest-news--wrap">
          {newsData.map(news =>
            <NewsBox
              key={news.title}
              newsData={news}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const NewsBox = (props) => {
  const {
    imageUrl,
    title,
    content,
  } = props.newsData;
  return (
    <div className="flex-column news-box">
      <img src={imageUrl} alt="news_picture" className="news-box__img" />
      <div className="news-box__content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="news-box__content">
        <button className="news-box__btn">
          Read More
      </button>
      </div>
    </div>
  )
}

const newsData = [
  {
    imageUrl: "../../assets/news-imgs/news-1.jpg",
    title: "Could this VR scketching toole be coming of age for designers in the future?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt...."
  },
  {
    imageUrl: "../../assets/news-imgs/news-2.jpg",
    title: "8 Cities That Show you What the Future Will Look Like (Innovation Ideas)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt...."
  },
  {
    imageUrl: "../../assets/news-imgs/news-3.jpg",
    title: "15 Gift Iteas for Mon and Dad. Wheerever They Are This Year",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt...."
  }
]