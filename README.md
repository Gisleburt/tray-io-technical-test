Tray.io Technical Test
======================

How to use:
-----------

Install dependencies 
```sh 
$ yarn
```

Run locally
```
yarn dev
```

Notes
-----

- Despite mocha docs saying otherwise, I had to explicitly tell it where to find the `.mocha.js` config.
- Using pre-commit to prevent bad commits
- Took input types from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
- There might be better ways to grab the forms arbitary inputs as an object, dipping into the DOM feels a little dirty,
  but it works
- Try to loosely use Atomic Design to organise but for such a small project its OTT
- Try to keep page tests flexible, but useful, so they aren't broken any time I want to make a small change 
