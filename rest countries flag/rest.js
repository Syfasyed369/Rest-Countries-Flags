fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      if (country.flags) {
        console.log(`${country.name.common}: ${country.flags.png}`);
      }
    });
  })
  .catch(error => console.log('Error fetching data:', error));
