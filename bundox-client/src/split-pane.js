import $ from 'jquery';
import {LogManager} from 'aurelia-framework';

export class SplitPane {
  static inject() { return [Element]; }
  constructor(element) {
    this.element = element;
    this.log = LogManager.getLogger('SplitPane');

    this.dragging = false;
  }

  createGhostPart(config) {
    return $('<div>',
             {
               id: config.id,
               css: {
                 height: right.outerHeight(),
                 top: right.offset().top,
                 left: right.offset().left,
                 width: "3px",
                 opacity: 0.5,
                 position: "absolute"
               }
             }).appendTo('body');
  }

  attached() {
    var split_pane = this;
    var element = $(this.element).find('div.split-pane');
    $(this.element).find("div.dragbar").mousedown(e => {
      e.preventDefault();

      split_pane.dragging = true;
      var left = $(element).find('div.left-pane-content');
      var right = $(element).find('div.right-pane-content');
      var ghostbar = $('<div>',
                       { id: 'ghostbar',
                         css: {
                                height: right.outerHeight(),
                                top: right.offset().top,
                                left: right.offset().left,
                                width: "3px",
                                opacity: 0.5,
                                position: "absolute"
                              }
                       }).appendTo('body');
     
      // We need to add these ghostPanes incase there is 
      // say a iframe in one of the splits. If we are dragging
      // this document needs to control the events until
      // dragging is complete.
      var ghostpaneRight = $('<div>',
                       { id: 'ghostpaneRight',
                         css: {
                                height: right.outerHeight(),
                                width: right.outerWidth(),
                                top: right.offset().top,
                                left: right.offset().left,
                                opacity: 0.1,
                                position: "absolute"
                              }
                       }).appendTo('body');

      var ghostpaneLeft = $('<div>',
                       { id: 'ghostpaneLeft',
                         css: {
                                height: left.outerHeight(),
                                width: left.outerWidth(),
                                top: left.offset().top,
                                left: left.offset().left,
                                opacity: 0.1,
                                position: "absolute"
                              }
                       }).appendTo('body');

      $(document).mousemove(e2 => {
        ghostbar.css("left", e2.pageX+2);
      });
    });

    $(document).mouseup(e => {
      if (split_pane.dragging) {
        split_pane.log.info("MOUSE UP");
        var paneWidth = $(element).outerWidth();
        var paneLeft = $(element).offset().left;
        var leftPercentage = ((e.pageX - paneLeft) / paneWidth) * 100;
        var rightPercentage = 100 - leftPercentage;

        $(element).find('div.left-pane-content').css('width', leftPercentage + "%");
        $(element).find('div.right-pane-content').css('width', rightPercentage + "%");
        
        split_pane.log.info({
          pane_width: paneWidth,
          pane_left: paneLeft,
          left: leftPercentage,
          right: rightPercentage
        });

        $('#ghostbar').remove();
        $('#ghostpaneLeft').remove();
        $('#ghostpaneRight').remove();
        $(document).unbind('mousemove');
        split_pane.dragging = false;
      }
    });
  }
}
