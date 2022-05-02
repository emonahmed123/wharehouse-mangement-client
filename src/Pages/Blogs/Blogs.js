import React from 'react';

const Blogs = () => {
    return (
        <div>
         
   
              <div className='ms-2'>
               <h3>Differnt btween JavaScript and nodejs </h3>
                   <ul>
                   1.	
    1.Javascript is a programming language that is used for writing scripts on the website. == NodeJS is a Javascript runtime environment. <br/>
 
    2.	Javascript can only be run in the browsers. ===	We can run Javascript outside the browser with the help of NodeJS.<br/>
    3.	It is basically used on the client-side.	===It is mostly used on the server-side.
                   </ul>
              </div>


              <div>
            <ul>
            SQL    vs       	NoSQL
<li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)=	Non-relational or distributed database system. </li> 
<li> These databases have fixed or static or predefined schema=	They have dynamic schema</li>
<li>These databases are not suited for hierarchical data storage.	These databases are best suited for hierarchical data storage.</li> 
<li> These databases are best suited for complex queries	These databases are not so good for complex queries</li>
<li> Vertically Scalable	Horizontally scalable</li> 
<li> Follows ACID property	Follows CAP(consistency, availability, partition tolerance)</li>


            </ul>


              </div>
        </div>
    );
};

export default Blogs;