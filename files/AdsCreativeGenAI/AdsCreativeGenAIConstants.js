__d(
  "AdsCreativeGenAIConstants",
  ["$InternalEnum", "FontPickerConstants", "uniqueID"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = 2 * s,
      c = r("uniqueID")(),
      d = "__",
      m = {
        LIGHT: "LIGHT",
        REGULAR: "REGULAR",
        ITALIC: "ITALIC",
        MEDIUM: "MEDIUM",
        SEMI_BOLD: "SEMIBOLD",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        EXTRA_BOLD: "EXTRA_BOLD",
        EXTRA_BOLD_ITALIC: "EXTRA_BOLD_ITALIC",
        BLACK: "BLACK",
        BLACK_ITALIC: "BLACK_ITALIC",
        UNDERLINE: "UNDERLINE",
      },
      p = [
        {
          fontName: "Merriweather",
          styles: [
            {
              fontKey: "Merriweather-Regular",
              styleName: (e = o("FontPickerConstants")).REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Merriweather-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Merriweather-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Playfair Display",
          styles: [
            {
              fontKey: "PlayfairDisplay-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "PlayfairDisplay-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "PlayfairDisplay-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Noto Serif",
          styles: [
            {
              fontKey: "NotoSerif-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "NotoSerif-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "NotoSerif-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "DM Serif Display",
          styles: [
            {
              fontKey: "DMSerifDisplay-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Old Standard TT",
          styles: [
            {
              fontKey: "OldStandardTT-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "OldStandardTT-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Raleway",
          styles: [
            {
              fontKey: "Raleway-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Raleway-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Raleway-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Oswald",
          styles: [
            {
              fontKey: "Oswald-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Oswald-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Montserrat",
          styles: [
            {
              fontKey: "Montserrat-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "Montserrat-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Montserrat-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Roboto",
          styles: [
            {
              fontKey: "Roboto-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Roboto-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Noto Sans",
          styles: [
            {
              fontKey: "NotoSans-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "NotoSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Open Sans",
          styles: [
            {
              fontKey: "OpenSans-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "OpenSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Lato",
          styles: [
            {
              fontKey: "Lato-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            { fontKey: "Lato-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Poppins",
          styles: [
            {
              fontKey: "Poppins-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Poppins-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Alegreya",
          styles: [
            {
              fontKey: "Alegreya-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Alegreya-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Alegreya-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Alegreya-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
            {
              fontKey: "Alegreya-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Arimo",
          styles: [
            {
              fontKey: "Arimo-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            { fontKey: "Arimo-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Bebas",
          styles: [
            {
              fontKey: "Bebas-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Bungee Shade",
          styles: [
            {
              fontKey: "BungeeShade-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Cabin",
          styles: [
            {
              fontKey: "Cabin-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Cabin-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Cabin-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Cabin-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Courier Prime",
          styles: [
            {
              fontKey: "CourierPrime-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "CourierPrime-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Dancing Script",
          styles: [
            {
              fontKey: "DancingScript-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "DancingScript-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "DancingScript-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "DancingScript-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "EB Garamond",
          styles: [
            {
              fontKey: "EBGaramond-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "EBGaramond-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "EBGaramond-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "EBGaramond-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "EBGaramond-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Faustina",
          styles: [
            {
              fontKey: "Faustina-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "Faustina-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Faustina-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Faustina-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Faustina-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Faustina-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Fira Sans",
          styles: [
            {
              fontKey: "FiraSans-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "FiraSans-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "FiraSans-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "FiraSans-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "FiraSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Freehand",
          styles: [
            {
              fontKey: "Freehand-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Fruktur",
          styles: [
            {
              fontKey: "Fruktur-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Henny Penny",
          styles: [
            {
              fontKey: "HennyPenny-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Hepta Slab",
          styles: [
            {
              fontKey: "HeptaSlab-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "HeptaSlab-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "HeptaSlab-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "HeptaSlab-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "HeptaSlab-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "HeptaSlab-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Instagram Sans",
          styles: [
            {
              fontKey: "InstagramSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Knewave",
          styles: [
            {
              fontKey: "Knewave-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Libre Bodoni",
          styles: [
            {
              fontKey: "LibreBodoni-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "LibreBodoni-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "LibreBodoni-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Libre Franklin",
          styles: [
            {
              fontKey: "LibreFranklin-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "LibreFranklin-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "LibreFranklin-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "LibreFranklin-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "LibreFranklin-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "LibreFranklin-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Lobster",
          styles: [
            {
              fontKey: "Lobster-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Nunito Sans",
          styles: [
            {
              fontKey: "NunitoSans_10pt-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "NunitoSans_10pt-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "NunitoSans_10pt-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "NunitoSans_10pt-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "NunitoSans_10pt-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
            {
              fontKey: "NunitoSans_10pt-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Pacifico",
          styles: [
            {
              fontKey: "Pacifico-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Petit Formal Script",
          styles: [
            {
              fontKey: "PetitFormalScript-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Press Start 2P",
          styles: [
            {
              fontKey: "PressStart2P-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "PT Serif",
          styles: [
            {
              fontKey: "PTSerif-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "PTSerif-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Roboto Slab",
          styles: [
            {
              fontKey: "RobotoSlab-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "RobotoSlab-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Rosarivo",
          styles: [
            {
              fontKey: "Rosarivo-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Rubik",
          styles: [
            {
              fontKey: "Rubik-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "Rubik-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Rubik-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Rubik-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Rubik-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
            {
              fontKey: "Rubik-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Shojumaru",
          styles: [
            {
              fontKey: "Shojumaru-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Sorts Mill Goudy",
          styles: [
            {
              fontKey: "SortsMillGoudy-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Source Sans 3",
          styles: [
            {
              fontKey: "SourceSans3-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "SourceSans3-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "SourceSans3-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "SourceSans3-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "SourceSans3-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Trocchi",
          styles: [
            {
              fontKey: "Trocchi-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "UnifrakturMaguntia",
          styles: [
            {
              fontKey: "UnifrakturMaguntia-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Vidaloka",
          styles: [
            {
              fontKey: "Vidaloka-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Work Sans",
          styles: [
            {
              fontKey: "WorkSans-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "WorkSans-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "WorkSans-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "WorkSans-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "WorkSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "WorkSans-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
            {
              fontKey: "WorkSans-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Zen Old Mincho",
          styles: [
            {
              fontKey: "ZenOldMincho-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "ZenOldMincho-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "ZenOldMincho-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "ZenOldMincho-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "ZenOldMincho-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Baloo 2",
          styles: [
            {
              fontKey: "Baloo2-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Baloo2-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Baloo2-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Barlow",
          styles: [
            {
              fontKey: "Barlow-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Barlow-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Barlow-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Bebas Neue",
          styles: [
            {
              fontKey: "BebasNeue-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Comfortaa",
          styles: [
            {
              fontKey: "Comfortaa-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Comfortaa-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Frank Ruhl Libre",
          styles: [
            {
              fontKey: "FrankRuhlLibre-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "FrankRuhlLibre-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "FrankRuhlLibre-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Exo 2",
          styles: [
            {
              fontKey: "Exo2-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Exo2-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Exo2-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "League Spartan",
          styles: [
            {
              fontKey: "LeagueSpartan-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "LeagueSpartan-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "LeagueSpartan-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Grandstander",
          styles: [
            {
              fontKey: "Grandstander-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Grandstander-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Grandstander-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Lora",
          styles: [
            {
              fontKey: "Lora-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Lora-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Lora-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Proza Libre",
          styles: [
            {
              fontKey: "ProzaLibre-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "ProzaLibre-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "ProzaLibre-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Quantico",
          styles: [
            {
              fontKey: "Quantico-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Quattrocento",
          styles: [
            {
              fontKey: "Quattrocento-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Quattrocento-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Rajdhani",
          styles: [
            {
              fontKey: "Rajdhani-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Rajdhani-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Rajdhani-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Sofia Sans",
          styles: [
            {
              fontKey: "SofiaSans-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "SofiaSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "SofiaSans-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Teko",
          styles: [
            {
              fontKey: "Teko-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Teko-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Teko-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Fredoka",
          styles: [
            {
              fontKey: "Fredoka-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Fredoka-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Fira Sans Extra Condensed",
          styles: [
            {
              fontKey: "FiraSansExtraCondensed-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "FiraSansExtraCondensed-Italic",
              styleName: e.ITALIC_FBT,
              textStyle: "ITALIC",
            },
            {
              fontKey: "FiraSansExtraCondensed-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Quicksand",
          styles: [
            {
              fontKey: "Quicksand-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
      ].sort(function (e, t) {
        return e.fontName.localeCompare(t.fontName);
      }),
      _ = [
        {
          fontName: "Merriweather",
          styles: [
            {
              fontKey: "Merriweather-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Merriweather-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Merriweather-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Playfair Display",
          styles: [
            {
              fontKey: "PlayfairDisplay-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "PlayfairDisplay-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "PlayfairDisplay-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Noto Serif",
          styles: [
            {
              fontKey: "NotoSerif-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "NotoSerif-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "NotoSerif-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "DM Serif Display",
          styles: [
            {
              fontKey: "DMSerifDisplay-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Old Standard TT",
          styles: [
            {
              fontKey: "OldStandardTT-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "OldStandardTT-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Raleway",
          styles: [
            {
              fontKey: "Raleway-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Raleway-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Raleway-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Oswald",
          styles: [
            {
              fontKey: "Oswald-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Oswald-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Montserrat",
          styles: [
            {
              fontKey: "Montserrat-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "Montserrat-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Montserrat-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Roboto",
          styles: [
            {
              fontKey: "Roboto-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Roboto-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Noto Sans",
          styles: [
            {
              fontKey: "NotoSans-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "NotoSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Open Sans",
          styles: [
            {
              fontKey: "OpenSans-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "OpenSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Lato",
          styles: [
            {
              fontKey: "Lato-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            { fontKey: "Lato-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Poppins",
          styles: [
            {
              fontKey: "Poppins-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Poppins-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Alegreya",
          styles: [
            {
              fontKey: "Alegreya-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Alegreya-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Alegreya-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Alegreya-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
            {
              fontKey: "Alegreya-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Arimo",
          styles: [
            {
              fontKey: "Arimo-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            { fontKey: "Arimo-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Bebas",
          styles: [
            {
              fontKey: "Bebas-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Bungee Shade",
          styles: [
            {
              fontKey: "BungeeShade-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Cabin",
          styles: [
            {
              fontKey: "Cabin-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Cabin-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Cabin-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Cabin-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Courier Prime",
          styles: [
            {
              fontKey: "CourierPrime-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "CourierPrime-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Dancing Script",
          styles: [
            {
              fontKey: "DancingScript-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "DancingScript-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "DancingScript-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "DancingScript-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "EB Garamond",
          styles: [
            {
              fontKey: "EBGaramond-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "EBGaramond-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "EBGaramond-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "EBGaramond-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "EBGaramond-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Faustina",
          styles: [
            {
              fontKey: "Faustina-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "Faustina-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Faustina-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Faustina-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Faustina-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Faustina-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Fira Sans",
          styles: [
            {
              fontKey: "FiraSans-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "FiraSans-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "FiraSans-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "FiraSans-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "FiraSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Freehand",
          styles: [
            {
              fontKey: "Freehand-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Fruktur",
          styles: [
            {
              fontKey: "Fruktur-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Henny Penny",
          styles: [
            {
              fontKey: "HennyPenny-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Instagram Sans",
          styles: [
            {
              fontKey: "InstagramSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Knewave",
          styles: [
            {
              fontKey: "Knewave-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Libre Bodoni",
          styles: [
            {
              fontKey: "LibreBodoni-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "LibreBodoni-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "LibreBodoni-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Libre Franklin",
          styles: [
            {
              fontKey: "LibreFranklin-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "LibreFranklin-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "LibreFranklin-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "LibreFranklin-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "LibreFranklin-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "LibreFranklin-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Lobster",
          styles: [
            {
              fontKey: "Lobster-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Nunito Sans",
          styles: [
            {
              fontKey: "NunitoSans_10pt-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "NunitoSans_10pt-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "NunitoSans_10pt-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "NunitoSans_10pt-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "NunitoSans_10pt-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
            {
              fontKey: "NunitoSans_10pt-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Pacifico",
          styles: [
            {
              fontKey: "Pacifico-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Petit Formal Script",
          styles: [
            {
              fontKey: "PetitFormalScript-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Press Start 2P",
          styles: [
            {
              fontKey: "PressStart2P-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "PT Serif",
          styles: [
            {
              fontKey: "PTSerif-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "PTSerif-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Roboto Slab",
          styles: [
            {
              fontKey: "RobotoSlab-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "RobotoSlab-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Rubik",
          styles: [
            {
              fontKey: "Rubik-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "Rubik-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Rubik-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Rubik-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Rubik-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
            {
              fontKey: "Rubik-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Shojumaru",
          styles: [
            {
              fontKey: "Shojumaru-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Sorts Mill Goudy",
          styles: [
            {
              fontKey: "SortsMillGoudy-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Source Sans 3",
          styles: [
            {
              fontKey: "SourceSans3-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "SourceSans3-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "SourceSans3-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "SourceSans3-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "SourceSans3-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Trocchi",
          styles: [
            {
              fontKey: "Trocchi-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "UnifrakturMaguntia",
          styles: [
            {
              fontKey: "UnifrakturMaguntia-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Vidaloka",
          styles: [
            {
              fontKey: "Vidaloka-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Work Sans",
          styles: [
            {
              fontKey: "WorkSans-Light",
              styleName: e.LIGHT_FBT,
              textStyle: "LIGHT",
            },
            {
              fontKey: "WorkSans-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "WorkSans-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "WorkSans-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "WorkSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "WorkSans-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
            {
              fontKey: "WorkSans-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Zen Old Mincho",
          styles: [
            {
              fontKey: "ZenOldMincho-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "ZenOldMincho-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "ZenOldMincho-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "ZenOldMincho-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "ZenOldMincho-Black",
              styleName: e.BLACK_FBT,
              textStyle: "BLACK",
            },
          ],
        },
        {
          fontName: "Baloo 2",
          styles: [
            {
              fontKey: "Baloo2-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Baloo2-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "Baloo2-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Barlow",
          styles: [
            {
              fontKey: "Barlow-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Barlow-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Barlow-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Bebas Neue",
          styles: [
            {
              fontKey: "BebasNeue-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Comfortaa",
          styles: [
            {
              fontKey: "Comfortaa-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Comfortaa-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Frank Ruhl Libre",
          styles: [
            {
              fontKey: "FrankRuhlLibre-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "FrankRuhlLibre-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "FrankRuhlLibre-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Exo 2",
          styles: [
            {
              fontKey: "Exo2-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Exo2-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Exo2-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "League Spartan",
          styles: [
            {
              fontKey: "LeagueSpartan-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "LeagueSpartan-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "LeagueSpartan-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Grandstander",
          styles: [
            {
              fontKey: "Grandstander-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Grandstander-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Grandstander-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Lora",
          styles: [
            {
              fontKey: "Lora-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Lora-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Lora-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Proza Libre",
          styles: [
            {
              fontKey: "ProzaLibre-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "ProzaLibre-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "ProzaLibre-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Quantico",
          styles: [
            {
              fontKey: "Quantico-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
          ],
        },
        {
          fontName: "Quattrocento",
          styles: [
            {
              fontKey: "Quattrocento-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "Quattrocento-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Rajdhani",
          styles: [
            {
              fontKey: "Rajdhani-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Rajdhani-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Rajdhani-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Sofia Sans",
          styles: [
            {
              fontKey: "SofiaSans-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "SofiaSans-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
            {
              fontKey: "SofiaSans-ExtraBold",
              styleName: e.EXTRA_BOLD_FBT,
              textStyle: "EXTRA_BOLD",
            },
          ],
        },
        {
          fontName: "Teko",
          styles: [
            {
              fontKey: "Teko-Medium",
              styleName: e.MEDIUM_FBT,
              textStyle: "MEDIUM",
            },
            {
              fontKey: "Teko-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            { fontKey: "Teko-Bold", styleName: e.BOLD_FBT, textStyle: "BOLD" },
          ],
        },
        {
          fontName: "Fredoka",
          styles: [
            {
              fontKey: "Fredoka-SemiBold",
              styleName: e.SEMI_BOLD_FBT,
              textStyle: "SEMIBOLD",
            },
            {
              fontKey: "Fredoka-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Fira Sans Extra Condensed",
          styles: [
            {
              fontKey: "FiraSansExtraCondensed-Regular",
              styleName: e.REGULAR_FBT,
              textStyle: "REGULAR",
            },
            {
              fontKey: "FiraSansExtraCondensed-Italic",
              styleName: e.ITALIC_FBT,
              textStyle: "ITALIC",
            },
            {
              fontKey: "FiraSansExtraCondensed-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
        {
          fontName: "Quicksand",
          styles: [
            {
              fontKey: "Quicksand-Bold",
              styleName: e.BOLD_FBT,
              textStyle: "BOLD",
            },
          ],
        },
      ].sort(function (e, t) {
        return e.fontName.localeCompare(t.fontName);
      }),
      f = {
        fontName: "Noto Sans Japanese",
        styles: [
          {
            fontKey: "NotoSansJP-Bold",
            styleName: e.BOLD_FBT,
            textStyle: "BOLD",
          },
        ],
      },
      g = {
        fontName: "Noto Sans Korean",
        styles: [
          {
            fontKey: "NotoSansKR-Bold",
            styleName: e.BOLD_FBT,
            textStyle: "BOLD",
          },
        ],
      },
      h = {
        fontName: "Noto Sans Simplified Chinese",
        styles: [
          {
            fontKey: "NotoSansCJK-Bold",
            styleName: e.BOLD_FBT,
            textStyle: "BOLD",
          },
        ],
      },
      y = /[\uAC00-\uD7AF]/,
      C = /[\u3040-\u30FF]/,
      b = /[\u4E00-\u9FFF]/;
    function v(e) {
      return y.test(e) ? g : C.test(e) ? f : b.test(e) ? h : null;
    }
    function S(e) {
      if (e == null) return null;
      var t = [].concat(_, [f, g, h]),
        n = t.find(function (t) {
          return t.fontName === e.fontName;
        });
      if (n == null) return e;
      var r = n.styles.some(function (t) {
        return t.textStyle === e.textStyle;
      });
      return r
        ? e
        : babelHelpers.extends({}, e, { textStyle: n.styles[0].textStyle });
    }
    var R = n("$InternalEnum").Mirrored(["ANALYZING", "GENERATING"]);
    ((l.GEN_AI_TRANSITION_TIME = u),
      (l.GEN_AI_IMAGE_GEN_BUTTON_DOM_ID = c),
      (l.MEDIA_VARIATIONS_KEY_SPLITTER = d),
      (l.textStyleMap = m),
      (l.FONT_STYLES_FONT_PICKER = p),
      (l.FONT_STYLES_FONT_PICKER_FOR_VIDEO_GEN = _),
      (l.detectCJKFontStyle = v),
      (l.adjustFontStyleForVideoGen = S),
      (l.ImageGenerationLoadingState = R));
  },
  98,
);
