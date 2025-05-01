import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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
  return <div>Total {CategoryNews.length} news Found</div>;
};

export default CategoryNews;
