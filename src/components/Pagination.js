import React from "react";
import "./Pagination.css";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // window.addEventListener("scroll", () => {
  //   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  //   console.log({ scrollTop, scrollHeight, clientHeight });

  //   if (clientHeight + scrollTop >= scrollHeight - 5) {
  //     // show the loading animation
  //   } else
  // });

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;
