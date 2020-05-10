Tray.io Technical Test
======================

Visit the app: http://danielmason.com/tray-io-technical-test/

How to use:
-----------

Install dependencies 
```sh 
$ yarn
```

Run locally
```sh
yarn dev
```

Test static version
```sh
yarn serve
```

Build deployable version
```sh
yarn export:deployment
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
- Ran into a problem where console log wasn't working in Chrome, turned out to be a chrome bug so discounted this time
- Noticed that checkboxes didn't return useful values, and testing checkboxes with form submits doesn't seem to work the
  normal Enzyme way so had to improvise changing the dom manually.
- Skipped logic-less components as any test would be brittle and could give false negatives while working 
- More of the content should have been extracted from the app itself
- Spent a long time post test making sure it'd work in all three environments (dev, served locally, served on github.io)
  all of this should be discounted I mostly just did it for fun / learning. (.nojekyll, who knew!)
- Had to move index.test.tsx out to a separate folder as next considered it a page when building
- Could have used a theme provider for style but was overkill for this task
- I forgot to add the password validation until the last minute and because I made the early decision to rely on the
  browsers own validation messages, this means it gives bad feedback to the user. This could be fixed by updating the
  label, or using the validation api.  
