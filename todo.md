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
* ~~translate strings~~
* ~~translate meta keywords according to lang~~
* ~~localization https://github.com/netlify/netlify-cms/pull/4139~~
* ~~V: hrefs in posts target=blank~~
* ~~remove homepage mobile horizontal overflow~~
* ~~add twitter tags~~
* ~~update deps~~
* ~~fix font weight for FF~~
* ~~fix rel=canonical for SEO score~~
* fix firebase rules
* optimize images for mobile (check lighthouse)
* fix AppContext and translations.js
* don't render mobile navbar on desktop and desktop navbar on mobile - lazy load (?)
* add lint staged
* fix eslints
* add more e2e tests for language switching
* sourcemaps
* V?: add meta description for audio, stories and index SEO ranking
* V?: add default image for homepage og:image & twitter tag
* V?: go through SEO
* fix/test file uploads as part of markdown file links
* add pageview tracking
* test on different browsers/devices
* Play icon for LRT links in post
* iframe from LRT or audioplayer (?): fallback image for homepage (?)
* move single pages e.g. about from templates to pages https://youtu.be/Y8PXMbr0Kqo?t=524
* styles for admin (multiple issues listed in cms.js)
* manual post sorting-dragging
* a11y
* TS
* transitions for mobile menu and pages
* rethink firestore email notifications (node > 8, will stop working on Mar 15, 2021) https://stackoverflow.com/questions/63932639/400-billing-account-for-project-is-not-found-billing-must-be-enabled-for-activa
---
post-release:
* built-in audio player
* consider migrating to other cms
---
after domain change:
* update siteUrl in:
    * gatsby-config
    * functions/index.js
---
for "release":
* change sender email and pass in firebase (more info in functions/.env)
* report new page to google (manually?)
