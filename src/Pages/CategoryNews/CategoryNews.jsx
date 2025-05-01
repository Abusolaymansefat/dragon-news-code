import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data)

  const [CategoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filtereNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filtereNews)
    }
    else{
        const filtereNews = data.filter((news) => news.category_id == id);
        console.log(filtereNews);
        setCategoryNews(filtereNews);
    }
    
   
  }, [data, id]);
  return <div>
    <h2 className="font-bold mb-5">
        Total <span className="text-secondary">{CategoryNews.length}</span> news Found
        </h2>
        <div className="grid grid-cols-1 gap-5">
            {
                CategoryNews.map(news => <NewsCard key={news.id} news = {news}></NewsCard>)
            }
        </div>
  </div>;
};

export default CategoryNews;
