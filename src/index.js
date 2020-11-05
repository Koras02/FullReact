import React from 'react';
import ReactDom from 'react-dom'; 

// CSS
import './index.css';
// setup vars
const author = 'Amelia Hepworth';
function BookList() {
   return (
   <section className='booklist'>
     <Book />
   </section>
  );
}
const Book = () =>{
  const title = "Trick or Treast, Baby Shark!: Doo Doo Doo Doo Doo Doo (A Baby Shark Boosks)"
  return (
    <article className="book">
    <img 
    src='https://images-na.ssl-images-amazon.com/images/I/51rwXABgAYL._SX258_BO1,204,203,200_.jpg'
   alt=''
   />
   <h1>{title}</h1>
   <h4>{author.toUpperCase()}</h4>
   {/* <p>{let x= 6}</p> */}
   <p>{6 * 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));