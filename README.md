# typescript + react 练手

## 开发环境
```
npm run devServer
npm run start
```
 
 
 ## 问题记录
 1、在ts中使用eslint
 声明 error  'xxx' is defined but never used  no-unused-vars
 
 fix:
 ```
 {
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn"
    }
}
 ```
 