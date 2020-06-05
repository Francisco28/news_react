import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

const ListingNews = ({news}) => {
    return ( 
        <div className="row">
            { news.map(notice => (
                <New 
                    key={notice.url}
                    notice={notice}
                />
            ))}
        </div>
     );
}

ListingNews.propTypes = {
    news: PropTypes.array.isRequired
}


export default ListingNews;