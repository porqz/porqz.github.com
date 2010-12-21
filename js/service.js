window[/*@cc_on'attachEvent'||@*/'addEventListener'](/*@cc_on'on'+@*/'load', function() {
	var mario = document.getElementById("mario"),
			land = document.getElementById("land"),
			
			mario_sprite_size = 80,
			mario_sprites_count = 3,
			mario_current_sprite_number = 0,
			position_x = 0,

			animator = setInterval(function() {
				if (mario_current_sprite_number == mario_sprites_count - 1) 
					mario_current_sprite_number = 0;
				else
					mario_current_sprite_number = mario_current_sprite_number + 1;

				position_x = (position_x > document.body.clientWidth) ? -15 : position_x + 15;

				mario.style.backgroundPosition = "0 -" + mario_current_sprite_number * mario_sprite_size + "px";
				land.style.backgroundPosition = -position_x + "px 0";
			}, 90);
}, false);

