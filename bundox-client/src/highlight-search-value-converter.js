
export class HighlightSearchValueConverter {
  toView(value, search) {
    return this.highlight(value, search);
  }

  highlight (value, search) {
    var currentPos = 0;
    var lastMatch = -1;
    var result = "";
    search = search.toLowerCase();
    var valueLower = value.toLowerCase();
    for(var i = 0; i < search.length; i = i + 1) {
      var c = search.charAt(i);
      var match = valueLower.indexOf(c, currentPos);
      if (match == -1) {
        break;
      } else if (lastMatch + 1 == match) {
        if (lastMatch == -1) {
           result = "<mark>";
        }
        result = result + value.charAt(match);
        lastMatch = match;
        currentPos = currentPos + 1;
      } else {
        if (lastMatch != -1) {
          result = result + "</mark>";
        }
        result = result + value.substring(lastMatch+1, match);
        result = result + "<mark>" + value.charAt(match);
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
