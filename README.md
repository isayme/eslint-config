# @isayme/eslint-config

ESLint 支持 [共享配置](https://eslint.org/docs/developer-guide/shareable-configs)

# 如何使用

## Javascrip

安装依赖:

```
npm i --save-dev eslint \
  prettier \
  eslint-plugin-import \
  eslint-config-prettier
```

安装 `npm i --save-dev @isayme/eslint-config`

```
// 你的 .eslintrc
{
  "root": true,
  "extends": "@isayme/eslint-config/javascript"
}
```

## Typescript

安装依赖:

```
npm i --save-dev eslint \
  typescript \
  prettier \
  eslint-plugin-import \
  eslint-config-prettier \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin
```

安装 `npm i --save-dev @isayme/eslint-config`

```
// 你的 .eslintrc
{
  "root": true,
  "extends": "@isayme"
}
```
