// window onload waits until all images are loaded
window.onload = function() {
    (function() {
        // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smarter-animating

        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    (function () {

        var canvas = document.getElementById('eating'),
            ctx = canvas.getContext('2d');

        var jack,
            jackImage = new Image(),
            jack_position_x = 200,
            jack_position_y = 240;

        jackImage.src = "assets/images/jack-eating.png";

        var food = new Image(),
            food_position_x = 160,
            food_position_y = 240;

        var requestID = undefined;

        var frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = 15,
            numberOfFrames = 11;

        function clear_canvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function jack_animation_loop() {

            tickCount += 1;

            // once tickcount > ticksperframe, we can update to the next frame
            if (tickCount > ticksPerFrame) {

                // set wait counter back to 0
                tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < (numberOfFrames - 1) ) {

                    // Go to the next frame
                    frameIndex += 1;

                } else {
                    // go back to the beginning
                    frameIndex = 0;
                }

                // if we are on frames 2+ get rid of food image
                if( frameIndex > 2 ) {
                    clear_canvas();
                    jack_render( frameIndex );

                } else {
                    // else, show food image
                    clear_canvas();
                    draw_food_image();
                    jack_render( frameIndex );
                }
            }

            // continue to loop
            requestID = window.requestAnimationFrame( jack_animation_loop );
        }

        function jack_render( frameIndex ) {

            /*
                x coordinates where to start clipping
                y coordinate where to start clipping
                width of clipped portion
                height of clipped portion
                x coordinate to place the image
                y coordinate to place the image
                width of image
                height of image
            */

            ctx.drawImage(
                jackImage,
                (frameIndex * 1045) / 11,
                0,
                95,
                120,
                jack_position_x,
                jack_position_y,
                95,
                120
            );

        }

        jack_static();
        function jack_static() {

            var jack_standing = new Image();
            jack_standing.src = "assets/images/jack-standing.png";

            jack_standing.onload = function() {
                ctx.drawImage( jack_standing, jack_position_x+5, jack_position_y+5 );
            };
        }

        // get selected food URL and x/y position
        function get_food_data() {

            var select = document.getElementById('food-select'),
                selected_option = select.options[select.selectedIndex];

            // new "food" image object src is selected value
            food.src = selected_option.value;

            // redefine food_position_x and y
            food_position_x = selected_option.getAttribute('data-x-value') || 160;
            food_position_y = selected_option.getAttribute('data-y-value') || 240;
        }


        // draw food image
        function draw_food_image() {

            ctx.globalCompositeOperation="destination-over";
            ctx.drawImage( food, food_position_x, food_position_y );
        }


        var animation_button_start = document.getElementById('start-animation');

        // start eating animation
        var food_form = document.getElementById('food-selector');
        food_form.addEventListener("submit", function( event ){

            event.preventDefault();

            animation_button_start.value = 'Change Food Item';

            get_food_data();

            frameIndex = 0;

            if (!requestID) {
                jack_animation_loop();
            }

        });

        // end animation
        document.getElementById('stop-animation').addEventListener('click', function() {

            if (requestID) {
                window.cancelAnimationFrame(requestID);
                requestID = undefined;
            }

            animation_button_start.value = 'Start Animation';

            frameIndex = 0;

            clear_canvas();
            jack_static();
        });

        // change background on submit
        var background_selector = document.getElementById('background-selector');
        background_selector.addEventListener('submit', function( event ) {

            event.preventDefault();

            var select = document.getElementById('background-select'),
                canvas_container = document.getElementById('canvas-container');

            // selected background url
            var background_url = select.options[select.selectedIndex].value;

            // change css for "canvas-container"
            canvas_container.style.backgroundImage = "url(" + background_url + ")";
        });

    } ());
};