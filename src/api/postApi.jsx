const fetchPost = async (data) => {
  try {
    const url = 'https://dieltask-bk.herokuapp.com/';
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "access-control-allow-origin" : "*",
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    console.log(JSON.stringify(data))
    await fetch(url, options);
    
  } catch (error) {
    console.log(error);
  }
}

export default fetchPost;