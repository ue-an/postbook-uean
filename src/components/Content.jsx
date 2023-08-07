import React, { } from "react";

const Content = ({posts}) => {
  let names = ['Arvel Miller', 'Mikayla Weimann', 'Kendra Mosciski', 'Allan Berge',
               'Clotilde Feil', 'Tom Blanda', 'Mekhi West', 'Ayla Hilll', 'Boris Conn',
               'Desmond Dibbert', 'Meggie Cremin'
              ];

  const rnd = Math.floor(Math.random() * 10);

 return (
  <div className=" -m-[0.30rem] gap-5 px-10 grid-cols-1 grid">
   {posts.map((post) => {
    return (
     <div key={post.id} >
       <div className="p-3 rounded-lg border-black border-2 space-y-2 flex-col flex">
        {
         typeof(post.userId) == 'string' ?
         <div className=" grid-cols-1 grid">
          <div className=" flex-col flex">
            <div className=" text-slate-800 uppercase font-bold text-xl">{post.title}</div>
            <div className=" text-gray-500 text-sm">{post.userId}</div>
          </div>
         </div>
         
         : 
        // <div></div>
        
        <div className=" grid-cols-1 grid">
          <div className=" flex-col flex">
            <div className=" text-slate-800 uppercase font-bold text-xl">{post.title}</div>
            <div className=" text-sm">
              { names[post.id]
              }
            </div>
          </div>
        </div>
        }

        <div className=" bg-slate-800 h-[1px] w-full"></div>
        
        <div className=" grid-cols-1 grid">
          <pre className=" first-letter:capitalize whitespace-pre-wrap">

          {post.body}
          </pre>
        </div>
        
       </div>
      </div>
    );
   })
   }
  </div>
 );
}


export default Content;