package.json from E:\R\materials\1.2. Redux Add\01.UlbiTV\rrtcm

--------------
PS E:\R\02.redux.shop> npm i
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-scripts@4.0.1
npm error Found: typescript@4.1.3
npm error node_modules/typescript
npm error   typescript@"^4.1.3" from the root project
npm error   peer typescript@">=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta" from tsutils@3.20.0
npm error   node_modules/tsutils
npm error     tsutils@"^3.17.1" from @typescript-eslint/typescript-estree@3.10.1
npm error     node_modules/eslint-plugin-testing-library/node_modules/@typescript-eslint/typescript-estree
npm error       @typescript-eslint/typescript-estree@"3.10.1" from @typescript-eslint/experimental-utils@3.10.1
npm error       node_modules/eslint-plugin-testing-library/node_modules/@typescript-eslint/experimental-utils
npm error         @typescript-eslint/experimental-utils@"^3.10.1" from eslint-plugin-testing-library@3.10.1
npm error         node_modules/eslint-plugin-testing-library
npm error     tsutils@"^3.17.1" from @typescript-eslint/eslint-plugin@4.14.1
npm error     node_modules/@typescript-eslint/eslint-plugin
npm error       peer @typescript-eslint/eslint-plugin@"^4.0.0" from eslint-config-react-app@6.0.0
npm error       node_modules/eslint-config-react-app
npm error         eslint-config-react-app@"^6.0.0" from react-scripts@4.0.1
npm error         node_modules/react-scripts
npm error       1 more (react-scripts)
npm error     1 more (@typescript-eslint/typescript-estree)
npm error
npm error Could not resolve dependency:
npm error peerOptional typescript@"^3.2.1" from react-scripts@4.0.1
npm error node_modules/react-scripts
npm error   react-scripts@"4.0.1" from the root project
npm error
npm error Conflicting peer dependency: typescript@3.9.10
npm error node_modules/typescript
npm error   peerOptional typescript@"^3.2.1" from react-scripts@4.0.1
npm error   node_modules/react-scripts
npm error     react-scripts@"4.0.1" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.      
npm error
npm error
npm error For a full report see:
npm error C:\Users\Aleksandr\AppData\Local\npm-cache\_logs\2025-02-19T08_37_27_190Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\Aleksandr\AppData\Local\npm-cache\_logs\2025-02-19T08_37_27_190Z-debug-0.log
PS E:\R\02.redux.shop>
-------------------

nvm install 16.20.2
nvm use 16.20.2

nvm list

npm install typescript@3.9.10

npm install --legacy-peer-deps

npm i immer

------------------

svg files
https://icon-icons.com/icon/payment-marketplace-online-store-basket-market-mobile-app/73855

--------------------
покрасить svg
https://www.youtube.com/watch?v=b4btk12Evgw&t=136s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9



===========================
redux-persist error: TypeError: storage.getItem(...).then is not a function
getStoredState

Iskin:
### Причина ошибки:
Ошибка:
```
TypeError: storage.getItem(...).then is not a function
```
возникает из-за того, что `storage` в `redux-persist` ожидается в виде асинхронного хранилища (например, `AsyncStorage` в React Native или `localForage` в браузере), а в коде используется `localStorage`, который **не поддерживает промисы** и не имеет метода `.then()`.

### Решение:
В файле `index.ts` заменить:
```ts
const persistConfig = {
    key: 'root',
    storage: localStorage, // ❌ Ошибка, localStorage не асинхронный
    whitelis: ['basket', 'orders', 'funds'],
};
```
на:
```ts
import storage from 'redux-persist/lib/storage'; // ✅ Подключаем правильное хранилище

const persistConfig = {
    key: 'root',
    storage, // ✅ Используем корректное синхронное хранилище
    whitelist: ['basket', 'orders', 'funds'], // ✅ Исправляем опечатку в whitelist
};
```

### Что дальше?
После внесения изменений:
1. Перезапустите сервер (`yarn start`).
2. Очистите локальное хранилище в браузере (DevTools → Application → Local Storage → Очистить).
3. Убедитесь, что приложение больше не падает.

