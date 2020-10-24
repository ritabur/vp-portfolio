* ~~mobile navbar~~
* ~~change font to latin extended~~
* ~~favicon~~
* ~~audio images in Audio section?~~
* ~~featured audio in homepage~~
* ~~breadcrumbs/back~~
* ~~"shopping-list" in trainings and audio~~
* ~~extra pages for every training/audio~~
* ~~404~~
* ~~fix namings e.g. audio1~~
* ~~FIX mobile menu overlay!~~
* ~~fix e2e cypress test running on CI~~
* ~~post sorting from newest~~
* ~~url with LT alphabet parsed by og parsers (clean accents)~~
* ~~Trainings/Contact => template like about (without photo, without list)~~
* ~~add photo ownership field for posts and render in UI below photo~~
* ~~update project info in package.json~~
* ~~styles for markup typography~~(?)
* ~~fix audio gallery label/name styling for mobile (long titles)~~
* ~~fix footer column/title styles (one line vs two lines)~~
* ~~story in story-list clickable on all story not just titles~~
* ~~resolution of audio list photos (pixelated)~~
* ~~comments inside story/training/audio entry~~
* localization https://github.com/netlify/netlify-cms/pull/4139
* V?: meta description for SEO ranking
* V?: hrefs in posts target=blank?
* V?: go through SEO
* fix/test file uploads as part of markdown file links
* test on different browsers/devices
* manual post sorting-dragging
* add pageview tracking
* Play icon for LRT links in post
* iframe from LRT or audioplayer (?): fallback image for homepage (?)
* don't render mobile navbar on desktop and desktop navbar on mobile
* move single pages e.g. about from templates to pages https://youtu.be/Y8PXMbr0Kqo?t=524
* styles for admin (multiple issues listed in cms.js)
* a11y
* TS
* transitions for mobile menu and pages
* add more e2e tests
* rethink firestore email notifications (node > 8, will stop working on Mar 15, 2021) https://stackoverflow.com/questions/63932639/400-billing-account-for-project-is-not-found-billing-must-be-enabled-for-activa
---
* built-in audio player
---
after domain change:
* update siteUrl in:
    * gatsby-config
    * functions/index.js
---
for "release":
* change sender email and pass in firebase (more info in functions/.env)
