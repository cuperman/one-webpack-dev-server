# One webpack-dev-server

Run multiple component apps from a single webpack-dev-server

## It's easy to start it up

Use npm to install dependencies and start the dev server

```bash
npm install
npm start
```

Then connect to [http://localhost:8080](http://localhost:8080)

## Add a project with a symlink

Add a symlink to your project in the links directory:

```bash
cd links
ln -s ~/git/some-repo
```

Then connect to [http://localhost:8080/some-repo](http://localhost:8080/some-repo)

## Dependency management

All projects have access to node modules installed in the root (this repo), but unique dependencies can be installed in each project. Node modules are loaded from the root and the project node_module directories.

```bash
# allow react to be used in all projects
npm install --save react

# install lodash to a specific project
cd links/some-repo
npm install --save lodash
```
