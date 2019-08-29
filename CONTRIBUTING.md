**Steps to contribute**

1) Fork the project and clone.
2) Create folder for your function in this [folder](https://github.com/JoshK2/jotils/tree/master/src/components), name the folder and the function file in lower case, and the function with upper case.
See example of naming in this folder [folder](https://github.com/JoshK2/jotils/tree/master/src/components/letter-count).
3) The function need to be exported with index file inside the folder function, so create index.ts file to export your function. (NOT USE EXPORT DEFAULT)
3) Run `npm run createindexfile` to generate the main index.ts file in components folder that export all the functions.
4) Run `npm run build` to generate the build folder folder.
5) Run `npm run test` to check the functions.
6) Share with the community by submitting a PR.
