import random
from artifact.constants import (
    FLAT_STATS,
    ROLL_VALUES,
    SUBSTAT_MAX_ROLLS,
)

def round_value(value: float, substat: str) -> float:
    return int(value) if substat in FLAT_STATS else round(value, 1)

def get_substat_value(chosen_substat: str) -> tuple[float, float]:
    roll_value = random.choice(ROLL_VALUES)
    return roll_value, roll_value * SUBSTAT_MAX_ROLLS[chosen_substat]

def weighted_choice(choices: list, weights: list[float]):
    return random.choices(population=choices, weights=weights)[0]