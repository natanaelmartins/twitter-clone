# Recreating Twitter UI using React

This project was inicially originated from Rocketseat's UI Clone series, you can watch it <a href="https://www.youtube.com/watch?v=K-8z_4xvT3o">here.</a>

## Techs

- [x] React.js
- [x] Styled Components
- [x] TypeScript

## Usage

1. Run `npm install` or `yarn install`.<br />
2. Run `yarn start` and access `http://localhost:3000`.<br />

## Roadmap

> :memo: This is the tutorial guide which I used to build the project

- [x]  Run `create-react-app` for `typescript template`
- [x]  Open project in `VSCode` and remove unnecessary files
- [x]  Install the following `VSCode extensions`
    - [x]  **Colorize**
        
        [Colorize Configuration](https://www.notion.so/Colorize-Configuration-7e741464bcc84d0e88ecd751879bbd29)
        
    - [x]  **vscode-styled-components**
    - [x]  **Rocketseat Snippets**
    - [x]  *Bracket Pair Colorizer* (optional)
- [x]  First step: create  `.editorconfig` and `.prettierrc`
- [x]  Add `styled-components, styled-icons`, `react-sticky-box` as dependencies
- [x]  Add `@types/styled-components` as `dev` dependency
- [x]  Disable `isolated-modules` at `tsconfig.json`
- [x]  Create Layout and all components
- [x]  Publish and deploy 🚀

> :bulb: These are my own contributions for the project 

- [x]  Include a profile picture and a header on the `ProfilePage` component
    - [x]  Improve the quality of the profile picture using CSS `object-fit` property
- [x]  Download new icons for twitter logo, comment and retweet at `icomoon`
- [x]  Expanded the buttons hover background using the `padding` property
- [x]  Created the `EditProfile` component
- [ ] Add the placeholder in the `Form` tags inside `EditProfile` 
- [ ] Enhance the `SideBar` stylization 
- [ ] Allow visitors to change profile data (including avatar and header) inside `EditProfile`



## Dificuldades encontradas 

> Erro com o 'useState' 

O Netlify aprensentou o warning <b>"Line 2:17:  'useState' is defined but never used  @typescript-eslint/no-unused-vars".</b>

Não sei bem o porquê, já que eu defini e usei o 'useState'. Apesar de ter sido apenas um warning, o Netlify trata warnings como erros. 

Para fazer o deploy, precisei mudar essa configuração do Netlify (mudei o build command para 'CI=false npm run build' -- antes era apenas npm run build --).
