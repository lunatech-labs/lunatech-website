import { useTranslation, Trans } from 'react-i18next';
import "./Articles.scss";
import { useEffect, useState } from "react";
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import Text from '@components/Text/Text';
import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import { arrowRight } from '@/assets';
import Title from '../Title/Title';

interface BlogArticle {
    title: string;
    publication_date: string;
    tags: string[];
    excerpt: string;
    slug: string;
    image_url: string;
    author: string;
}

async function fetchBlogArticles(): Promise<BlogArticle[]> {
    const response = await fetch('http://localhost:9000/posts/');
    if (!response.ok) {
      throw new Error('Failed to fetch blog articles');
    }
    const articles: BlogArticle[] = await response.json();
    return articles.slice(0, 2);
  }

const Articles = () => {
    useTranslation();
    
    const [articles, setArticles] = useState<BlogArticle[]>([]);

    useEffect(() => {
        fetchBlogArticles()
          .then(setArticles)
          .catch((error) => console.error("Failed to load blog articles", error));
      }, []);

    function truncateText(text: string, maxWords: number) {
        const wordsArray = text.split(' ');
        if (wordsArray.length > maxWords) {
            return wordsArray.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    }
    

    return (
    <div>
        <ul>
            {articles.map((article, index) => (
                <Spotlight key={article.slug} className="spotlight__layout">
                    <SpotlightCard padding="pad80">
                        <li className="article">
                            <div className="blog__content">
                                <div className={`blog__left ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
                                    <div className="dflex blog-header">
                                        <p className="blog__category">{article.tags.length > 0 ? article.tags[0].charAt(0).toUpperCase() + article.tags[0].slice(1).toLowerCase() : ''}</p>
                                        <p className="blog__date">{article.publication_date}</p>
                                    </div>
                                    <Title level={3} className="mgb16">{article.title}</Title>
                                    <Text size="medium" className="mgb24">{truncateText(article.excerpt, 25)}</Text>
                                    <ButtonSecondary iconUrl={arrowRight} newPage={true} size="large" to={"https://blog.lunatech.com" + article.slug}><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
                                </div>
                                <img className="blog__img" src={article.image_url} alt={article.title} />
                            </div>
                        </li>
                    </SpotlightCard>
                </Spotlight>
            ))}
        </ul>  
    </div>
    );
}

export default Articles;
