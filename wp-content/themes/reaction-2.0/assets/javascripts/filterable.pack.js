/*
* Copyright (C) 2009 Joel Sutherland.
* Liscenced under the MIT liscense
*/

(function(jQuery){jQuery.fn.filterable=function(settings){settings=jQuery.extend({useHash:false,animationSpeed:100,show:{opacity:'show'},hide:{opacity:'hide'},useTags:true,tagSelector:'#portfolio-filter a',selectedTagClass:'current',allTag:'all'},settings);return jQuery(this).each(function(){jQuery(this).bind("filter",function(e,tagToShow){if(settings.useTags){jQuery(settings.tagSelector).removeClass(settings.selectedTagClass);jQuery(settings.tagSelector+'[href='+tagToShow+']').addClass(settings.selectedTagClass)}jQuery(this).trigger("filterportfolio",[tagToShow.substr(1)])});jQuery(this).bind("filterportfolio",function(e,classToShow){if(classToShow==settings.allTag){jQuery(this).trigger("show")}else{jQuery(this).trigger("show",['.'+classToShow]);jQuery(this).trigger("hide",[':not(.'+classToShow+')'])}if(settings.useHash){location.hash='#'+classToShow}});jQuery(this).bind("show",function(e,selectorToShow){jQuery(this).children(selectorToShow).animate(settings.show,settings.animationSpeed)});jQuery(this).bind("hide",function(e,selectorToHide){jQuery(this).children(selectorToHide).animate(settings.hide,settings.animationSpeed)});if(settings.useHash){if(location.hash!='')jQuery(this).trigger("filter",[location.hash]);else jQuery(this).trigger("filter",['#'+settings.allTag])}if(settings.useTags){jQuery(settings.tagSelector).click(function(){jQuery('#portfolio-list').trigger("filter",[jQuery(this).attr('href')]);jQuery(settings.tagSelector).removeClass('current');jQuery(this).addClass('current')})}})}})(jQuery);jQuery(document).ready(function(){jQuery('#portfolio-list').filterable()});