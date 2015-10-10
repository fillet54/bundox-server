import $ from 'jquery';
import {LogManager} from 'aurelia-framework';

export class SplitPane {
  static inject() { return [Element]; }
  constructor(element) {
    this.element = element;
    this.log = LogManager.getLogger('SplitPane');

    this.dragging = false;
  }


  attached() {
    var split_pane = this;
    var element = $(this.element).find('div.split-pane');
    $(this.element).find("div.dragbar").mousedown(e => {
      e.preventDefault();

      split_pane.dragging = true;
      var left = $(element).find('div.left-pane-content');
      var right = $(element).find('div.right-pane-content');
      var ghostbar = this.createGhostDiv({ id: 'ghostbar', ref: right, width: "3px" });
      
      // We need to add these ghostPanes in case there is 
      // say an iframe in one of the splits which will capture
      // our mouse events while dragging. So we just put two divs
      // on top of both splits.
      var ghostpaneRight = this.createGhostDiv({ id: 'ghostpaneRight', ref: right }); 
      var ghostpaneLeft = this.createGhostDiv({ id: 'ghostpaneLeft', ref: left }); 
      
      $(document).mousemove(e2 => {
        ghostbar.css("left", e2.pageX+2);
      });
    });

    $(document).mouseup(e => {
      if (split_pane.dragging) {
        var paneWidth = $(element).outerWidth();
        var paneLeft = $(element).offset().left;
        var leftPercentage = ((e.pageX - paneLeft) / paneWidth) * 100;
        var rightPercentage = 100 - leftPercentage;

        $(element).find('div.left-pane-content').css('width', leftPercentage + "%");
        $(element).find('div.right-pane-content').css('width', rightPercentage + "%");
        
        $('#ghostbar').remove();
        $('#ghostpaneLeft').remove();
        $('#ghostpaneRight').remove();
        $(document).unbind('mousemove');
        split_pane.dragging = false;
      }
    });
  }
  
  createGhostDiv(config) {
    return $('<div>',
             {
               id: config.id,
               css: {
                 height: config.ref.outerHeight(),
                 top: config.ref.offset().top,
                 left: config.ref.offset().left,
                 width: config.width ? config.width : config.ref.outerWidth(),
                 position: "absolute"
               }
             }).appendTo('body');
  }
}
