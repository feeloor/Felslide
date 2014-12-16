Felslide
========

A JQuery Slider / Accordion


<h2>Användningsområde</h2>
		<p>
			Felslide är en slags JQuery Slider/Accordion, den är gjort som ett plugin vilket gör det snabbt och enkelt för vem som helst att använda den på just din hemsida.
			Felslide är en slider som gör det möjligt att skriva en lite beskrivning/namn till varje bild för att enkelt förklara vad det är för bild och sedan har du funktionallitet att bara hovra över en bild för att ändra aktuell bild.
		</p>
		<h2>Instruktioner</h2>
		<p>
			- Börja med att hämta en kopia av JQuery vilket du kan göra <a href="http://jquery.com/">här</a><br>
			- Inkludera JQuery i ditt projekt genom att skriva till följande kodrad i "head": 
	
			<span style='border: 1px solid #999; padding: 5px; display: block; margin: 10px 0;'>
				&lt;script src="SÖKVÄG TILL DIN KOPIA AV JQUERY"></script>
			</span>

			- Gå sedan vidare med att ladda ner Felslide <a href="https://github.com/feeloor/Felslide">här</a>
			- Inkludera Felslide genom att skriva följade kodrad i "head": 

			<span style='border: 1px solid #999; padding: 5px; display: block; margin: 10px 0;'>
				&lt;link rel='stylesheet' href='DIN KOPIA AV FELSLIDE CSS' type='text/css'>
				&lt;script src='SÖKVÄG TILL DIN KOPIA AV FELSLIDE JS'></script>
			</span>			

			- Nu är det bara att start upp pluginet via kommandot: 
				<span style='border: 1px solid #999; padding: 5px; display: block; margin: 10px 0;'>
					$("DIN SLIDER BOX").sliderInit();
				</span>

			- Sedan är det bara börja använda pluginet. 

			</p>
			<br>
			<hr>
			<br>
			<p>

			Sliden ni ser ovan använder följande HTML-kod: 

			<span style='border: 1px solid #999; padding: 5px; display: block; margin: 10px 0;'>
				&lt;div class='slider-background'><br>
					<br>
					&lt;h2>Felix Slider&lt;/h2><br>
					<br>
					&lt;div class='slider'><br>
						&lt;span class='description'>&lt;p class='rotate'>Bild Ett&lt;/p>&lt;/span><br>
						&lt;img src='../../img/felix.png'><br>
					&lt;/div><br>
					<br>
					&lt;div class='slider'><br>
						&lt;span class='description'>&lt;p class='rotate'>Bild Två&lt;/p>&lt;/span><br>
						&lt;img src='../../img/felix.png'><br>
					&lt;/div><br>
					<br>
					&lt;div class='slider'><br>
						&lt;span class='description'>&lt;p class='rotate'>Bild Tre&lt;/p>&lt;/span><br>
						&lt;img src='../../img/felix.png'><br>
					&lt;/div><br>
					<br>					
					&lt;div class='slider'><br>
						&lt;span class='description'>&lt;p class='rotate'>Bild Fyra&lt;/p>&lt;/span><br>
						&lt;img src='../../img/felix.png'><br>
					&lt;/div><br>
					<br>
					&lt;div class='slider'><br>
						&lt;span class='description'>&lt;p class='rotate'>Bild Fem&lt;/p>&lt;/span><br>
						&lt;img src='../../img/felix.png'><br>
					&lt;/div><br>
				&lt;/div><br>
			</span>

		</p>
