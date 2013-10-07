//-------------------------------------------
// Underscore-escapist.js code starts here

// Replace _.escape with escapist.attr
(function() {

    // this lib must be loaded after underscore.js
    if (typeof _ === 'undefined' || typeof _.escape === 'undefined') {
        console.log('ERROR - Underscore.js not found. Load underscore.js before loading underscore-escapist.js');
        return;
    }

    // make sure escapist.js is loaded. (It is if we're using the full build.)
    if (typeof escapist === 'undefined') {
        console.log('ERROR - Escapist.js not found. Load the full "dist/" build of underscore-escapist.js.');
        return;
    }

    // save original _.escape function
    _.originalEscape = _.escape;

    // use escapist's attr escape function instead of underscore's
    _.escape = escapist.attr;

})();
