import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Read the latest news about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Feb 4, 2023" text="Adani stocks continue to fall; market cap loss widens to Rs 8.79 lakh crore" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Feb 4, 2023" text="Stock market today: Dow slips as strong jobs delivers big blow to Fed pause bets" />
        <Article imgUrl={blog03} date="Feb 4, 2023" text="An economics researcher is warning that the next few decades could bring a massive stock market collapse" />
        <Article imgUrl={blog04} date="Feb 4, 2023" text="India resilient to stock market blip, says Minister Ashwini Vaishnaw" />
        <Article imgUrl={blog05} date="Feb 4, 2023" text="Pharma stock announces 1:5 stock split, scrip rallies over 240% in 6 months" />
      </div>
    </div>
  </div>
);

export default Blog;
