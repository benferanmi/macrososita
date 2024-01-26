jQuery(document).ready( function($) {
	/*
	function Init() {
		$("input[type=text]").focus(
				function() {
					$(this).attr("value", ( $(this).attr("value") == $(this).attr("title") ) ? "" : $(this).attr("value"));
				}).blur(function() {
					$(this).attr("value", ( $(this).attr("value") == "" ) ? $(this).attr("title") : $(this).attr("value"));
				});

		$("input[name='password']").focus(function() {
			$(this).attr("value", "");
		});

		$("#menu-sx .interno").hide();
		$("#menu-sx h3.opener").click(function() {
			$(this).css({ backgroundImage: $(this).css("backgroundImage").match('aperto') ? "url( /pda-theme/images/pda/menu-lat-chiuso.png )" : "url( /pda-theme/images/pda/menu-lat-aperto.png )" });
			$(this).toggleClass("open");
			$(this).next().slideToggle("slow");
			return false;
		});
		$("#menu-sx h3.open").click();

		if ($("#menu-sx a").hasClass("attivo")) {
			var selettore = $("a.attivo").parents("li").children("h3.opener");
			$(selettore).css({ backgroundImage:  "url( /pda-theme/images/pda/menu-lat-aperto.png )" });
			$(selettore).addClass("open");
			$(selettore).next().css({"display": "block"});
			return false;
		}

		$(".dialogo").dialog({ modal: true, draggable: false, resizable: false, minWidth: 600, dialogClass: "juidialog", buttons: { CHIUDI: function() {
					$(this).dialog("close");
				} } });

		$("a.cancella-bollettino").click(function() {
			id = $(this).attr("href");
			$(id + " input, " + id + " select").attr("value", "");
			return false;
		});

		$("a.copia-bollettino").click(function() {
			id = $(this).attr("href").replace(/^#bollettino\-/, "");
			$("#labtxtEseguitoDa" + id).attr("value", $("#labtxtEseguitoDa0").attr("value"));
			$("#labtxtIndirizzo" + id).attr("value", $("#labtxtIndirizzo0").attr("value"));
			$("#labtxtCAP" + id).attr("value", $("#labtxtCAP0").attr("value"));
			$("#labtxtCitta" + id).attr("value", $("#labtxtCitta0").attr("value"));
			$("#txtProvincia" + id).val($("#txtProvincia0 option:selected").val());
			return false;
		});

		$("a#chiudiMenu").click(function () {
			setViewHeaderState("closed", "click");
		});

		$("a#apriMenu").click(function () {
			setViewHeaderState("open", "click");
		});


	}

	function styleMenuFAQ() {
		var allFaqCat = "";
		var arrayFaq = $("#menu-sx.pda-asset-category-list-container ul li h3");
		if (arrayFaq != undefined) {
			$(arrayFaq).each(function(index) {
				if ($(this).text() == "Tutte le faq") {
					allFaqCat = $(this);
				}
			});
		}

		var resetFaq = $("#menu-sx.pda-asset-category-list-container ul").html();

		if (resetFaq != undefined && !resetFaq.contains("open")) {
			$(allFaqCat).addClass("open");
		}
	}

	function styleMenuNews() {
		var allNewsCat = "";
		var arrayNews = $("#menu-sx.pda-asset-category-list-container ul li h3");
		if (arrayNews != undefined) {
			$(arrayNews).each(function(index) {
				if ($(this).text() == "Tutte le news") {
					allNewsCat = $(this);
				}
			});
		}

		var resetNews = $("#menu-sx.pda-asset-category-list-container ul").html();

		if (resetNews != undefined && !resetNews.contains("open")) {
			$(allNewsCat).addClass("open");
		}
	}

	function otherFunctions() {
		styleMenuFAQ();
		styleMenuNews();
	}

	$(document).ready(Init, initViewHeaderState(), otherFunctions());
	*/

	/**************************************************************************\
	 START COOKIE
	 \**************************************************************************/
	function setCookie(key, value, expirationdate) {
		var c = key + "=" + escape(value) + ";";
		c += "path=/;";
		if (expirationdate)
			c += "expires=" + expirationdate.toUTCString() + ";";
		document.cookie = c;
	}

	function getCookieList() {
		var cl = document.cookie.split(";");
		var c = new Array();

		for (var i = 0; i < cl.length; i++) {
			var a = cl[i].split("=");
			if (a.length == 2)
				c[a[0].trim()] = escape(a[1].trim());
		}
		return c;
	}

	function getCookie(key) {
		return getCookieList()[key];
	}

	function getCookieExpirationDate() {
		var dt = new Date();
		dt.setFullYear(dt.getFullYear() + 1);
		return dt;
	}


	function initViewHeaderState() {
		var cs = getCookie("PDA_viewHeader");
		if (cs == undefined) {
			cs = "open";
		}
		setViewHeaderState(cs);
	}

	function setViewHeaderState(s, origin) {
		setCookie("PDA_viewHeader", s, getCookieExpirationDate());

		if (s == "open") {
			openMenu(origin);
		} else {
			closeMenu(origin);
		}
	}

	function openMenu( origin ) {
		$( "#appsimplemenu" ).css( { "background-color" : "#4fb1d5" } );
		$( "#appsimplemenu div.contenitore" ).removeAttr( "style" );
		
		$("#visore-est").css("display", "block");

		$("a#apriMenu").css("display", "none");
		$("a#chiudiMenu").css("display", "block");
		
		$("#men-sez-est").css("display", "block");
	}

	function closeMenu( origin ) {
		$( "#appsimplemenu" ).removeAttr( "style" );
		$( "#appsimplemenu div.contenitore" ).css( { "min-height": "26px", height: "auto !important", height: "26px" } );
		
		$("a#apriMenu").css("display", "block");

		$("a#chiudiMenu").css("display", "none");
		$("#visore-est").css("display", "none");
		
		$("#men-sez-est").css("display", "none");
	}

	/**************************************************************************\
	 END COOKIE
	 \**************************************************************************/
	
	initViewHeaderState();
	
	$("a#chiudiMenu").click(function () {
		setViewHeaderState("closed", "click");
	});

	$("a#apriMenu").click(function () {
		setViewHeaderState("open", "click");
	});	
	
	
	
	$("#menu-sx .interno").hide();
	$("#menu-sx h3.opener").click(function() {
		$(this).css({ backgroundImage: $(this).css("backgroundImage").match('aperto') ? "url( /pda-theme/images/pda/menu-lat-chiuso.png )" : "url( /pda-theme/images/pda/menu-lat-aperto.png )" });
		$(this).toggleClass("open");
		$(this).next().slideToggle("slow");
		return false;
	});
	$("#menu-sx h3.open").click();

	if ($("#menu-sx a").hasClass("attivo")) {
		var selettore = $("a.attivo").parents("li").children("h3.opener");
		$(selettore).css({ backgroundImage:  "url( /pda-theme/images/pda/menu-lat-aperto.png )" });
		$(selettore).addClass("open");
		$(selettore).next().css({"display": "block"});
		return false;
	}
	
	
	$(".dialogo").dialog({ modal: true, draggable: false, resizable: false, minWidth: 600, dialogClass: "juidialog", buttons: { CHIUDI: function() {
				$(this).dialog("close");
			} } });

	$("a.cancella-bollettino").click(function() {
		id = $(this).attr("href");
		$(id + " input, " + id + " select").attr("value", "");
		return false;
	});

	$("a.copia-bollettino").click(function() {
		id = $(this).attr("href").replace(/^#bollettino\-/, "");
		$("#labtxtEseguitoDa" + id).attr("value", $("#labtxtEseguitoDa0").attr("value"));
		$("#labtxtIndirizzo" + id).attr("value", $("#labtxtIndirizzo0").attr("value"));
		$("#labtxtCAP" + id).attr("value", $("#labtxtCAP0").attr("value"));
		$("#labtxtCitta" + id).attr("value", $("#labtxtCitta0").attr("value"));
		$("#txtProvincia" + id).val($("#txtProvincia0 option:selected").val());
		return false;
	});	
} );