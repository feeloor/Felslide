Felslide
========

A JQuery Slider / Accordion


Användningsområde
----------------
		
Felslide är en slags JQuery Slider/Accordion, den är gjort som ett plugin vilket gör det snabbt och enkelt för vem som helst att använda den på just din hemsida.
Felslide är en slider som gör det möjligt att skriva en lite beskrivning/namn till varje bild för att enkelt förklara vad det är för bild och sedan har du funktionallitet att bara hovra över en bild för att ändra aktuell bild.

Instruktioner
-------------

- Börja med att hämta en kopia av JQuery vilket du kan göra <a href="http://jquery.com/">här</a><br>
- Inkludera JQuery i ditt projekt genom att skriva till följande kodrad i "head": 

	<script src="SÖKVÄG TILL DIN KOPIA AV JQUERY"></script>

- Gå sedan vidare med att ladda ner Felslide <a href="https://github.com/feeloor/Felslide">här</a>
- Inkludera Felslide genom att skriva följade kodrad i "head": 

	<link rel='stylesheet' href='DIN KOPIA AV FELSLIDE CSS' type='text/css'>
	<script src='SÖKVÄG TILL DIN KOPIA AV FELSLIDE JS'></script>		

- Nu är det bara att start upp pluginet via kommandot: 
	$("DIN SLIDER BOX").sliderInit();

- Sedan är det bara börja använda pluginet. 


Exempel slider: 
---------------


	<div class='slider-background'>

		<h2>Felix Slider</h2>

		<div class='slider'>
			<span class='description'><p class='rotate'>Bild Ett</p></span>
			<img src='../../img/felix.png'>
		</div>
		
		<div class='slider'>
			<span class='description'><p class='rotate'>Bild Två</p></span>
			<img src='../../img/felix.png'>
		</div>

		<div class='slider'>
			<span class='description'><p class='rotate'>Bild Tre</p></span>
			<img src='../../img/felix.png'>
		</div>
		
		<div class='slider'>
			<span class='description'><p class='rotate'>Bild Fyra</p></span>	
			<img src='../../img/felix.png'>
		</div>
		<div class='slider'>
			<span class='description'><p class='rotate'>Bild Fem</p></span>	
			<img src='../../img/felix.png'>
		</div>
	</div>
