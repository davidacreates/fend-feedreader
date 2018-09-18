// this is the test file for jasmine for my application

$(
  (function() {
    // start the RSS feed test suite

    describe('RSS Feeds', () => {
      // test to make sure the allfeeds variable has been defined and is not empty
      it('are defined', () => {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      // test that loops through each feed and makes sure the url is defined and not empty
      it('url defined', () => {
        for (const feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      });

      // test that loops through each feed and makes sure it has a name defined and is not empty
      it('name defined', () => {
        for (const feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        }
      });
    });

    // start the menu test suite

    describe('The Menu', () => {
      // test to make sure the menu element is hidden by default
      it('menu hidden by default', () => {
        const body = document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });

      // test to make sure the menu hides/reveals when the menu icon is clicked.
      it('menu change visibility on click', () => {
        const body = document.querySelector('body');
        const menuIcon = document.querySelector('.menu-icon-link');

        menuIcon.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);

        menuIcon.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });
    });

    // start initial entries test suite

    describe('Initial Entries', () => {
      // test that makes sure the loadFeed function is working properly. make sure it is called and completes its task and that there is at least one entry in the feed.
      let feedLength;
      beforeEach(done => {
        loadFeed(0, () => {
          feedLength = document.querySelectorAll('.feed .entry').length;
          done();
        });
      });
      it('does not have zero entries', done => {
        expect(feedLength).toBeGreaterThan(0);
        done();
      });
    });

    // start new feed selection test suite
    describe('New Feed Selection', () => {
      // test to make sure when a new feed is loaded when the content is actually updated.
      let feed1;
      let feed2;

      beforeEach(done => {
        loadFeed(0, () => {
          feed1 = document.querySelector('.feed').innerHTML;
          loadFeed(1, () => {
            feed2 = document.querySelector('.feed').innerHTML;
            done();
          });
        });
      });
      it('content changes', () => {
        expect(feed1).not.toBe(feed2);
      });
    });
  })()
);
