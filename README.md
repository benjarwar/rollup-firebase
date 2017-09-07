# Missing exports error with Rollup and Firebase

**Filed issue: [https://github.com/rollup/rollup/issues/1616](https://github.com/rollup/rollup/issues/1616)**

I'm attempting to import the [Firebase library](https://www.npmjs.com/package/firebase) using Rollup. On `rollup -c` compilation, I get the following error:

```
(!) Missing exports
https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module
commonjs-proxy:/Users/benjarwar/Sites/rollup-firebase/node_modules/firebase/utils/shims.js
default is not exported by node_modules/firebase/utils/shims.js
1: import * as shims from "/Users/benjarwar/Sites/rollup-firebase/node_modules/firebase/utils/shims.js"; export default ( shims && shims['default'] ) || shims;
```

I'm utilizing the [rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs) and [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve) libraries to resolve the dependency. I've attempted to follow the [troubleshooting help for missing exports](https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module) and added [custom `namedExports` to my config](https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports):

```
    commonjs({
      namedExports: {
        'node_modules/firebase/utils/shims.js': [ 'default' ]
      }
    })
```

...but it doesn't solve the issue. Any assistance appreciated!

