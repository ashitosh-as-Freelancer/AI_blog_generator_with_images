import { createContext, useContext, useState } from "react";
import OpenAI from "openai";
import apiKey from '../../apikey';

const MyContext = createContext();

const MyContextProvider = ({children})=>{
  const [blog, setBlogContent] = useState();
  const [spinner, setSpinner] = useState(false);

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  });

  async function blogGenerate(prompt) {
    setSpinner(true);
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: `${prompt}, Please ensure that the generated content is in object form. Additionally, generate JSON data along with the textual content.The JSON data should follow the structure and dont limit the result create long blog: {
        "content1": "some content,(content should be more and proper)",
        "image1_prompt": "prompt for image1(description of image which can be pass to dall-e-3 model for image generation)",
        "content2": "some content"(content should be more and proper),
        "image2_prompt": "prompt for image2 (description of image which can be pass to dall-e-3 model for image generation)",
        ...
      }, Note: Whenever you feel that an image would enhance the description, insert an image prompt after the relevant content.` }],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
    });

    const responseObj = JSON.parse(completion.choices[0].message.content)
    for (const key in responseObj) {
      if (key.includes('_prompt')) {
        let prompt = responseObj[key];
        let image = await openai.images.generate({ model: "dall-e-3", prompt: prompt });
        responseObj[key] =  image.data[0].url;
      }
    }
    setBlogContent(responseObj);
    setSpinner(false);
  }

  return (
    <MyContext.Provider value={{ blogGenerate, blog, spinner}}>
      {children}
    </MyContext.Provider>
  );
}

function useMyContext() {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
}

export { MyContextProvider, useMyContext };
