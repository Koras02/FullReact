import React from 'react';
import ReactDom from 'react-dom'; 


// CSS
import './index.css';
// setup vars
const books =[
  { id:1, 
  img:'https://images-na.ssl-images-amazon.com/images/I/51rwXABgAYL._SX258_BO1,204,203,200_.jpg',
  title:'Trick or Treast, Baby Shark!: Doo Doo Doo Doo Doo Doo (A Baby Shark Boosks)',
  author: 'Amelia Hepworth'
},
  { id: 2,
    img:'https://images-na.ssl-images-amazon.com/images/I/41rbthdtokL._SX390_BO1,204,203,200_.jpg',
    title:'Greenlights Hardcover – October 20, 2020',
    author: 'Matthew McConaughey'
  },
    { id:3,
    img:'https://images-na.ssl-images-amazon.com/images/I/51csHbBHsGL._SX329_BO1,204,203,200_.jpg',
    title:'Do You Feel Like I Do?: A Memoir Hardcover – October 20, 2020',
    author: 'Peter Frampton'
  },
];


function BookList() {
   return (
   <section className='booklist'>
     {books.map((book, index)  => {
      return  <Book key={book.id} {...book}></Book>;
    })}
   </section>
  );
}

const Book = ({img,title, author }) =>{
  // attiribute, eventHandler
  // onClick, onMouseOver  
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) =>{ 
    console.log(author);
  };
  return (
    <article 
      className='book' 
      onMouseOver={()=>{
      console.log(title);
     }} 
    > 
    <img src={img} alt='' />
   <h1 onClick={()=> console.log(title)}>{title}</h1>
   <h4>{author}</h4>
   <button type='button' onClick={clickHandler}>
     reference example
   </button>
   <button type="button" onClick={() => complexExample(author)}>
     more complex example</button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));