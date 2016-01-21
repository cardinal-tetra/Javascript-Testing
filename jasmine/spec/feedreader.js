/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a url defined and not empty', function() {
            for (var i = 0, j = allFeeds.length; i < j; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a name defined and not empty', function() {
            for (var i = 0, j = allFeeds.length; i < j; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function() {
        // save some useful variables
        var menuIcon = $('.menu-icon-link');
        var clickMenuIcon = function() { menuIcon.click() };
        /* test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
                // the body begins as class='menu-hidden' and this causes a specific css selector to apply to '.slide-menu' causing it to be offscreen, so we just need to test that the body has class='menu-hidden' when we start off
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
        it('changes visibility when clicked', function() {
            // since the slide-menu is hidden on default we click it to display and check to see that it is no longer class='menu-hidden'
            setTimeout(clickMenuIcon(), 1000);
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // now that the slide-menu is displayed we click to hide it and check to see it is class='menu-hidden'
            setTimeout(clickMenuIcon(), 2000);
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    

    describe('Initial Entries', function() {
        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
            
        it('should have at least one entry', function() {
        expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });
    });


    describe('New Feed Selection', function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        
        // declare some useful variables to save the html of our feeds
        var firstFeed,
            secondFeed;
        
        // let's save a value to firstFeed, and make sure the call to loadFeed is completed before we move on to secondFeed
        beforeEach(function(done) {
            loadFeed(1, function() {
                firstFeed = $('.feed').html();
                done();
            });
        });
        
        // now within our 'it' call we will change the feed, save its content, then make a comparison in our expectation call
        it ('changes content', function(done) {
            loadFeed(3, function() {
                secondFeed = $('.feed').html();
                expect(firstFeed).not.toBe(secondFeed);
                done();
            });
        });
    });
}());
