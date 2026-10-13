async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

getData();