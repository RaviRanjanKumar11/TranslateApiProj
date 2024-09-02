import React, { useState } from 'react'
import translateTextservice from '../Service/translateService'

const TranslatePage = () => {
const [translateText,setTranslateText] = useState('');

const handleTranslate = async () => {
 try {
     console.log(response);
     console.error('Error details:', error.response?.headers);
     const result = await translateTextservice('how are you sir','en','nl');
     setTranslateText(result.translated_text.nl);
 } catch (error) {
     console.error('not translating',error);
 }    
};
  return (
    <div>
      <button onClick={handleTranslate}>Click</button>
      <p>Translated Text Is : {translateText}</p>
      {/* <button onClick={handleTranslate}>Translate to Dutch</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <p>Translated Text: {translateText}</p> */}
    </div>
  )
}

export default TranslatePage
