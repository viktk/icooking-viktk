# Comment setup nos tests sur une application React

## Présentation des outils

On va utiliser deux outils.

### Jest - Framework de test

http://jestjs.io

Jest est l'outil qui va exécuter nos tests, et faire nos assertions

### Enzyme - Tests de composants React

Enzyme nous permet de tester nos composants React, en "simulant" un rendu dans le DOM.

## Installation

On commence par installer les packages suivants (dependances de dev) :

`npm install --save-dev --force jest babel-jest enzyme enzyme-adapter-react-16`

Ou bien avec yarn :

`yarn add --dev jest babel-jest enzyme enzyme-adapter-react-16`

Ensuite, on crée *a la racine* du projet, un dossier `tests`.

Dans ce dossier `tests`. On crée un `.eslintrc`.

Dedans, on met :

```json
{
  "env": {
    "jest/globals": true
  },
  "rules": {
    "no-unused-expressions": "off"
  }
}
```

Dans ce même dossier `tests`, on crée `.setup.js` qui contiendra la config de enzyme. Voici le contenu :

```javascript
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
```

Dans le `package.json`, on ajoute deux scripts pour lancer les tests :

```json
"test": "jest",
"test:watch": "jest --watchAll"
```

Pour finir, on ajoute la configuration de jest dans le package.json

```json
"jest": {
  "modulePaths": [
    "./"
  ],
  "roots": [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "setupFilesAfterEnv": ["<rootDir>/tests/.setup.js"]
}
```

`modulePaths` comme on fait des imports du style `src/chemin` grâce au resolver configuré pour webpack on doit indiquer d'où commence les imports à jest

`roots` liste de dossiers dans lesquels Jest doit chercher les fichiers. Permet d'avoir les imports avec les alias de webpack. [Plus d'infos](https://jestjs.io/docs/en/configuration#roots-arraystring)

`moduleNameMapper` fichiers statiques importés dans les composants qui doivent être remplacés par des faux modules. Il ne faut pas oublier de rajouter les fichiers mock (ici dans le dossier __mocks__) [Plus d'infos](https://jestjs.io/docs/en/webpack#handling-static-assets)

`setupFilesAfterEnv` config pour l'adapter Enzyme

A la racine du projet, on crée un dossier `__mocks__`.

Dedans, on crée deux fichiers :

- `fileMock.js` avec dedans `export default 'test-file-stub';`
- `styleMock.js` avec dedans `export default {};`
