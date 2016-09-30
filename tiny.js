/*! tiny.js 0.1.0 by Everaldo Canuto - MIT License */
(function (d) {
	$ = function (a) {
		return new $.tiny(a);
	};

	$.tiny = function(a) {
		if (typeof a === 'function')
			return (d.readyState === 'complete') ? a() :
				$(d).on('DOMContentLoaded', a);

		[].push.apply(this,
			(typeof a === 'string') ? d.querySelectorAll(a) : [a]
		);
	};

	$.fn = $.prototype = $.tiny.prototype = {
		each: function (i, v) {
			[].forEach.call(this, i, v);
			return this;
		},
		on: function (e, f) {
			return this.each(function (t) {
				t.addEventListener(e, f);
			});
		},
		off: function (e, f) {
			return this.each(function (t) {
				t.removeEventListener(e, f);
			});
		}
	}
})(document);
