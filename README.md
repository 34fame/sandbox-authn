<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/34fame/sandbox-authn">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">AuthN Sandbox</h3>

  <p align="center">
    Demonstrates adding authentication methods as plugins for Vue/Quasar.
    <br />
    <a href="https://github.com/34fame/sandbox-authn"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/34fame/sandbox-authn">View Demo</a>
    ·
    <a href="https://github.com/34fame/sandbox-authn/issues">Report Bug</a>
    ·
    <a href="https://github.com/34fame/sandbox-authn/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![AuthN Screen Shot][product-screenshot]](https://example.com)


### Built With

* [VueJS](https://vuejs.org)
* [Quasar Framework](https://quasar.dev)
* [Firebase](https://firebase.google.com)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

* Firebase account

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/34fame/sandbox-authn.git
```

1. Install NPM packages
```sh
npm install
```

1. Create client environment files
```sh
cd client
cp .env.template .env.development
cp .env.template .env.production
```

1. Update environment files with Firebase project details

<!-- Key Aspects -->
## Key Aspects

### Services
Under `client/src/services` you'll find core code for standing up authentication (and storage) options for the
 application.  These services are called directly by your Vuex actions (or from your components).  These services
  rely on plugins.
  
### Plugins
The `client/src/plugins` directory contains all currently installed plugins, organized by their type.  Right now the
 only included authentication plugin is for Firebase.  This plugin has support for many of the Firebase
  Authentication service methods:

- Email/Password
- Phone (SMS)
- Google
- Facebook
- Twitter
- GitHub

### Setup

...more details to come.



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/34fame/sandbox-authn/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Troy Moreland - [@34fame_troy](https://twitter.com/#34fame_troy)

Project Link: [https://github.com/34fame/sandbox-authn](https://github.com/34fame/sandbox-authn)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/34fame/sandbox-authn.svg?style=flat-square
[contributors-url]: https://github.com/34fame/sandbox-authn/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/34fame/sandbox-authn.svg?style=flat-square
[forks-url]: https://github.com/34fame/sandbox-authn/network/members
[stars-shield]: https://img.shields.io/github/stars/34fame/sandbox-authn.svg?style=flat-square
[stars-url]: https://github.com/34fame/sandbox-authn/stargazers
[issues-shield]: https://img.shields.io/github/issues/34fame/sandbox-authn.svg?style=flat-square
[issues-url]: https://github.com/34fame/sandbox-authn/issues
[license-shield]: https://img.shields.io/github/license/34fame/sandbox-authn.svg?style=flat-square
[license-url]: https://github.com/34fame/sandbox-authn/blob/master/LICENSE.txt
[product-screenshot]: screenshot.png
