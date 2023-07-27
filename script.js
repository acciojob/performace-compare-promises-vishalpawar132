// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
const fetchData = async (url) => {
  const startTime = performance.now();
  const response = await fetch(url);
  const data = await response.json();
  const endTime = performance.now();
  return endTime - startTime;
};

// Function to fetch data from multiple APIs using Promise.all
const fetchWithPromiseAll = async () => {
  try {
    const start = performance.now();
    const promises = apiUrls.map(fetchData);
    const times = await Promise.all(promises);
    const totalTime = performance.now() - start;

    // Display the results on the webpage
    const outputAll = document.getElementById('output-all');
    outputAll.textContent = `${totalTime.toFixed(2)} ms`;
  } catch (error) {
    console.error('Error with Promise.all:', error);
  }
};

// Function to fetch data from multiple APIs using Promise.any
const fetchWithPromiseAny = async () => {
  try {
    const start = performance.now();
    const promises = apiUrls.map(fetchData);
    await Promise.any(promises);
    const totalTime = performance.now() - start;

    // Display the results on the webpage
    const outputAny = document.getElementById('output-any');
    outputAny.textContent = `${totalTime.toFixed(2)} ms`;
  } catch (error) {
    console.error('Error with Promise.any:', error);
  }
};

// Call the functions to fetch data and display the results
fetchWithPromiseAll();
fetchWithPromiseAny();