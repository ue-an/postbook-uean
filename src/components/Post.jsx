import React, { useRef } from "react";
import User from '../../src/user_666201.png';

const Post = ({handleSubmit, title, body, setTitle, setBody, myName}) => {
 const form = useRef();

 return(
  <div className=" z-50 sticky top-0">
   <div className=" sticky top-0 rounded-tl-lg rounded-tr-lg p-4 text-white bg-cyan-700 w-full">
           <div className=" text-2xl">PostBook: Quotes and Poems Poster</div>
           <div className=" text-gray-200 text-sm">Post your own or your favorite quotes and poems</div>
         </div>
   <div className=" py-3 px-6 mb-3  rounded-bl-lg rounded-br-lg bg-slate-800 ">
    
    <div className=" mb-3 gap-3 items-center flex">
     <div className=" items-center justify-center flex-col flex rounded-full bg-white w-12 h-12">
      <img className=" w-9" src={User} alt="" />
     </div>
     <div className=" capitalize text-white">{myName}</div>
    </div>
    
    <form
     ref={form}
     onSubmit={handleSubmit}
     className=" gap-3 flex-col flex px-14"
    >
     <div className=" gap-3 flex-col flex">
      <input className=" rounded-lg px-2 py-1 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        type="text"
        name="title"
        id="title" />
   
      <textarea className=" rounded-lg px-2 py-1 w-full"
       value={body}
       onChange={(e) => setBody(e.target.value)}
       rows={3}
       placeholder="Quotation or Poem"
       type="text"
       name="body"
       id="body" >
       </textarea>
     </div>
   
     <div className=" items-center justify-end flex">
      <button className=" hover:opacity-50 rounded-md py-1 px-2 bg-blue-500 text-white" type="submit">
       <div className="flex">
        <span>Po</span><div className="flex">
         <span>s</span><span>t</span>
        </div><span>!</span>
       </div> </button>
     </div>
    </form>
   </div>
  </div>
 )
}

export default Post;