# hyperfeed-exp

My in-progress attempt at setting up [hyperfeed](https://github.com/poga/hyperfeed) as a fully-frontend blob of javascript via [rollup.js](rollupjs.org). I don't know if this will be possible, and nobody has tried it yet (to my knowledge).

## Why?

The ability to host a decentralized RSS feed entirely on the client side could have some interesting applications. For example, a site could be made entirely within a feed like this, with the feed itself embedded within a webpage on any free/cheap hosting platform (assuming it allows Javascript). The entire 'site' could them be migrated/rehosted on any other page, by anybody who wishes to do so. It would essentally be a sort of version of [Beaker](https://beakerbrowser.com) Browser, minus the browser.

## Details

I'm using [this template](https://github.com/jlengstorf/learn-rollup) and trying to adapt it to fit my needs. It's proving to be slow and painful due to the ungodly number of dependencies needed (because node), but interesting anyway.

**UPDATE**: I'm putting this on hold for now, as there is a _lot_ of stuff to sift through. My `node_mmodules` folder is currently taking up 202MB and that is a lot of places for things to go wrong. I do plan on comming back to this at some point though.

If anyone has experience using rollup with huge amounts of node packages, I would be grateful for any advice on the topic.
