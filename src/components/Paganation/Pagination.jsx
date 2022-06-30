import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <nav>
        <ul>
            {pageNumbers.map(page => (
                <li key={page}>
                    <a onClick={() => paginate(page)} href='!#'>{page}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination