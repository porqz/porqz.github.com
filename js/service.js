window[/*@cc_on'attachEvent'||@*/'addEventListener'](/*@cc_on'on'+@*/'load', function() {
	var mario = document.getElementById("mario"),
			land = document.getElementById("land"),
			
			mario_sprite_size = 32,
			mario_sprites_count = 4,
			mario_current_sprite_number = 0,

			land_position_x = 0,

			animator = setInterval(function() {
				if (mario_current_sprite_number == mario_sprites_count - 1) 
					mario_current_sprite_number = 0;
				else
					mario_current_sprite_number = mario_current_sprite_number + 1;

				land_position_x = (land_position_x > document.body.clientWidth) ? -10 : land_position_x + 10;

				mario.style.backgroundPosition = "0 -" + mario_current_sprite_number * mario_sprite_size + "px";
				land.style.backgroundPosition = -land_position_x + "px 128px";
			}, 90);
}, false);

