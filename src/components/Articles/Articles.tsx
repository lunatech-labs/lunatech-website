import { useEffect, useState } from "react";
import ArrowRight from '/arrow-right.svg';
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

interface BlogArticle {
    id: number;
    title: string;
    publication_date: string;
    excerpt: string;
    slug: string;
    image_url: string;
    author: string;
}

async function fetchBlogArticles(): Promise<BlogArticle[]> {
    const response = await fetch('https://blog.lunatech.com/posts/');
    if (!response.ok) {
      throw new Error('Failed to fetch blog articles');
    }
    const articles: BlogArticle[] = await response.json();
    return articles.slice(0, 2);
  }

const Articles = () => {
    const [articles, setArticles] = useState<BlogArticle[]>([]);

    useEffect(() => {
        fetchBlogArticles()
          .then(setArticles)
          .catch((error) => console.error("Failed to load blog articles", error));
      }, []);

    return (
    <div>
        <ul>
            {articles.map((article) => (
                <li key={article.id}>
                    <div className="blog__content">
                        <div className="blog__left">
                            <div className="dflex">
                                <p className="blog__category">Marketing</p>
                                <p className="blog__date">{article.publication_date}</p>
                            </div>
                            <p className="blog__title">{article.title}</p>
                            <Text className="mgb24">{article.excerpt}</Text>
                            <ButtonSecondary iconUrl={ArrowRight} size="large" to={"https://blog.lunatech.com" + article.slug}>Read More</ButtonSecondary>
                        </div>
                        <img className="blog__img" src={article.image_url} alt="Blog img" />
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default Articles;
