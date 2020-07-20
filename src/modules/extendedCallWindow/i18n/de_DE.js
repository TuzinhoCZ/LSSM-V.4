module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'AAO-Zähler',
            highlight: 'AAO-Umrandung',
            selection: 'Fahrzeugauswahl',
            counter_highlight: 'AAO-Zähler / -Umrandung',
            counter_selection: 'AAO-Zähler und Fahrzeugauswahl',
            highlight_selection: 'AAO-Umrandung und Fahrzeugauswahl',
            counter_highlight_selection:
                'AAO-Zähler / -Umrandung und Fahrzeugauswahl',
        },
        reset: '{text} zurücksetzen',
    },
    generationDate: {
        inputFormat: 'DD. MMMM, HH:mm Uhr',
    },
    settings: {
        generationDate: {
            title: 'Generierungszeitpunkt',
            description:
                'Zeigt neben der Adresse an, wann der Einsatz generiert wurde.',
        },
        enhancedMissingVehicles: {
            title: 'Benötigte Fahrzeuge verschönern',
            description:
                'Wandelt die Anzeige der zusätzlich benötigten Fahrzeuge in eine übersichtlichere Tabelle um.',
        },
        patientSummary: {
            title: 'Patientenzusammenfassung',
            description:
                'Zeigt neben der Zahl der Patienten an, welche Rettungsmittel diese zusammengefasst benötigen.',
        },
        arrCounter: {
            title: 'AAO-Zähler',
            description:
                'Zählt, wie oft bereits auf eine AAO oder einen Zug geklickt wurde. Alle Zähler können mittels des Knopfes unten rechts oder einer AAO mit Reset-Funktion zurückgesetzt werden.',
        },
        arrClickHighlight: {
            title: 'Angeklickte AAOs hervorheben',
            description: 'Zeichnet einen Rahmen um bereits angeklickte AAOs.',
        },
        arrClickHighlightColor: {
            title: 'Farbe der Hervorhebung',
            description: 'Lege hier die Rahmenfarbe für AAO-Umrandungen fest.',
        },
        arrClickHighlightWidth: {
            title: 'Breite der Hervorhebung',
            description:
                'Lege hier die fest (in Pixeln), wie breit die AAO-Umrandung sein soll.',
        },
        arrCounterResetSelection: {
            title: 'Fahrzeugauswahl zurücksetzen',
            description:
                'Fügt unten rechts einen Knopf hinzu, um die bisherige Fahrzeugauswahl zurückzusetzen. Hinweis: Er setzt auch den AAO-Zähler und die Umrandungen, falls aktiviert, zurück!',
        },
        arrMatchHighlight: {
            title: 'Unpassende AAOs ausgrauen',
            description:
                'Legt einen Graufilter über alle AAOs in denen kein Wort des Einsatznamens vorkommt.',
        },
        alarmTime: {
            title: 'Längeste Anfahrtszeit',
            description:
                'Zeigt neben den Alarm-Knopf an, wie lang das Fahrzeug mit der längsten Anfahrtszeit braucht.',
        },
        tailoredTabs: {
            title: 'Fahrzeugkategorien',
            description:
                'Passe dir hier die Tabs im Einsatzfenster an. "Alle" und "Weiteralarmieren" werden immer sichtbar sein.',
            name: 'Name',
            vehicles: 'Fahrzeugtypen',
            color: 'Farbe',
        },
        missionKeywords: {
            title: 'Einsatzstichworte',
            description:
                'Lasse dir ein eigenes Stichwort neben dem Einsatznamen anzeigen',
            keyword: 'Stichwort',
            color: 'Hintergrundfarbe',
            missions: 'Einsätze',
        },
    },
    enhancedMissingVehicles: {
        vehicle: 'Fahrzeugtyp',
        missing: 'Am Einsatzort fehlend',
        driving: 'Auf Anfahrt',
        total: 'Noch benötigt',
        vehiclesByRequirement: {
            [/^Anhänger Drucklufterzeugung$/]: [44],
            [/^Boote?$/]: [66, 67, 68, 70, 71],
            [/^Dekon-P$/]: [53, 54],
            [/^Drehleitern? \(DLK 23\)$/]: [2, 85],
            [/^ELW 1$/]: [3, 34, 78],
            [/^ELW 2$/]: [34, 78],
            [/^Flugfeldlöschfahrzeuge$/]: [75],
            [/^FuStW$/]: [32],
            [/^FwK$/]: [57],
            [/^FüKw$/]: [51],
            [/^GefKw$/]: [52],
            [/^GW-A oder AB-Atemschutz$/]: [5, 48],
            [/^GW-Gefahrgut$/]: [27, 77],
            [/^GW-Höhenrettung$/]: [33],
            [/^GW-Messtechnik$/]: [12],
            [/^GW-Taucher$/]: [63, 69],
            [/^GW-Werkfeuerwehr$/]: [83],
            [/^GW-Öl$/]: [10, 49],
            [/^Gerätekraftwagen \(GKW\)$/]: [39],
            [/^GruKw$/]: [50],
            [/^LKW Kipper \(LKW K 9\)$/]: [42],
            [/^Löschfahrzeuge? \(LF\)$/]: [
                0,
                1,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                30,
                37,
                6,
                7,
                8,
                87,
                88,
                89,
                9,
                90,
            ],
            [/^MEK-Fahrzeuge?$/]: [81, 82],
            [/^Polizeihubschrauber$/]: [61],
            [/^Radlader \(BRmG R\)$/]: [43],
            [/^Rettungshundestaffel\/n$/]: [91],
            [/^Rettungstreppen?$/]: [76],
            [/^RTW$/]: [28],
            [/^RTW oder KTW oder KTW-B$/]: [28, 38, 58],
            [/^Rüstwagen oder HLF$/]: [4, 30, 90],
            [/^SEK-Fahrzeuge$/]: [79, 80],
            [/^Schlauchwagen \(GW-L2 Wasser, SW 1000, SW 2000 oder Ähnliches\)$/]: [
                11,
                13,
                14,
                15,
                16,
                62,
            ],
            [/^THW-Einsatzleitung \(MTW TZ\)$/]: [40],
            [/^THW-Mehrzweckkraftwagen \(MzKW\)$/]: [41],
            [/^Teleskopmast(en)?$/]: [85],
            [/^Turbolöscher$/]: [86],
            [/^ULF mit Löscharm$/]: [84],
            [/^Wasserwerfer$/]: [72],
            [/^leBefKw$/]: [35],
        },
    },
    tailoredTabs: {
        defaultTabs: [
            {
                name: 'LF',
                vehicleTypes: [
                    0,
                    1,
                    6,
                    7,
                    8,
                    9,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    30,
                    37,
                    87,
                    88,
                    89,
                    90,
                ],
            },
            {
                name: 'FW andere',
                vehicleTypes: [
                    2,
                    3,
                    4,
                    5,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    27,
                    33,
                    34,
                    36,
                    46,
                    47,
                    48,
                    49,
                    53,
                    54,
                    57,
                    62,
                    71,
                    75,
                    76,
                    77,
                    78,
                    83,
                    84,
                    85,
                    86,
                ],
            },
            {
                name: 'Rettung',
                vehicleTypes: [28, 29, 31, 38, 55, 56, 58, 59, 60, 73, 74, 91],
            },
            {
                name: 'Polizei',
                vehicleTypes: [32, 61],
            },
            {
                name: 'Bereitschaftspolizei',
                vehicleTypes: [35, 50, 51, 52, 72, 79, 80, 81, 82],
            },
            {
                name: 'THW',
                vehicleTypes: [
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    45,
                    65,
                    66,
                    67,
                    68,
                    69,
                    92,
                    93,
                ],
            },
            {
                name: 'Wasser',
                vehicleTypes: [63, 64, 70],
            },
        ],
    },
};
