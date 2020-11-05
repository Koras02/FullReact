import React from 'react';
import ReactDom from 'react-dom'; 

// CSS
import './index.css';
// setup vars
const firstBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/51rwXABgAYL._SX258_BO1,204,203,200_.jpg',
  title:'Trick or Treast, Baby Shark!: Doo Doo Doo Doo Doo Doo (A Baby Shark Boosks)',
  author: 'Amelia Hepworth'
}
const secondBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/41rbthdtokL._SX390_BO1,204,203,200_.jpg',
  title:'Greenlights Hardcover – October 20, 2020',
  author: 'Matthew McConaughey'
}

function BookList() {
   return (
   <section className='booklist'>
     <Book 
      img={firstBook.img} 
      title={firstBook.title} 
      author={firstBook.author} 
     >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sunt necessitatibus accusantium quibusdam aperiam possimus atque, 
          pariatur qui sapiente eius.</p>
     </Book>
     <Book 
      img={secondBook.img} 
      title={secondBook.title}
      author={secondBook.author}/>
   </section>
  );
}

const Book = (props) =>{
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className='book'> 
    <img src={img} alt='' />
   <h1>{title}</h1>
   <h4>{author}</h4>
   {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));