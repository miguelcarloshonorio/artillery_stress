<h1 align="center">Welcome to artilery_stress 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/micajeho" target="_blank">
    <img alt="Twitter: micajeho" src="https://img.shields.io/twitter/follow/micajeho.svg?style=social" />
  </a>
</p>

> Stress test with artillery

## Install

```sh
yarn install
```

## Run tests

```sh
yarn artillery run ./stress/backend/{number_ff_scenario}.yml -o ./.data/{number_ff_scenario}.json
```

## After Run tests,generate reports

```sh
yarn artillery report scenario_{number_ff_scenario}.json ./.data/{number_ff_scenario}.html
```

## Author

👤 **Miguel Carlos Honorio**

* Twitter: [@micajeho](https://twitter.com/micajeho)
* Github: [@miguelcarloshonorio](https://github.com/miguelcarloshonorio)
* LinkedIn: [@micajeho](https://linkedin.com/in/micajeho)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_