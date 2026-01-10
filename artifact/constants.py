MAX_UPGRADE_ROLLS = 5

ARTIFACT_TYPES = ["Flower", "Feather", "Sand", "Goblet", "Circlet"]

MAIN_STAT_DISTRIBUTIONS = {
    "Flower": {"HP": 1.0},
    "Feather": {"ATK": 1.0},
    "Sand": {
        "HP%": 0.2668,
        "ATK%": 0.2668,
        "DEF%": 0.2668,
        "ER%": 0.1,
        "EM": 0.1,
    },
    "Goblet": {
        "HP%": 0.1925,
        "ATK%": 0.1925,
        "DEF%": 0.19,
        "Pyro DMG%": 0.05,
        "Electro DMG%": 0.05,
        "Cryo DMG%": 0.05,
        "Hydro DMG%": 0.05,
        "Dendro DMG%": 0.05,
        "Anemo DMG%": 0.05,
        "Geo DMG%": 0.05,
        "Physical DMG%": 0.05,
        "EM": 0.025,
    },
    "Circlet": {
        "HP%": 0.22,
        "ATK%": 0.22,
        "DEF%": 0.22,
        "CRIT Rate%": 0.1,
        "CRIT DMG%": 0.1,
        "HB%": 0.1,
        "EM": 0.04,
    },
}

SUBSTAT_WEIGHTS = {
    "HP": 6,
    "ATK": 6,
    "DEF": 6,
    "HP%": 4,
    "ATK%": 4,
    "DEF%": 4,
    "ER%": 4,
    "EM": 4,
    "CRIT Rate%": 3,
    "CRIT DMG%": 3,
}

SUBSTAT_LIST = list(SUBSTAT_WEIGHTS.keys())

FLAT_STATS = ["HP", "ATK", "DEF", "EM"]

SUBSTAT_INITIAL_COUNT_WEIGHTS = {
    3: 0.8,
    4: 0.2,
}

SUBSTAT_MAX_ROLLS = {
    "HP": 298.75,
    "ATK": 19.45,
    "DEF": 23.15,
    "HP%": 5.83,
    "ATK%": 5.83,
    "DEF%": 7.29,
    "ER%": 6.48,
    "EM": 23.31,
    "CRIT Rate%": 3.89,
    "CRIT DMG%": 7.77,
}

ROLL_VALUES = [0.7, 0.8, 0.9, 1.0]
