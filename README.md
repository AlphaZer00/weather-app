<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AlphaZer00/weather-app">
    <img src="src/assets/apple-touch-icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Weather App</h3>

  <p align="center">
    A weather app that allows searching 
    <br />
    <a href="https://github.com/AlphaZer00/weather-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AlphaZer00/weather-app">View Demo</a>
    ·
    <a href="https://github.com/AlphaZer00/weather-app/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/AlphaZer00/weather-app/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#what-i-learned">What I Learned</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project is a web-based weather app that calls the weatherAPI and displays the pertinent weather information to the DOM. You can search for any city and receive instant weather information including local time, sunset/sunrise times, chance of precipitation, wind direction/speed, and more.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need `Node.js` and `npm` installed globally on your machine.
* [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Get a free API key at [https://www.weatherapi.com](https://www.weatherapi.com)
2. Clone the repository
   ```sh
   git clone https://github.com/AlphaZer00/weather-app.git
   ```
3. Install the NPM packages
   ```sh
   npm install
   ```
4. Enter your API key in line 6 of`./src/api.js`
   ```js
   "https://api.weatherapi.com/v1/forecast.json?key='YOUR KEY HERE"
   ```
5. Build an app
   ```sh
   npm run build
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## What I Learned

The main goal of this project was to become familiar with APIs and asynchronus javascript code.Throughout the development of this weather app, I gained valuable experience in several key areas:

1. **API Integration:** I learned how to make API calls to retrieve weather data from a third-party service, handle responses, and manage potential errors.
2. **Asynchronous JavaScript:** I improved my understanding of asynchronous programming in JavaScript, utilizing fetch and async/await to handle asynchronous operations smoothly.
3. **Error Handling:** I learned the importance of proper error handling to ensure a robust and user-friendly application. This included using try-catch blocks and handling promise rejections appropriately. I tested various error states from the API and found that almost all of the API's native error messages were appropriate for end users except for when the user submits a blank input. In response, I created a custom error message for that case that was more suited for proper communication of the error to the end user.
5. **JSON Parsing:** Building on my previous experience with JSON data from a prior to-do list project, I found it significantly easier to parse and integrate JSON data from the API responses into the app's UI.
6. **DOM Manipulation:** I practiced manipulating the DOM to dynamically update the UI based on the fetched weather data. Particularly, using the 'winddegree' value from the API response for the ```transform: rotate();``` css function value to accurately represent the wind direction through an arrow icon was one of the more exiting aspects of dynamic DOM manipulation for me.

Overall, this project significantly enhanced my proficiency in JavaScript and gave me additonal practical experience with key web development concepts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Batuhan Dasdemir - [LinkedIn][linkedin-url] - batudasdemir@gmail.com

Project Link: [https://github.com/AlphaZer00/todo-list](https://github.com/AlphaZer00/weather-app)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[issues-shield]: https://img.shields.io/github/issues/AlphaZer00/todo-list.svg?style=for-the-badge
[issues-url]: https://github.com/AlphaZer00/weather-app/issues
[license-shield]: https://img.shields.io/github/license/AlphaZer00/weather-app.svg?style=for-the-badge
[license-url]: https://github.com/AlphaZer00/weather-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/batuhan-dasdemir
[product-screenshot]: src/assets/weather-app-screenshot.png
