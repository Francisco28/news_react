import React from 'react';
import New from './New';

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
 
export default ListingNews;