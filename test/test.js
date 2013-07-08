var rework = require('rework')
  , noMedia = require('..')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture(name) {
  return read('test/fixtures/' + name + '.css', 'utf8')
    .trim()
    .replace('\r', '');
}

describe('rework-no-media', function(){
  it('should remove media queries', function() {
    rework(fixture('general'))
      .use(noMedia())
      .toString()
      .should.equal(fixture('general.out'));
  });
});

