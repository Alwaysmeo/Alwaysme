# AlwaysMe-Design-Vue3

### 💬 Language
-   🇨🇳 [简体中文](https://github.com/Alwaysmeo/alwaysme-design/blob/main/README.md)
-   🇺🇸 [English](https://github.com/Alwaysmeo/alwaysme-design/blob/main/README_EN.md)

### 📌 Introduction
-   Neumorphism-style AlwaysMe UI component library, developed based on Vue3, supports TypeScript.

### 📌 Desc
-   👻 This project is in the development stage and should not be used in the production environment.


### 💫 Start
-   **Version** Vue >= 3.2.0
    **Note：** AlwaysMe-Design The IE browser environment is not supported.

### 📦️ Install

-   **Recommend using NPM or Yarn for package management**

    `npm install @alwaysme/design`

    `yarn add @alwaysme/design`

### 🧑‍💻 Use

-   `/src/main.js` global import in the file `AlwaysMe` component library.

    ```javascript
    import { createApp } from 'vue'
    import App from './App.vue'

    import AlwaysMe from '@alwaysme/design'
    import '@alwaysme/design/dist/style.css'
    createApp(App).use(AlwaysMe).mount('#app')
    ```

-   If it is a TypeScript project, you need to add the following content to your project `.d.ts` file to avoid errors. You cannot create this file yourself.

    ```typescript
    declare module '@alwaysme/design' {
        export function install(app: App): void
    }
    ```

###  📌 Contributors
-   <a href="https://github.com/Alwaysmeo" target="_blank"><img src="https://avatars.githubusercontent.com/u/62600916?v=4" height="52"></a>
