# @isayme/eslint-config

ESLint 支持 [共享配置](https://eslint.org/docs/developer-guide/shareable-configs)

# 如何使用

## Typescript

安装依赖:

```
npm i --save-dev eslint \
  typescript \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier
```

安装 `npm i --save-dev @isayme/eslint-config`

```
// 你的 .eslintrc
{
  "root": true,
  "extends": "@isayme"
}
```
