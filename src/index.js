import React from 'react';
import ReactDom from 'react-dom'; 



function BookList() {
   return (
   <section>
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
   </section>
  );
}

const Book = () =>{
  return <article>
    <Image></Image>
    <Title/>
    <Author />
    </article>;
};
const Image = () => (
<img 
  src="https://images-na.ssl-images-amazon.com/images/I/51rwXABgAYL._SX258_BO1,204,203,200_.jpg"
   alt="ss"/>
);

const Title = () => <h1>Trick or Treast, Baby Shark!: Doo Doo Doo Doo Doo Doo (A Baby Shark Book)</h1>
const Author = () => <h4>Amelia Hepworth</h4>; 

ReactDom.render(<BookList />, document.getElementById('root'));