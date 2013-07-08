var rework = require('rework')
  , noMedia = require('..')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture(name) {
  return read('test/fixtures/' + name + '.css', 'utf8')
    .trim()
    .replace(/\r/g, '');
}

describe('rework-no-media', function(){

  it('should remove general media queries', function() {
    rework(fixture('general'))
      .use(noMedia())
      .toString()
      .should.equal(fixture('general.out'));
  });

  it('should skip print media queries by default', function() {
    rework(fixture('print'))
      .use(noMedia())
      .toString()
      .should.equal(fixture('print.keep.out'));
  });

  it('should skip print media queries by option', function() {
    rework(fixture('print'))
      .use(noMedia({
        skipPrint: true
      }))
      .toString()
      .should.equal(fixture('print.keep.out'));
  });

  it('should not skip print media queries by option', function() {
    rework(fixture('print'))
      .use(noMedia({
        skipPrint: false
      }))
      .toString()
      .should.equal(fixture('print.noKeep.out'));
  });

});

