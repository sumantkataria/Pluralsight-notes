1. npm version major.minor.patch
    - Increments version of project
    - After that run "git tag" & "git show v1.0.2" will show package.json
2. package.json -> repository - type & URL
3. pre & post hooks help in pre & post tasks(added in scripts) - used for organization of execution.
    - "pretest"/"presumant"
    - "posttest"/"postsumant"
4. script(package.json) -> "&&" means Stop in errors, "&" means run parallelly
5. "watch" -> script watches
6. npm start
7. npm stop
8. npm init -y -> command creates package.json with default values
9. node_modules/.bin/abc -> abc can be accessed directly
10. npm install -lodash -D -> installs as a dev dependency
11. npm install -h -> lists all the options
12. npm help install -> helps in the topics
13. package.json ->
    - track dependencies
    - create script
14. package-lock.json -> pretty important file as it helps locking the dependencies that gets developed while creating the project(& not your co-worker)(helps installing the exact same versions on your co-worker's machine)(package-lock.json overrides package.json when "npm i" is called)
15. npm list --depth 0 --long/--json/--parseable/--dev/--prod -> this command lists all the depenedencies with details
    - -g flag lists global dependencies
16. npm install lodash@">=1.1.0 <1.4.0 -> it will install version greater than 1.1.0 & less than 1.4.0
17. npm install lodash@1.1.0 --save-exact -> this will install exact version
18. tilde(~) sign in package.json installs the minor latest version
19. npm update -> updates the latest version
20. npm get init-author-name
21. npm set init-license "MIT"
22. npm set init-author-name "Sumant"
23. npm config delete init-author-name
24. npm i gist:23r32rr32r32r32r -> installs package as a gist with a hash
25. npm search lodash -> searches registry
26. npm prune --production -> remove dev dependencies
27. npm repo lodash -> went to registry & search for package
28. npm i npm@latest -g -> installs latest npm package
29. npx jshint server.js -> used to run utilities which have a command line but we don't want to add scripts for them
30. npm audit -> tells auditing
31. npm username -> for adding user to cmd
32. npm publish -> publish project(can be added as alpha & beta too)
33. npm audit --parseable -> o change
34. npm audit > abc.txt -> added to text files
35. npm audit fix
    - --dry-run ->runs dry & tells what it will do
    - --only=dev|prod OR --production -> updates dev or prod issues
    - --package-lock-only --> only updates package.json
    - --force -> enables audit fix to ignore semantic versioning
36. git tag & git push & git push --tags -> pushes tag to git
37. devDependency - If someone is planning on downloading & using our module in their program, then the don't want/need to download & build the external test or documenttion framework that we use. In this case, it's best to map these additionl items as devDependency object.
38. depenency - When we are developing a package that will be used by other developers n thier program, then we should map it as dependency object.
    - dependencies are required to run, devDependencies only to develop