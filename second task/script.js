onload = function() {
  var theLinearGauge = new wijmo.gauge.LinearGauge('#theLinearGauge', {
    min: 0,
    max: 100,
    value: 45,
    showText: 'Value',
    isReadOnly: false,
    thumbSize: 25,
    step: 5,
    valueChanged: function() {
      theRadialGauge.value = theLinearGauge.value;
      theBulletGraph.value = theLinearGauge.value;
    }
  });

  var theRadialGauge = new wijmo.gauge.RadialGauge('#theRadialGauge', {
    min: 0,
    max: 100,
    value: 45,
    showText: 'Value',
    isReadOnly: false,
    thumbSize: 15,
    step: 5,
    valueChanged: function() {
      theLinearGauge.value = theRadialGauge.value;
      theBulletGraph.value = theRadialGauge.value;
    }
  });

  var theBulletGraph = new wijmo.gauge.BulletGraph('#theBulletGraph', {
    min: 0,
    max: 100,
    value: 45,
    target: 100,
    bad: 40,
    good: 60,
    isReadOnly: false,
    step: 5,
    thumbSize: 25,
    showText: 'Value',
    ranges: [
      { min: 0, max: 40, color: 'red' },
      { min: 40, max: 60, color: 'yellow' },
      { min: 60, max: 100, color: 'green' }
    ],
    valueChanged: function() {
      theLinearGauge.value = theBulletGraph.value;
      theRadialGauge.value = theBulletGraph.value;
    }
  });
  
  theLinearGauge.face.thickness = .5;
  theLinearGauge.pointer.thickness = .5;
  theRadialGauge.face.thickness = .15;
  theRadialGauge.pointer.thickness = .15;
  theBulletGraph.face.thickness = .05;
  theBulletGraph.pointer.thickness = .5;
}


