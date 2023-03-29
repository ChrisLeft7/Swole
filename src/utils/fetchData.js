export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '48a437133bmshd082e1af081b739p13c3bcjsn92ddc3c600af',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '48a437133bmshd082e1af081b739p13c3bcjsn92ddc3c600af',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };





export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}