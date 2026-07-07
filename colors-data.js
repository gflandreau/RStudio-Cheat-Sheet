/* ============================================================
   Base R named colors (from grDevices colors()) and package
   color-scale helpers (viridis, RColorBrewer, scales).
   ============================================================ */

const BASE_COLORS = [
  { family: "Reds & Pinks", colors: [
    { name: "red", hex: "#FF0000" }, { name: "red1", hex: "#FF0000" }, { name: "red2", hex: "#EE0000" },
    { name: "red3", hex: "#CD0000" }, { name: "red4", hex: "#8B0000" }, { name: "firebrick", hex: "#B22222" },
    { name: "indianred", hex: "#CD5C5C" }, { name: "tomato", hex: "#FF6347" }, { name: "coral", hex: "#FF7F50" },
    { name: "salmon", hex: "#FA8072" }, { name: "lightsalmon", hex: "#FFA07A" }, { name: "darksalmon", hex: "#E9967A" },
    { name: "lightcoral", hex: "#F08080" }, { name: "hotpink", hex: "#FF69B4" }, { name: "deeppink", hex: "#FF1493" },
    { name: "pink", hex: "#FFC0CB" }, { name: "lightpink", hex: "#FFB6C1" }, { name: "palevioletred", hex: "#DB7093" },
    { name: "violetred", hex: "#D02090" }, { name: "maroon", hex: "#B03060" }, { name: "rosybrown", hex: "#BC8F8F" },
    { name: "mistyrose", hex: "#FFE4E1" }, { name: "brown", hex: "#A52A2A" },
  ]},
  { family: "Oranges & Browns", colors: [
    { name: "orange", hex: "#FFA500" }, { name: "darkorange", hex: "#FF8C00" }, { name: "orangered", hex: "#FF4500" },
    { name: "chocolate", hex: "#D2691E" }, { name: "sienna", hex: "#A0522D" }, { name: "saddlebrown", hex: "#8B4513" },
    { name: "sandybrown", hex: "#F4A460" }, { name: "peru", hex: "#CD853F" }, { name: "tan", hex: "#D2B48C" },
    { name: "burlywood", hex: "#DEB887" }, { name: "bisque", hex: "#FFE4C4" }, { name: "navajowhite", hex: "#FFDEAD" },
    { name: "peachpuff", hex: "#FFDAB9" }, { name: "wheat", hex: "#F5DEB3" },
  ]},
  { family: "Yellows & Golds", colors: [
    { name: "yellow", hex: "#FFFF00" }, { name: "gold", hex: "#FFD700" }, { name: "goldenrod", hex: "#DAA520" },
    { name: "darkgoldenrod", hex: "#B8860B" }, { name: "lightgoldenrod", hex: "#EEDD82" }, { name: "khaki", hex: "#F0E68C" },
    { name: "darkkhaki", hex: "#BDB76B" }, { name: "lemonchiffon", hex: "#FFFACD" }, { name: "cornsilk", hex: "#FFF8DC" },
    { name: "lightyellow", hex: "#FFFFE0" }, { name: "moccasin", hex: "#FFE4B5" }, { name: "palegoldenrod", hex: "#EEE8AA" },
  ]},
  { family: "Greens", colors: [
    { name: "green", hex: "#00FF00" }, { name: "darkgreen", hex: "#006400" }, { name: "forestgreen", hex: "#228B22" },
    { name: "seagreen", hex: "#2E8B57" }, { name: "mediumseagreen", hex: "#3CB371" }, { name: "springgreen", hex: "#00FF7F" },
    { name: "mediumspringgreen", hex: "#00FA9A" }, { name: "lawngreen", hex: "#7CFC00" }, { name: "chartreuse", hex: "#7FFF00" },
    { name: "greenyellow", hex: "#ADFF2F" }, { name: "yellowgreen", hex: "#9ACD32" }, { name: "olivedrab", hex: "#6B8E23" },
    { name: "darkolivegreen", hex: "#556B2F" }, { name: "limegreen", hex: "#32CD32" }, { name: "lightgreen", hex: "#90EE90" },
    { name: "palegreen", hex: "#98FB98" }, { name: "darkseagreen", hex: "#8FBC8F" }, { name: "mediumaquamarine", hex: "#66CDAA" },
    { name: "aquamarine", hex: "#7FFFD4" }, { name: "honeydew", hex: "#F0FFF0" },
  ]},
  { family: "Blues", colors: [
    { name: "blue", hex: "#0000FF" }, { name: "navy", hex: "#000080" }, { name: "midnightblue", hex: "#191970" },
    { name: "mediumblue", hex: "#0000CD" }, { name: "royalblue", hex: "#4169E1" }, { name: "steelblue", hex: "#4682B4" },
    { name: "dodgerblue", hex: "#1E90FF" }, { name: "deepskyblue", hex: "#00BFFF" }, { name: "skyblue", hex: "#87CEEB" },
    { name: "lightskyblue", hex: "#87CEFA" }, { name: "lightblue", hex: "#ADD8E6" }, { name: "powderblue", hex: "#B0E0E6" },
    { name: "cadetblue", hex: "#5F9EA0" }, { name: "cornflowerblue", hex: "#6495ED" }, { name: "lightsteelblue", hex: "#B0C4DE" },
    { name: "slateblue", hex: "#6A5ACD" }, { name: "mediumslateblue", hex: "#7B68EE" }, { name: "darkblue", hex: "#00008B" },
    { name: "darkslateblue", hex: "#483D8B" }, { name: "aliceblue", hex: "#F0F8FF" }, { name: "azure", hex: "#F0FFFF" },
  ]},
  { family: "Cyans & Turquoise", colors: [
    { name: "cyan", hex: "#00FFFF" }, { name: "darkcyan", hex: "#008B8B" }, { name: "lightcyan", hex: "#E0FFFF" },
    { name: "turquoise", hex: "#40E0D0" }, { name: "darkturquoise", hex: "#00CED1" }, { name: "mediumturquoise", hex: "#48D1CC" },
    { name: "paleturquoise", hex: "#AFEEEE" }, { name: "lightseagreen", hex: "#20B2AA" }, { name: "teal (via \"darkcyan\")", hex: "#008B8B" },
  ]},
  { family: "Purples & Violets", colors: [
    { name: "purple", hex: "#A020F0" }, { name: "darkorchid", hex: "#9932CC" }, { name: "mediumorchid", hex: "#BA55D3" },
    { name: "orchid", hex: "#DA70D6" }, { name: "darkviolet", hex: "#9400D3" }, { name: "blueviolet", hex: "#8A2BE2" },
    { name: "violet", hex: "#EE82EE" }, { name: "mediumpurple", hex: "#9370DB" }, { name: "plum", hex: "#DDA0DD" },
    { name: "thistle", hex: "#D8BFD8" }, { name: "lavender", hex: "#E6E6FA" }, { name: "lavenderblush", hex: "#FFF0F5" },
    { name: "mediumvioletred", hex: "#C71585" },
  ]},
  { family: "Grays, Whites & Blacks", colors: [
    { name: "white", hex: "#FFFFFF" }, { name: "black", hex: "#000000" }, { name: "gray / grey", hex: "#BEBEBE" },
    { name: "darkgray", hex: "#A9A9A9" }, { name: "dimgray", hex: "#696969" }, { name: "lightgray", hex: "#D3D3D3" },
    { name: "gainsboro", hex: "#DCDCDC" }, { name: "whitesmoke", hex: "#F5F5F5" }, { name: "slategray", hex: "#708090" },
    { name: "lightslategray", hex: "#778899" }, { name: "darkslategray", hex: "#2F4F4F" }, { name: "ghostwhite", hex: "#F8F8FF" },
    { name: "floralwhite", hex: "#FFFAF0" }, { name: "ivory", hex: "#FFFFF0" }, { name: "snow", hex: "#FFFAFA" },
    { name: "linen", hex: "#FAF0E6" }, { name: "oldlace", hex: "#FDF5E6" }, { name: "beige", hex: "#F5F5DC" },
    { name: "seashell", hex: "#FFF5EE" }, { name: "mintcream", hex: "#F5FFFA" }, { name: "blanchedalmond", hex: "#FFEBCD" },
  ]},
];

