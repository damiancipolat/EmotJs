/*

	EMOTJS v1.0
	Creado por Damian Cipolat
	
	damian.cipolat@gmail.com
	damiancipolat.com.ar

*/


var base_iconos = [
			{emot:';)',img:'guiño.png'},
			{emot:':/',img:'wait.png'},
			{emot:':(',img:'triste.png'},
			{emot:':p',img:'lengua.png'},
			{emot:':P',img:'lengua.png'},
			{emot:':o',img:'sorpresa.png'},	
			{emot:':O',img:'sorpresa.png'},
			{emot:':D',img:'contento.png'},
			{emot:':d',img:'contento.png'},	
			{emot:':)',img:'feliz.png'},
			{emot:'<3',img:'corazon.png'},
			{emot:'[ok]',img:'ok.png'},
			{emot:'[!]',img:'exclamacion.png'},
			{emot:'[error]',img:'error.png'},
			{emot:'[sol]',img:'sol.png'},
			{emot:'[bug]',img:'bug.png'},
			{emot:'[medalla]',img:'medalla.png'},
			{emot:'[*]',img:'asterisco.png'},
			{emot:'[star]',img:'star.png'},
			{emot:'[key]',img:'key.png'},
			{emot:'[lluvia]',img:'lluvia.png'},		
			{emot:'[nube]',img:'lluvia.png'},
			{emot:'[relampago]',img:'relampago.png'},
			{emot:'[mundo]',img:'relampago.png'},
			{emot:'[nublado]',img:'nublado.png'},
                   ];

function listar_emoticones()
{
	var html = "";
	
	for (var i=0;i<=base_iconos.length-1;i++)
	{
		var base       = base_iconos[i];		
		var html_icono = "<img src='"+base.img+"'>";
		
		html = html + base.emot +" : "+html_icono+"<br>";
	}
	
	return html;	
}

//Agrega al objeto string el metodo replaceAll
String.prototype.replaceAll = function(str1, str2, ignore) 
{
	return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}


function reemplazar_emot_text(texto,emot_base)
{
	var html_icono = "<img src='"+emot_base.img+"'>";
	
	texto = texto.replaceAll(emot_base.emot, html_icono);
	//texto = replaceAll(texto,emot_base.emot,emot_base.icono);
	
	return texto;
}

function procesar_texto_emoticones(texto)
{
	for (var i=0;i<=base_iconos.length-1;i++)
	{
		var base  = base_iconos[i];
		
		texto = reemplazar_emot_text(texto,base);
	}

	return texto;
}