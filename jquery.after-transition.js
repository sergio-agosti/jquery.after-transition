(function($) {
    $.fn.afterTransition = function(callback) {
        return this.each(function() {
            var domEl = this,
                $this = $(this),
                delay = 0;
            
            // let's look for the 'transition-duration' CSS property on the element
            delay = $this.css('-webkit-transition-duration') ||
                    $this.css(   '-moz-transition-duration') ||
                    $this.css(    '-ms-transition-duration') ||
                    $this.css(     '-o-transition-duration') ||
                    $this.css(        'transition-duration');
            // if something is found, we check if it contains the string 'ms':
            // if not, the duration is expressed in seconds, and therefore we need
            // to multiply it by 1000 to get the milliseconds
            delay = delay ? (parseFloat(delay) * (delay.indexOf('ms') === -1 ? 1000 : 1)) : 0;
            // we can now call the callback function after 'delay' millisconds
            setTimeout(function() { callback.call(domEl) }, delay);
        });
    };
})(jQuery);