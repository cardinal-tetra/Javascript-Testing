## Overview

### Files
The `css` and `fonts` folders contain styling for the application's aesthetics. The single page feedreader application itself is contained in `index.html` with links to scripts in the `js` folder (such as `app.js` which holds application logic) and the `jasmine` folder which houses the Jasmine library as well as `feedreader.js` wherein lie the suites of tests we have written to check the proper performance of the application.

### How to Use
The feedreader application can  be run simply by opening `index.html`. We can manually test its functionality by clicking on links, opening/closing the slide menu, and switching to different feeds. The main point of this project, however, is to demonstrate JavaScript testing. To the bottom of `index.html` are the results of tests run using the Jasmine library. When you have first opened the file there may appear to be a refreshing of the page- not to worry, it is just testing being carried out.

Jasmine should show all the tests being passed, but to examine more closely, open up    `jasmine/spec/feedreader.js` which contains the code for the various specs that have been run on `index.html`. `feedreader.js` contains a series of 'describe' and 'it' calls that are sequential to the tests shown on the main page.
