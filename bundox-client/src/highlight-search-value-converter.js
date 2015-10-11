
export class HighlightSearchValueConverter {
  toView(value, search) {
    log.info(this.highlight(value, search));
    return this.highlight(value, search);
  }

  highlight (value, search) {
    var currentPos = 0;
    var lastMatch = -1;
    var result = "";
    for(var i = 0; i < search.length; i = i + 1) {
      var c = search.charAt(i);
      var match = value.indexOf(c, currentPos);
      if (match == -1) {
        break;
      } else if (lastMatch + 1 == match) {
        if (lastMatch == -1) {
           result = "<mark>";
        }
        result = result + c;
        lastMatch = match;
        currentPos = currentPos + 1;
      } else {
        if (lastMatch != -1) {
          result = result + "</mark>";
        }
        result = result + value.substring(lastMatch+1, match);
        result = result + "<mark>" + c;
        lastMatch = match;
        currentPos = match + 1;
      }
    }
    if (lastMatch+1 != value.length) {
      if (lastMatch == -1) {
        result = value
      } else {
        result = result + "</mark>";
        result = result + value.substring(lastMatch+1, value.length);
      }
    }
    return result;
  }
}
