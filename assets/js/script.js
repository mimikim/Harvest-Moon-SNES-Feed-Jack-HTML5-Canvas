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

        var food = new Image(),
            food_position_x = 160,
            food_position_y = 240;

        var requestID = undefined;

        function clear_canvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function jack_animation_loop() {

            jack.update();
            jack.render();

            requestID = window.requestAnimationFrame( jack_animation_loop );
        }

        function sprite (options) {

            var that = {},
                frameIndex = 0,
                tickCount = 0,
                ticksPerFrame = options.ticksPerFrame || 0,
                numberOfFrames = options.numberOfFrames || 1;

            that.context = options.context;
            that.width = options.width;
            that.height = options.height;
            that.image = options.image;

            that.update = function () {

                tickCount += 1;

                if (tickCount > ticksPerFrame) {

                    tickCount = 0;

                    // If the current frame index is in range
                    if (frameIndex < numberOfFrames - 1) {
                        // Go to the next frame
                        frameIndex += 1;
                    } else {
                        frameIndex = 0;
                    }
                }
            };

            that.render = function () {

                // Clear the canvas
                clear_canvas();

                draw_food_image();

                // Draw the animation
                that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    jack_position_x,
                    jack_position_y,
                    that.width / numberOfFrames,
                    that.height
                );
            };

            return that;
        }

        // Create sprite
        jack = sprite({
            context: canvas.getContext("2d"),
            width: 1045,
            height: 120,
            image: jackImage,
            numberOfFrames: 11,
            ticksPerFrame: 10
        });

        jackImage.src = "assets/images/jack-eating.png";


        jack_static();
        function jack_static() {

            var jack_standing = new Image();
            jack_standing.src = "assets/images/jack-standing.png";

            jack_standing.onload = function() {
                ctx.drawImage( jack_standing, jack_position_x+5, jack_position_y+5 );
            };
        }

        // get selected food URL
        function get_food_url() {

            var select = document.getElementById('food-select');

            // new "food" image object src is selected value
            food.src = select.options[select.selectedIndex].value;
        }


        // draw food image
        function draw_food_image() {
            ctx.globalCompositeOperation="destination-over";
            ctx.drawImage( food, food_position_x, food_position_y );
        }


        var animation_button_start = document.getElementById('start-animation');

        // set up food form submit functions
        var food_form = document.getElementById('food-selector');
        food_form.addEventListener("submit", function( event ){

            event.preventDefault();

            animation_button_start.value = 'Change Food Item';

            get_food_url();

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