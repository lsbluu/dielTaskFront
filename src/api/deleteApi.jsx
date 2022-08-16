const fetchDelete = async (id) => {
  try {
    const url = `https://dieltask-bk.herokuapp.com/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        "access-control-allow-origin" : "*",
        'Content-type': 'application/json'
      }
    }
    await fetch(url, options);
    
  } catch (error) {
    console.log(error);
  }
}

export default fetchDelete;