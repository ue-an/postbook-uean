import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import Post from "./components/Post";

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  // const mynames = ['Awesome User', 'Fantastic User', 'Quote Poster', 'PostBook User',
  // 'Legendary Poet', 'Pet Lover', 'Mx. Pro Gamer' ,'Funny User', 'Winifred Toy', 'Cesar Waters', 'Ramona McClure'];
  // const [myName, setMyName] = useState(mynames[Math.floor(Math.random() * 9)]);
  const [myName, setMyName] = useState('PostBook User');


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPosts(data);
    })
    .catch((err) => {
      console.log(err.message);
    });

  }, []);

 

  const addPosts = async (title, body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        // userId: Math.random().toString(36).slice(2),
        userId: myName
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setMyName(myName);
      setPosts((posts) => [data, ...posts]);
      setTitle('');
      setBody('');
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  }

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      } else {
        return;
      }
    })
  }

  return (
    <div>
      <div className=" m-auto max-w-[1080px]">
        <Post handleSubmit={handleSubmit} title={title} body={body} setTitle={setTitle} setBody={setBody} myName={myName} />
        {/* <Language posts={posts} detectLangApi={detectLangApi} setDetectedLanguageKey={setDetectedLanguageKey}/> */}
        <div className="-mt-10 pl-24" id="google_translate_element"></div>
        <div className="items-center ml-2 justify-start flex">
          <div className=" md:ml-[6.3rem] ml-[6.5rem] text-sm text-black h-8 md:top-[21.5rem] sm:top-[21.5rem] top-[23.5rem] absolute">Translate</div>
        </div>
        <Content posts={posts} /> 
        
      </div>
    </div>
  );
}

export default App;
