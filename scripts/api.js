const callAPI = async (speach) => {

    const options = {
        method: 'GET',
        url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
        params: {
          hl: 'en-us',
          src: `${speach}`,
          key: 'aa3f88e9e0784f8b8ff0867f1ce6adb6',
          f: '8khz_8bit_mono',
          c: 'mp3',
          r: '0'
        },
        headers: {
          'X-RapidAPI-Key': '7653558c72msh4744c32ce35a248p148572jsn1385e9bed9b2',
          'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response
      } catch (error) {
          console.error(error);
      }
}


export {callAPI}