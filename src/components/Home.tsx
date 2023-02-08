import useState from "react-hook-use-state"
import React from 'react'

const Home: React.FC = () => {

    const [name,setName] = useState<string>('Mario')
    const handleClick = ():void => {
        setName('luigi')
    }
    interface blogElement {
        id: number,
        body: string
    }
    const [blog, setBlog] = useState<blogElement[]>([{id: 1 , body: 'a'}, {id: 2, body: 'b'}, {id: 3, body: 'c'}])
    

  return (
    <div className="home">
      <p className='text-3xl font-bold underline'>Home Page</p>
      <p>{name}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>Click Me</button>
      {
        blog.map(
          blog => {
            return (<div> <p className="line-through ...">{blog.body}</p>
            <div className='underline ...'>{blog.id}
            </div></div>
            )
          }
        )
      }

    </div>
    
  )
}

export default Home