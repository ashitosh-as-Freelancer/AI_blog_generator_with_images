import { useEffect, useState } from "react";
import { useMyContext } from "../context/gptContext";

export default function ContentBar() {
  const {blog} = useMyContext();
  const [chatElements, setChatElements] = useState();

  useEffect(()=> {
    const displayChatResponse = () => {
        const result = [];
        console.log(blog);
        for (const key in blog) {
          if (key.includes("_prompt")) {
             result.push(
              <div key={key} className="w-50 mb-2">
                <img
                  src={blog[key]}
                  alt={`Image ${key}`}
                  style={{ width: "100%" }}
                />
              </div>
            );
          } else {
            result.push(<p key={key} className="w-50">{blog[key]}</p>);
          }
        }
        setChatElements(result);
    };
    displayChatResponse();
  }, [blog])
  return (<div className="px-2 px-md-5 row">
    {chatElements}
  </div>)
}
