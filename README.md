# Project Overview

This is a basic web-based RSS feed reader application.


## How To Use

1. Download or clone the required assets here: https://github.com/orangemooncreative/fend-feedreader
2. No server is required. Just navigate to index.html on your local machine and open it in a web browser.
3. Jasmine will automatically run the test that are set up.
4. Scroll to the end of the page to see the results.
5. To view the test suite, open jasmine/spec/feedreader.js with your favorite text editor.

## Tests Implemented
- **RSS Feeds** test suite that includes:
  - a test to make sure the allfeeds variable has been defined and is not empty
  - a test that loops through each feed and makes sure the url is defined and not empty
  - test that loops through each feed and makes sure it has a name defined and is not empty
- **The Menu** test suite that includes:
  - a test to make sure the menu element is hidden by default
  - a test to make sure the menu hides/reveals when the menu icon is clicked
- **Initial Entries** test suite that includes:
  - a test that makes sure the loadFeed function is working properly and that there is at least one entry in the feed.
- **New Feed Selection** test suite that includes:
  - a test to make sure that when a new feed is loaded the content is actually updated.

## Dependencies

- Jasmine for Unit Testing

