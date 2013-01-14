/*
 * Title:           Play Sound
 * Description:     HTML5 Audio with Flash fallback | jQuery plugin
 *
 * Author:          Pierre-Henry Soria <ph7software@gmail.com>
 * Copyright:       (c) 2013, Pierre-Henry Soria. All Rights Reserved.
 * License:         MIT License (http://opensource.org/licenses/mit-license.php)
 */

(function($)
{
    jQuery.sound = {

        play: function()
        {
            return jQuery('<audio style="display:none" autoplay="autoplay" src="' + arguments[0] + '" /><embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"></audio>').appendTo('body');
        }

    };
})(jQuery);
