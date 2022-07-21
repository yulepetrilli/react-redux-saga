import React from 'react'

//Styles
import { Link } from './Styles.styled';

export default function Pagination({catsPerPage, total, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(total / catsPerPage); i++){
        pageNumbers.push(i)
    };

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center mt-5">
                {pageNumbers.map(page => 
                    <li className="page-item">
                        <Link onClick={() => paginate(page)} className="page-link" href="#">{page}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
