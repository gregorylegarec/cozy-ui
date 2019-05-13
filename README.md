[![Styleguidist](https://img.shields.io/badge/react-Styleguidist-green.svg?style=flat)](https://cozy.github.io/cozy-ui/react/)
[![Styleguide](https://img.shields.io/badge/KSS-Styleguide-green.svg?style=flat)](https://cozy.github.io/cozy-ui/styleguide/)
[![Travis build status shield](https://img.shields.io/travis/cozy/cozy-ui.svg?branch=master)](https://travis-ci.org/cozy/cozy-ui)
[![NPM release version shield](https://img.shields.io/npm/v/cozy-ui.svg)](https://www.npmjs.com/package/cozy-ui)
[![Github Release version shield](https://img.shields.io/github/tag/cozy/cozy-ui.svg)](https://github.com/cozy/cozy-ui/releases)
[![NPM Licence shield](https://img.shields.io/npm/l/cozy-ui.svg)](https://github.com/cozy/cozy-ui/blob/master/LICENSE)

# Cozy UI

CSS classes and React components designed to build [Cozy](https://cozy.io/) apps.

If you plan to build a webapp to run on Cozy, you'll probably want to use a simple and elegant solution to build your interfaces without the mess of dealing with complex markup and CSS. Then Cozy UI is here for you!

## CSS Styleguide

Check the [styleguide](https://docs.cozy.io/cozy-ui/styleguide) to see all the variables, mixins, classes, utilities and how to use them with only CSS classes.

## React components

Check out [UI components](https://docs.cozy.io/cozy-ui/react/) to see how to use ready made (p)React components.

## Usage

### As a Components library

Add Cozy UI to a dependency to your project.
```
npm install cozy-ui
```

If you use the transpiled components (from `cozy-ui/transpiled/react`), you need to import the stylesheet (once):

```
import Button from 'cozy-ui/transpiled/react/Button'
import 'cozy-ui/transpiled/stylesheet.css'

<Button />
```

You're now ready to use [Cozy UI's (p)React components](https://docs.cozy.io/cozy-ui/react/)

### As a vanilla CSS library

The entire library is also available as a good ol’ CSS library. You can simply add it to your app by linking the distributed minified file.
```html
<link media="all" rel="stylesheet" href=“cozy-ui/dist/cozy-ui.min.css" />
```

## Develop on Cozy UI

If you want to customize or improve a Cozy UI Component, you need to clone a local version of the library, and declare it as a local symlink with `yarn link`.

```
git clone git@github.com:cozy/cozy-ui.git
cd cozy-ui
yarn link
```

Then in your application folder, you can link to your local Cozy UI

```
yarn link cozy-ui
yarn watch
```

All your modification in your local Cozy UI will now be visible in your application!

When sending a PR, if your changes have graphic impacts, it is useful for the reviewers if
you have deployed a version of the styleguidist containing your changes to your repository.

```
yarn build:doc:react
yarn deploy:doc --repo git@github.com:USERNAME/cozy-ui.git
```

## License

Cozy UI is developed by Cozy Cloud and distributed under the AGPL-3.0 license.


## What is Cozy?

![Cozy Logo](https://raw.github.com/cozy/cozy-setup/gh-pages/assets/images/happycloud.png)

[Cozy](https://cozy.io) is a platform that brings all your web services in the
same private space. With it, your web apps and your devices can share data
easily, providing you with a new experience. You can install Cozy on your own
hardware where no one profiles you.

## Community

You can reach the Cozy Community by:

* Chatting with us on IRC [#cozycloud](http://webchat.freenode.net/?channels=%23cozycloud) on irc.freenode.net
* Posting on our [Forum](https://forum.cozy.io)
* Posting issues on the [Github repos](https://github.com/cozy/)
* Mentioning us on [Twitter](https://twitter.com/cozycloud)

[stylus]: http://stylus-lang.com/
