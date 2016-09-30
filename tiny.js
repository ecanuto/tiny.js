/*! tiny.js 0.1.0 by Everaldo Canuto - MIT License */
(function (doc) {
	$ = function (arg) {
		return new $.tiny(arg);
	};

	$.tiny = function(arg) {
		if (typeof arg === 'function') {
			complete = (doc.readyState === 'complete');
			return complete ? arg() : $(doc).on('DOMContentLoaded', arg);
		}

		element = (typeof arg === 'string') ? doc.querySelectorAll(arg) : [arg];
		[].push.apply(this, element);
	};

	$.fn = $.prototype = $.tiny.fn = $.tiny.prototype = {
		each: function (index, value) {
			[].forEach.call(this, index, value);
			return this;
		},
		on: function (type, listener) {
			return this.each(function (target) {
				target.addEventListener(type, listener);
			});
		},
		off: function (type, listener) {
			return this.each(function (target) {
				target.removeEventListener(type, listener);
			});
		}
	}
})(document);
