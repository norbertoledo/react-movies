import React from 'react';
import {default as Pager} from 'rc-pagination'; 
import './Pagination.scss';

const Pagination = (props) => {
    
    const {currentPage, totalItems, pageSize, handlePage} = props;

    return (
        <Pager 
            className="pagination"
            current={currentPage}
            total={totalItems}
            pageSize={pageSize}
            onChange={handlePage}
            hideOnSinglePage={true}
        />
    );
}

export default Pagination;
