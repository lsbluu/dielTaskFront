const fetchApi = async () => {
  try {
    const response = await fetch('https://dieltask-bk.herokuapp.com/');
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default fetchApi;