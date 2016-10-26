/*! tiny.js 0.2.0 by Everaldo Canuto - MIT License */
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
		},
		hasClass: function(c) {
			return this[0].classList.contains(c);
		},
		addClass: function (c) {
			return this.each(function (t) {
				t.classList.add(c);
			});
		},
		removeClass: function (c) {
			return this.each(function (t) {
				t.classList.remove(c);
			});
		},
		toggleClass: function (c) {
			return this.each(function (t) {
				t.classList.toggle(c);
			});
		},
		style: function (p, v) {
			if (typeof v === 'undefined') {
				if (this.length == 0)
					return undefined;

				return window.getComputedStyle(this[0]).getPropertyValue(p);
			}

			return this.each(function (t) {
				t.style[p] = v;
			});
		}
	}
})(document);
