
var type_badge_mapping = {
  "exception" : "Ex",
  "constructor" : "c"
}

export class TypeBadgeValueConverter {
  toView(value) {
    value = value.toLowerCase();
    if (type_badge_mapping[value]) {
      return type_badge_mapping[value];
    } else {
      return value.charAt(0).toUpperCase();
    }
  }
}
