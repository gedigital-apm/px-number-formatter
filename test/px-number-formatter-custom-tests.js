suite('px-number-formatter default zero format', function() {
  let formatter,
      formatterNoDisplay;

  suiteSetup(function() {
    formatter = document.getElementById('formatter');
    formatterNoDisplay = document.getElementById('formatterNoDisplay');
    formatter.set('value', 0);
    formatterNoDisplay.set('value', 0);
  });

  test('Check 0 format nodisplay', function() {
    assert.equal(formatterNoDisplay.formattedValue, '0');
  });
  test('Check 0 format', function() {
    assert.equal(formatter.targetElement.textContent, '0');
  });
});

suite('px-number-formatter default format', function() {
  let formatter,
      formatterNoDisplay;

  suiteSetup(function() {
    formatter = document.getElementById('formatter');
    formatterNoDisplay = document.getElementById('formatterNoDisplay');
    formatter.set('value', 1000);
    formatterNoDisplay.set('value', 1000);
  });

  test('Check formattedValue nodisplay', function() {
    assert.equal(formatterNoDisplay.formattedValue, '1,000');
  });
   test('Check formattedValue', function() {
    assert.equal(formatter.targetElement.textContent, '1,000');
  });
});

suite('px-number-formatter different format', function() {
  let formatter,
      formatterNoDisplay;

  suiteSetup(function() {
    formatter = document.getElementById('formatter');
    formatterNoDisplay = document.getElementById('formatterNoDisplay');
    formatter.set('format', '0.000');
    formatterNoDisplay.set('format', '0.000');
  });

  test('Check formattedValue nodisplay', function() {
    assert.equal(formatterNoDisplay.formattedValue, '1000.000');
  });
  test('Check formattedValue', function() {
    assert.equal(formatter.targetElement.textContent, '1000.000');
  });
});

suite('px-number-formatter currency', function() {
  let formatter,
      formatterNoDisplay;

  suiteSetup(function() {
    formatter = document.getElementById('formatter');
    formatterNoDisplay = document.getElementById('formatterNoDisplay');
    formatter.set('currency', true);
    formatterNoDisplay.set('currency', true);
  });

  test('Check formattedValue nodisplay', function() {
    assert.equal(formatterNoDisplay.formattedValue, '$1000.000');
  });
  test('Check formattedValue', function() {
    assert.equal(formatter.targetElement.textContent, '$1000.000');
  });
});

suite('px-number-formatter culture', function() {
  let formatter,
      formatterNoDisplay;

  suiteSetup(function() {
    formatter = document.getElementById('formatter');
    formatterNoDisplay = document.getElementById('formatterNoDisplay');
    formatter.set('culture', 'fr-FR');
    formatterNoDisplay.set('culture', 'fr-FR');
  });

  test('Check formattedValue nodisplay', function() {
    assert.equal(formatterNoDisplay.formattedValue, '1000,000€');
  });
  test('Check formattedValue', function() {
    assert.equal(formatter.targetElement.textContent, '1000,000€');
  });
});

suite('px-number-formatter NaN state', function() {
  let formatter,
      formatterNoDisplay;

  suiteSetup(function() {
    formatter = document.getElementById('formatter');
    formatterNoDisplay = document.getElementById('formatterNoDisplay');
    formatter.set('currency', false);
    formatter.set('value', null);
    formatterNoDisplay.set('currency', false);
    formatterNoDisplay.set('value', null);
  });

  test('Check formattedValue nodisplay', function() {
    assert.equal(formatterNoDisplay.formattedValue, '');
  });
  test('Check formattedValue', function() {
    assert.equal(formatter.targetElement.textContent, '');
  });
});

suite('px-number-formatter different zero format', function() {
  let formatter,
      formatterNoDisplay;

  suiteSetup(function() {
    formatter = document.getElementById('formatter');
    formatterNoDisplay = document.getElementById('formatterNoDisplay');
    formatter.set('zeroFormat', 'N/A');
    formatter.set('value', 0);
    formatterNoDisplay.set('zeroFormat', 'N/A');
    formatterNoDisplay.set('value', 0);
  });

  test('Check formattedValue nodisplay', function() {
    assert.equal(formatterNoDisplay.formattedValue, 'N/A');
  });
  test('Check formattedValue', function() {
    assert.equal(formatter.targetElement.textContent, 'N/A');
  });
});

suite('px-number-formatter unformat', function() {
  let formatter,
      formatterNoDisplay;

  suiteSetup(function() {
    formatter = document.getElementById('formatter');
    formatterNoDisplay = document.getElementById('formatterNoDisplay');
    formatter.set('unformat', '5.000,000');
    formatterNoDisplay.set('unformat', '5.000,000');
  });

  test('Check unformattedValue nodisplay', function() {
    assert.equal(formatterNoDisplay.unformattedValue, 5000);
  });
  test('Check unformattedValue', function() {
    assert.equal(formatter.unformattedValue, 5000);
  });
});

suite('px-number-formatter no format', function() {
  let fx,
      formatter,
      formatterNoDisplay;

  setup(function(done) {
    fx = fixture('noFormatFixture');
    flush(function() {
      formatter = Polymer.dom(fx.root).querySelector('px-number-formatter');
      formatter.value = 12398.49;
      formatter.format = 'NONE';

      formatterNoDisplay = Polymer.dom(fx.root).querySelector('px-number-formatter-no-display');
      formatterNoDisplay.value = 12398.49;
      formatterNoDisplay.format = 'NONE';

      done();
    });
  });

  test('Check value is not formatted if format="NONE"', function() {
    assert.equal(formatter.targetElement.textContent, '12398.49');
  });

  test('Check value is not formatted if format="NONE" nodisplay', function() {
    assert.equal(formatterNoDisplay.formattedValue, '12398.49');
  });
});