const COLOR_NOTE = "This is a curated set of the most useful base R named colors. R also has full numbered shade families (name1–name4, e.g. steelblue1–steelblue4), a gray0–gray100 grayscale ramp, and British \"grey\" spelling variants — 657 names total. Run colors() in R to see the complete list.";

const PALETTES = [
  {
    pkg: "viridis", fn: "viridis(n) / scale_color_viridis_c() / scale_fill_viridis_d()",
    desc: "Perceptually uniform, colorblind-friendly palettes. Great default for both continuous and discrete data.",
    example: 'ggplot(df, aes(x, y, color = value)) + geom_point() + scale_color_viridis_c()',
    swatch: ["#440154", "#3b528b", "#21908c", "#5dc963", "#fde725"],
    tags: ["palette","colorblind","continuous","viridis"],
  },
  {
    pkg: "viridis", fn: 'option = "magma" / "plasma" / "cividis"',
    desc: "Alternate viridis-family palettes; cividis is optimized for colorblind and grayscale printing.",
    example: 'scale_fill_viridis_c(option = "magma")',
    swatch: ["#000004", "#51127c", "#b73779", "#fc8961", "#fcfdbf"],
    tags: ["palette","viridis","magma","plasma"],
  },
  {
    pkg: "RColorBrewer", fn: 'brewer.pal(n, "Blues") / scale_fill_brewer(palette = "Blues")',
    desc: "Sequential palette — use for ordered/low-to-high numeric data.",
    example: 'scale_fill_brewer(palette = "Blues")',
    swatch: ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"],
    tags: ["palette","brewer","sequential"],
  },
  {
    pkg: "RColorBrewer", fn: 'brewer.pal(n, "RdBu") / scale_fill_brewer(palette = "RdBu")',
    desc: "Diverging palette — use when data has a meaningful midpoint (e.g. above/below zero).",
    example: 'scale_fill_distiller(palette = "RdBu")',
    swatch: ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"],
    tags: ["palette","brewer","diverging"],
  },
  {
    pkg: "RColorBrewer", fn: 'brewer.pal(n, "Set2") / scale_fill_brewer(palette = "Set2")',
    desc: "Qualitative palette — use for unordered categories, not numeric ranges.",
    example: 'scale_fill_brewer(palette = "Set2")',
    swatch: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854"],
    tags: ["palette","brewer","qualitative","categorical"],
  },
  {
    pkg: "scales", fn: "hue_pal()(n)",
    desc: "ggplot2's own default evenly-spaced hue palette — what you get with no scale_* call at all.",
    example: "scales::hue_pal()(4)",
    swatch: ["#F8766D", "#7CAE00", "#00BFC4", "#C77CFF"],
    tags: ["palette","default","ggplot"],
  },
  {
    pkg: "grace's site palette", fn: "blue / purple accent palette",
    desc: "The blue-to-purple gradient used across this site and grace-portfolio — handy to reuse for consistent plots.",
    example: 'scale_fill_manual(values = c("#a8d4ee", "#8a72b8"))',
    swatch: ["#dbeefb", "#a8d4ee", "#5b8cb8", "#cdbcec", "#8a72b8"],
    tags: ["palette","custom","personal"],
  },
];
