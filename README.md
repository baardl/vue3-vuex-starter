# vue3-vuex-starter

The project is following the State Management Pattern of Vuex as found on [Vuex(feb 2022)](https://vuex.vuejs.org/)  <br/>
An important concept is the concept of Action-Mutation-State ![Action-Mutation-State](https://vuex.vuejs.org/vuex.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## State and Modules

See https://vuex.vuejs.org/guide/modules.html

## Create project

See [vue-cli](https://cli.vuejs.org/)
``` 
sudo npm install -g @vue/cli
vue create <new-project>
```

## Testing

``` 
vue add unit-jest
npm install --save-dev @vue/test-utils
npm run test:unit
```
* Test Axios [PostList](./tests/unit/PostList.spec.js)

