const fetchUpdate = async (id, data) => {
  try {
    const url = `https://dieltask-bk.herokuapp.com/${id}`;
    const options = {
      method: 'PUT',
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

export default fetchUpdate;