Попробуйте и скажите, если останутся проблемы!
========================

галочка аккордеона - Chevron
https://icon-icons.com/search/icons/?filtro=Chevron

=======================

persist reducer имеет механизм зачистки localstorage при  критических изменениях структуры:

что-то наподобии этого:

```
const migrations = {
    2: (state: any) => {
        console.log('Clearing `persistedState` because the structure has changed!');
        return { ...state, basket: [], orders: [], funds: [] };
    },
    3: (state: any) => {
        console.log('Applying migration v3: Updating persisted structure.');
        return {
            ...state,
            basket: state.basket?.map(item => ({ ...item, newField: true })) || [], // Добавляем новое поле
            orders: state.orders || [],
            funds: state.funds || [],
        };
    },
};

const persistConfig = {
    key: 'root',
    storage,
    version: 3, 
    whitelist: ['basket', 'orders', 'funds'],
    blacklist: ['goods'],
    migrate: createMigrate(migrations, { debug: true }),
};

```

у меня просто меняется ключ
====================================

публикация на Vercel
https://www.youtube.com/results?search_query=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9+vercel
============================
[16:13:20.402] Running build in Washington, D.C., USA (East) – iad1
[16:13:20.575] Cloning github.com/abratsiuk/02.redux.shop (Branch: main, Commit: 0ffba87)
[16:13:20.764] Previous build caches not available
[16:13:21.206] Cloning completed: 630.000ms
[16:13:21.544] Running "vercel build"
[16:13:22.307] Vercel CLI 41.2.2
[16:13:22.905] Installing dependencies...
[16:13:35.953] npm warn deprecated redux-devtools-extension@2.13.9: Package moved to @redux-devtools/extension.
[16:13:49.504] 
[16:13:49.505] added 1970 packages in 26s
[16:13:49.505] 
[16:13:49.505] 132 packages are looking for funding
[16:13:49.505]   run `npm fund` for details
[16:13:49.506] npm notice
[16:13:49.506] npm notice New major version of npm available! 10.9.2 -> 11.1.0
[16:13:49.506] npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.1.0
[16:13:49.506] npm notice To update run: npm install -g npm@11.1.0
[16:13:49.507] npm notice
[16:13:49.584] Running "npm run build"
[16:13:49.706] 
[16:13:49.706] > 02.redux.shop@0.2.0 build
[16:13:49.706] > react-scripts build
[16:13:49.706] 
[16:13:50.321] node:internal/modules/cjs/loader:646
[16:13:50.322]       throw e;
[16:13:50.322]       ^
[16:13:50.322] 
[16:13:50.322] Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './lib/tokenize' is not defined by "exports" in /vercel/path0/node_modules/postcss-safe-parser/node_modules/postcss/package.json
[16:13:50.322]     at exportsNotFound (node:internal/modules/esm/resolve:314:10)
[16:13:50.322]     at packageExportsResolve (node:internal/modules/esm/resolve:661:9)
[16:13:50.322]     at resolveExports (node:internal/modules/cjs/loader:639:36)
[16:13:50.322]     at Function._findPath (node:internal/modules/cjs/loader:728:31)
[16:13:50.322]     at Function._resolveFilename (node:internal/modules/cjs/loader:1211:27)
[16:13:50.322]     at Function._load (node:internal/modules/cjs/loader:1055:27)
[16:13:50.322]     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
[16:13:50.322]     at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
[16:13:50.327]     at Module.require (node:internal/modules/cjs/loader:1311:12)
[16:13:50.327]     at require (node:internal/modules/helpers:136:16) {
[16:13:50.327]   code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
[16:13:50.327] }
[16:13:50.327] 
[16:13:50.327] Node.js v22.14.0
[16:13:50.347] Error: Command "npm run build" exited with 1
[16:13:51.387] 

nvm install 22.14.0
nvm install 16.20.2
nvm use 16.20.2

nvm list