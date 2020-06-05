import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListingNews from './components/ListingNews';


function App() {


  //define the category and news
  const [ category, saveCategory ] = useState('');
  
  //state to save the news
  const [ news, saveNews ] = useState([]);


  //using useEffect para cuando detecte un cambio en "categoria" se vuelva a ejecutar el componente
  useEffect(() => {
      const consultAPI = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=45ef01eae29e45318b02524541456fd9`;

          const answer = await fetch(url);
          const news = await answer.json();

          saveNews(news.articles);
      }
      consultAPI();
  }, [category]);

  return (
      <Fragment>
        <Header 
            title="News Search"
        />

        <div className="container white">
            <Form 
                saveCategory={saveCategory}
            />

            <ListingNews 
              news={news}
            />
        </div>
      </Fragment>
  );
}

export default App;
