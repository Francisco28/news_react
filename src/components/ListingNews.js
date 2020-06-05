import React from 'react';
import New from './New';

const ListingNews = ({news}) => {
    return ( 
        <div className="row">
            { news.map(notice => (
                <New />
            ))}
        </div>
     );
}
 
export default ListingNews;