(function(KUBE){
	"use strict";
	KUBE.LoadSingleton("/Library/FontAwesome",FontAwesome,['/Library/ExtendObject','/Library/ExtendRegExp','/Library/DomJack']);

	FontAwesome.prototype.toString = function(){ return '[object '+this.constructor.name+']' };

	function FontAwesome(){
		/*!
		 *  This class uses FontAwesome for its functionality.
		 *  KUBE.FontAwesome is a wrapper and provides an API to use FontAwesome from Javascript, along with allowing it to autoload.
		 *  Attribution for the CSS (contained in variable fontAwesomeMin) along with the font files (contained in ./FontAwesome) is below.
		 *  Font Awesome 4.0.3 by @davegandy - http://fontawesome.io - @fontawesome
		 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
		 */
		var CDNString = "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";
		var localPath = "Library/FontAwesome";
		var fontFaceString = "@font-face { \n\
			font-family: 'FontAwesome'; \n\
			src: url('%s/fontawesome-webfont.eot?v=4.0.3'); \n\
			src: url('%s/fontawesome-webfont.eot?#iefix&v=4.0.3') format('embedded-opentype'), url('%s/fontawesome-webfont.woff?v=4.0.3') format('woff'), url('%s/fontawesome-webfont.ttf?v=4.0.3') format('truetype'), url('%s/fontawesome-webfont.svg?v=4.0.3#fontawesomeregular') format('svg'); \n \
			font-weight: normal; \n \
			font-style: normal; \n \
		}\n";
		var fontAwesomeMin = ".fa{display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857142858em;text-align:center}.fa-ul{padding-left:0;margin-left:2.142857142857143em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.142857142857143em;width:2.142857142857143em;top:.14285714285714285em;text-align:center}.fa-li.fa-lg{left:-1.8571428571428572em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:spin 2s infinite linear;-moz-animation:spin 2s infinite linear;-o-animation:spin 2s infinite linear;animation:spin 2s infinite linear}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg)}100%{-moz-transform:rotate(359deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg)}100%{-o-transform:rotate(359deg)}}@-ms-keyframes spin{0%{-ms-transform:rotate(0deg)}100%{-ms-transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-ms-transform:rotate(270deg);-o-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0,mirror=1);-webkit-transform:scale(-1,1);-moz-transform:scale(-1,1);-ms-transform:scale(-1,1);-o-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2,mirror=1);-webkit-transform:scale(1,-1);-moz-transform:scale(1,-1);-ms-transform:scale(1,-1);-o-transform:scale(1,-1);transform:scale(1,-1)}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-asc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-desc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-reply-all:before{content:\"\\f122\"}.fa-mail-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}";
		var returnAPI = {};
		var fontAwesomeExtend = "" +
			".fae-10marginr:before{margin-right: 10px;} " +
			".fae-10marginl:before{margin-left: 10px;}" +
			".fae-5marginr:before{margin-right: 5px;}" +
			".fae-5marginl:before{margin-left: 5px;}" +
            ".fae-stupid{top: 2px; font-size: 80%;}" +
            ".fae-noaa{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;} ";
		var awesomeStore = {"glass":"&#xf000;","music":"&#xf001;","search":"&#xf002;","envelope-o":"&#xf003;","heart":"&#xf004;","star":"&#xf005;","star-o":"&#xf006;","user":"&#xf007;","film":"&#xf008;","th-large":"&#xf009;","th":"&#xf00a;","th-list":"&#xf00b;","check":"&#xf00c;","times":"&#xf00d;","search-plus":"&#xf00e;","search-minus":"&#xf010;","power-off":"&#xf011;","signal":"&#xf012;","cog":"&#xf013;","trash-o":"&#xf014;","home":"&#xf015;","file-o":"&#xf016;","clock-o":"&#xf017;","road":"&#xf018;","download":"&#xf019;","arrow-circle-o-down":"&#xf01a;","arrow-circle-o-up":"&#xf01b;","inbox":"&#xf01c;","play-circle-o":"&#xf01d;","repeat":"&#xf01e;","refresh":"&#xf021;","list-alt":"&#xf022;","lock":"&#xf023;","flag":"&#xf024;","headphones":"&#xf025;","volume-off":"&#xf026;","volume-down":"&#xf027;","volume-up":"&#xf028;","qrcode":"&#xf029;","barcode":"&#xf02a;","tag":"&#xf02b;","tags":"&#xf02c;","book":"&#xf02d;","bookmark":"&#xf02e;","print":"&#xf02f;","camera":"&#xf030;","font":"&#xf031;","bold":"&#xf032;","italic":"&#xf033;","text-height":"&#xf034;","text-width":"&#xf035;","align-left":"&#xf036;","align-center":"&#xf037;","align-right":"&#xf038;","align-justify":"&#xf039;","list":"&#xf03a;","outdent":"&#xf03b;","indent":"&#xf03c;","video-camera":"&#xf03d;","picture-o":"&#xf03e;","pencil":"&#xf040;","map-marker":"&#xf041;","adjust":"&#xf042;","tint":"&#xf043;","pencil-square-o":"&#xf044;","share-square-o":"&#xf045;","check-square-o":"&#xf046;","arrows":"&#xf047;","step-backward":"&#xf048;","fast-backward":"&#xf049;","backward":"&#xf04a;","play":"&#xf04b;","pause":"&#xf04c;","stop":"&#xf04d;","forward":"&#xf04e;","fast-forward":"&#xf050;","step-forward":"&#xf051;","eject":"&#xf052;","chevron-left":"&#xf053;","chevron-right":"&#xf054;","plus-circle":"&#xf055;","minus-circle":"&#xf056;","times-circle":"&#xf057;","check-circle":"&#xf058;","question-circle":"&#xf059;","info-circle":"&#xf05a;","crosshairs":"&#xf05b;","times-circle-o":"&#xf05c;","check-circle-o":"&#xf05d;","ban":"&#xf05e;","arrow-left":"&#xf060;","arrow-right":"&#xf061;","arrow-up":"&#xf062;","arrow-down":"&#xf063;","share":"&#xf064;","expand":"&#xf065;","compress":"&#xf066;","plus":"&#xf067;","minus":"&#xf068;","asterisk":"&#xf069;","exclamation-circle":"&#xf06a;","gift":"&#xf06b;","leaf":"&#xf06c;","fire":"&#xf06d;","eye":"&#xf06e;","eye-slash":"&#xf070;","exclamation-triangle":"&#xf071;","plane":"&#xf072;","calendar":"&#xf073;","random":"&#xf074;","comment":"&#xf075;","magnet":"&#xf076;","chevron-up":"&#xf077;","chevron-down":"&#xf078;","retweet":"&#xf079;","shopping-cart":"&#xf07a;","folder":"&#xf07b;","folder-open":"&#xf07c;","arrows-v":"&#xf07d;","arrows-h":"&#xf07e;","bar-chart-o":"&#xf080;","twitter-square":"&#xf081;","facebook-square":"&#xf082;","camera-retro":"&#xf083;","key":"&#xf084;","cogs":"&#xf085;","comments":"&#xf086;","thumbs-o-up":"&#xf087;","thumbs-o-down":"&#xf088;","star-half":"&#xf089;","heart-o":"&#xf08a;","sign-out":"&#xf08b;","linkedin-square":"&#xf08c;","thumb-tack":"&#xf08d;","external-link":"&#xf08e;","sign-in":"&#xf090;","trophy":"&#xf091;","github-square":"&#xf092;","upload":"&#xf093;","lemon-o":"&#xf094;","phone":"&#xf095;","square-o":"&#xf096;","bookmark-o":"&#xf097;","phone-square":"&#xf098;","twitter":"&#xf099;","facebook":"&#xf09a;","github":"&#xf09b;","unlock":"&#xf09c;","credit-card":"&#xf09d;","rss":"&#xf09e;","hdd-o":"&#xf0a0;","bullhorn":"&#xf0a1;","bell":"&#xf0f3;","certificate":"&#xf0a3;","hand-o-right":"&#xf0a4;","hand-o-left":"&#xf0a5;","hand-o-up":"&#xf0a6;","hand-o-down":"&#xf0a7;","arrow-circle-left":"&#xf0a8;","arrow-circle-right":"&#xf0a9;","arrow-circle-up":"&#xf0aa;","arrow-circle-down":"&#xf0ab;","globe":"&#xf0ac;","wrench":"&#xf0ad;","tasks":"&#xf0ae;","filter":"&#xf0b0;","briefcase":"&#xf0b1;","arrows-alt":"&#xf0b2;","users":"&#xf0c0;","link":"&#xf0c1;","cloud":"&#xf0c2;","flask":"&#xf0c3;","scissors":"&#xf0c4;","files-o":"&#xf0c5;","paperclip":"&#xf0c6;","floppy-o":"&#xf0c7;","square":"&#xf0c8;","bars":"&#xf0c9;","list-ul":"&#xf0ca;","list-ol":"&#xf0cb;","strikethrough":"&#xf0cc;","underline":"&#xf0cd;","table":"&#xf0ce;","magic":"&#xf0d0;","truck":"&#xf0d1;","pinterest":"&#xf0d2;","pinterest-square":"&#xf0d3;","google-plus-square":"&#xf0d4;","google-plus":"&#xf0d5;","money":"&#xf0d6;","caret-down":"&#xf0d7;","caret-up":"&#xf0d8;","caret-left":"&#xf0d9;","caret-right":"&#xf0da;","columns":"&#xf0db;","sort":"&#xf0dc;","sort-asc":"&#xf0dd;","sort-desc":"&#xf0de;","envelope":"&#xf0e0;","linkedin":"&#xf0e1;","undo":"&#xf0e2;","gavel":"&#xf0e3;","tachometer":"&#xf0e4;","comment-o":"&#xf0e5;","comments-o":"&#xf0e6;","bolt":"&#xf0e7;","sitemap":"&#xf0e8;","umbrella":"&#xf0e9;","clipboard":"&#xf0ea;","lightbulb-o":"&#xf0eb;","exchange":"&#xf0ec;","cloud-download":"&#xf0ed;","cloud-upload":"&#xf0ee;","user-md":"&#xf0f0;","stethoscope":"&#xf0f1;","suitcase":"&#xf0f2;","bell-o":"&#xf0a2;","coffee":"&#xf0f4;","cutlery":"&#xf0f5;","file-text-o":"&#xf0f6;","building-o":"&#xf0f7;","hospital-o":"&#xf0f8;","ambulance":"&#xf0f9;","medkit":"&#xf0fa;","fighter-jet":"&#xf0fb;","beer":"&#xf0fc;","h-square":"&#xf0fd;","plus-square":"&#xf0fe;","angle-double-left":"&#xf100;","angle-double-right":"&#xf101;","angle-double-up":"&#xf102;","angle-double-down":"&#xf103;","angle-left":"&#xf104;","angle-right":"&#xf105;","angle-up":"&#xf106;","angle-down":"&#xf107;","desktop":"&#xf108;","laptop":"&#xf109;","tablet":"&#xf10a;","mobile":"&#xf10b;","circle-o":"&#xf10c;","quote-left":"&#xf10d;","quote-right":"&#xf10e;","spinner":"&#xf110;","circle":"&#xf111;","reply":"&#xf112;","github-alt":"&#xf113;","folder-o":"&#xf114;","folder-open-o":"&#xf115;","smile-o":"&#xf118;","frown-o":"&#xf119;","meh-o":"&#xf11a;","gamepad":"&#xf11b;","keyboard-o":"&#xf11c;","flag-o":"&#xf11d;","flag-checkered":"&#xf11e;","terminal":"&#xf120;","code":"&#xf121;","reply-all":"&#xf122;","mail-reply-all":"&#xf122;","star-half-o":"&#xf123;","location-arrow":"&#xf124;","crop":"&#xf125;","code-fork":"&#xf126;","chain-broken":"&#xf127;","question":"&#xf128;","info":"&#xf129;","exclamation":"&#xf12a;","superscript":"&#xf12b;","subscript":"&#xf12c;","eraser":"&#xf12d;","puzzle-piece":"&#xf12e;","microphone":"&#xf130;","microphone-slash":"&#xf131;","shield":"&#xf132;","calendar-o":"&#xf133;","fire-extinguisher":"&#xf134;","rocket":"&#xf135;","maxcdn":"&#xf136;","chevron-circle-left":"&#xf137;","chevron-circle-right":"&#xf138;","chevron-circle-up":"&#xf139;","chevron-circle-down":"&#xf13a;","html5":"&#xf13b;","css3":"&#xf13c;","anchor":"&#xf13d;","unlock-alt":"&#xf13e;","bullseye":"&#xf140;","ellipsis-h":"&#xf141;","ellipsis-v":"&#xf142;","rss-square":"&#xf143;","play-circle":"&#xf144;","ticket":"&#xf145;","minus-square":"&#xf146;","minus-square-o":"&#xf147;","level-up":"&#xf148;","level-down":"&#xf149;","check-square":"&#xf14a;","pencil-square":"&#xf14b;","external-link-square":"&#xf14c;","share-square":"&#xf14d;","compass":"&#xf14e;","caret-square-o-down":"&#xf150;","caret-square-o-up":"&#xf151;","caret-square-o-right":"&#xf152;","eur":"&#xf153;","gbp":"&#xf154;","usd":"&#xf155;","inr":"&#xf156;","jpy":"&#xf157;","rub":"&#xf158;","krw":"&#xf159;","btc":"&#xf15a;","file":"&#xf15b;","file-text":"&#xf15c;","sort-alpha-asc":"&#xf15d;","sort-alpha-desc":"&#xf15e;","sort-amount-asc":"&#xf160;","sort-amount-desc":"&#xf161;","sort-numeric-asc":"&#xf162;","sort-numeric-desc":"&#xf163;","thumbs-up":"&#xf164;","thumbs-down":"&#xf165;","youtube-square":"&#xf166;","youtube":"&#xf167;","xing":"&#xf168;","xing-square":"&#xf169;","youtube-play":"&#xf16a;","dropbox":"&#xf16b;","stack-overflow":"&#xf16c;","instagram":"&#xf16d;","flickr":"&#xf16e;","adn":"&#xf170;","bitbucket":"&#xf171;","bitbucket-square":"&#xf172;","tumblr":"&#xf173;","tumblr-square":"&#xf174;","long-arrow-down":"&#xf175;","long-arrow-up":"&#xf176;","long-arrow-left":"&#xf177;","long-arrow-right":"&#xf178;","apple":"&#xf179;","windows":"&#xf17a;","android":"&#xf17b;","linux":"&#xf17c;","dribbble":"&#xf17d;","skype":"&#xf17e;","foursquare":"&#xf180;","trello":"&#xf181;","female":"&#xf182;","male":"&#xf183;","gittip":"&#xf184;","sun-o":"&#xf185;","moon-o":"&#xf186;","archive":"&#xf187;","bug":"&#xf188;","vk":"&#xf189;","weibo":"&#xf18a;","renren":"&#xf18b;","pagelines":"&#xf18c;","stack-exchange":"&#xf18d;","arrow-circle-o-right":"&#xf18e;","arrow-circle-o-left":"&#xf190;","caret-square-o-left":"&#xf191;","dot-circle-o":"&#xf192;","wheelchair":"&#xf193;","vimeo-square":"&#xf194;","try":"&#xf195;","plus-square-o":"&#xf196;"}

		var DJ = KUBE.Class('/Library/DomJack');
		initStyleSheet();
		awesomeStore.KUBE().each(function(v,i,o){
			returnAPI[v] = function(){return i;}
		});

		return returnAPI.KUBE().create(this.prototype);



		function initStyleSheet(){
			var styleNode,fontString;
			if(KUBE.Config().autoLoadPath){
				styleNode = DJ('style');
				fontString = getFontFaceDec();
				fontString += fontAwesomeMin;
				fontString += fontAwesomeExtend;
				styleNode.SetInner(fontString);
			}
			else{ //No autoload, load CDN version.
				styleNode = DJ('link');
				styleNode.SetAttribute('href',CDNString);
				DJ(document.head).Append(DJ('style').SetInner(fontAwesomeExtend));
			}
			DJ(document.head).Insert(styleNode,0);
		}

		function getFontFaceDec(){
			return /%s/.KUBE().matchAndReplace(fontFaceString,KUBE.Config().autoLoadPath + localPath)[0];
		}
	}

}(KUBE));