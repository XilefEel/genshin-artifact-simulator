import random
from artifact.types import Artifact
from artifact.constants import (
    ARTIFACT_TYPES,
    MAIN_STAT_VALUES,
    MAIN_STAT_DISTRIBUTIONS,
    SUBSTAT_WEIGHTS,
    SUBSTAT_LIST,
    SUBSTAT_INITIAL_COUNT_WEIGHTS,
)
from artifact.utils import round_value, get_substat_value, weighted_choice


def get_random_artifact_type() -> str:
    return random.choice(ARTIFACT_TYPES)


def get_random_main_stat(artifact_type: str) -> str:
    main_stat_pool = MAIN_STAT_DISTRIBUTIONS[artifact_type]
    return weighted_choice(list(main_stat_pool.keys()), list(main_stat_pool.values()))


def get_random_substats(main_stat: str) -> dict[str, float]:
    num_subtats = weighted_choice(
        list(SUBSTAT_INITIAL_COUNT_WEIGHTS.keys()),
        list(SUBSTAT_INITIAL_COUNT_WEIGHTS.values()),
    )

    possible_substats = [s for s in SUBSTAT_LIST if s != main_stat]
    substats = {}

    while len(substats) < num_subtats:
        chosen_substat = weighted_choice(
            possible_substats,
            [SUBSTAT_WEIGHTS[s] for s in possible_substats],
        )

        possible_substats.remove(chosen_substat)

        _, substat_value = get_substat_value(chosen_substat)

        substats[chosen_substat] = round_value(substat_value, chosen_substat)

    return substats


def new_random_artifact() -> Artifact:
    artifact_type = get_random_artifact_type()
    main_stat = get_random_main_stat(artifact_type)
    main_stat_value = MAIN_STAT_VALUES[main_stat]["base"]
    substats = get_random_substats(main_stat)

    return Artifact(artifact_type, main_stat, main_stat_value, substats)
