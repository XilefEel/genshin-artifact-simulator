import random
from dataclasses import dataclass, field
from artifact.constants import (
    SUBSTAT_WEIGHTS,
    SUBSTAT_LIST,
    MAX_UPGRADE_ROLLS,
)
from artifact.utils import round_value, get_substat_value, weighted_choice


@dataclass
class Roll:
    substat: str
    value: float
    roll_value: float


@dataclass
class Artifact:
    type: str
    main_stat: str
    substats: dict[str, float]
    roll_history: list[Roll] = field(default_factory=list)

    def calculate_crit_value(self) -> float:
        crit_value: float = 0.0

        for substat, value in self.substats.items():
            if substat == "CRIT Rate%":
                crit_value += value * 2
            elif substat == "CRIT DMG%":
                crit_value += value

        return crit_value

    def add_roll_history(self, substat: str, value: float, roll_value: float) -> None:
        self.roll_history.append(
            Roll(substat=substat, value=value, roll_value=roll_value)
        )

    def roll(self) -> None:
        # If only 3 substats, add a new one
        if len(self.substats) < 4:
            possible_substats = [
                s
                for s in SUBSTAT_LIST
                if s != self.main_stat and s not in self.substats
            ]

            new_substat = weighted_choice(
                possible_substats,
                [SUBSTAT_WEIGHTS[s] for s in possible_substats],
            )

            roll_value, substat_value = get_substat_value(new_substat)
            rounded_substat_value = round_value(substat_value, new_substat)

            self.substats[new_substat] = rounded_substat_value

            self.add_roll_history(new_substat, rounded_substat_value, roll_value)

            return

        # If 4 substats, upgrade an existing one
        substat_to_upgrade = random.choice(list(self.substats.keys()))

        roll_value, substat_value = get_substat_value(substat_to_upgrade)
        rounded_substat_value = round_value(substat_value, substat_to_upgrade)

        self.substats[substat_to_upgrade] = round_value(
            self.substats[substat_to_upgrade] + substat_value, substat_to_upgrade
        )

        self.add_roll_history(substat_to_upgrade, rounded_substat_value, roll_value)

    def roll_to_max(self) -> None:
        for _ in range(MAX_UPGRADE_ROLLS):
            self.roll()

    def __str__(self) -> str:
        lines = [
            "--- Artifact ---",
            f"Artifact Type: {self.type}",
            f"Main Stat: {self.main_stat}",
            "Substats:",
        ]
        for substat, value in self.substats.items():
            lines.append(f"  {substat}: {value}")

        lines.append(f"Crit Value: {self.calculate_crit_value()}")

        return "\n".join(lines)
