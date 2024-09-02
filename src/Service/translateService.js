import axios from "axios";

const translateTextservice = async (text, source, target) => {
const data = JSON.stringify({
     text: text,
     source: source,
     target: target,
});

const options = {
     method: 'POST',
     url: 'https://translate-plus.p.rapidapi.com/translate',
     headers:{
       'Content-type' : 'application/json',
       'x-rapidapi-key' : '8664a92310mshd2d9f3b7275df93p182c5fjsnae459854c672',
       'x-rapidapi-host' : 'translate-plus.p.rapidapi.com',
     },
     
     data:data,
     
};
     try{
      const response = await axios.request(options);
      return response.data;
     } catch (error){
          console.error('error translating text check it once', error);
          throw (error);}     
};

export default translateTextservice;