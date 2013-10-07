/*
    underscore-escapist.js tests

    Some of these tests are based on the original Reform javascript tests and
    the unit tests from escapist.js.
*/

//------------------------------
// escape.html() tests

module('Underscore-escapist.js html()', {});

test( "_.escape() doesn't escape safe HTML attribute chars", function() {
    var src = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321',
        result = _.escape(src);

    equal(result, src);
});

test( "_.escape() escapes 'big 6' evil chars, plus slash & backslash", function() {
    var src = '<>&\'"/\\',
        expected = '&#60;&#62;&#38;&#39;&#34;&#47;&#92;',
        result = _.escape(src);

    equal(result, expected);
});

test( "_.escape() escapes all punctuation (incl. space, comma and period)", function() {
    var src = ' ,.`~!@#$%^&*()_+=-{}|\\][:;\'/?><"',
        expected = '&#32;&#44;&#46;&#96;&#126;&#33;&#64;&#35;&#36;&#37;&#94;&#38;&#42;&#40;&#41;&#95;&#43;&#61;&#45;&#123;&#125;&#124;&#92;&#93;&#91;&#58;&#59;&#39;&#47;&#63;&#62;&#60;&#34;',
        result = _.escape(src);

    equal(result, expected);
});

test( "_.escape() escapes all control chars, 0-31", function() {
    var src = '',
        expected = '',
        result;

    for (var i = 0; i <= 31; i++) {
        src += String.fromCharCode(i);
        expected += '&#' + i + ';';
    }

    result = _.escape(src);
    equal(result, expected);
});

test( "_.escape() escapes all unicode chars, 127 - 0xFFFF", function() {
    var src = '',
        expected = '',
        result, low, high,
        breakpoints = [127, 10000, 20000, 30000, 40000, 50000, 60000, 0xFFFF];

    for (var point = 0; point < breakpoints.length - 1; point++) {
        low = breakpoints[point];
        high = breakpoints[point + 1];
        console.log('range = ' + low + ' - ' + high);

        for (var i = low; i <= high; i++) {
            src += String.fromCharCode(i);
            expected += '&#' + i + ';';
        }

    result = _.escape(src);
        equal(result, expected);
    }
});

