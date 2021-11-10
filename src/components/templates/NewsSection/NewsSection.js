import React, { useState, useEffect } from 'react';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from 'components/templates/NewsSection/NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const API_TOKEN = 'a80c410f8279423cb67cd5c059f50c';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Przepraszamy, nie udało się załadować pliku`);
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>Newsy sportowe :)</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Kliknij aby doczytać więcej</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Ładuję...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;