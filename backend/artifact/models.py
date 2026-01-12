from pydantic import BaseModel

class MainStat(BaseModel):
    name: str
    value: float

class Substat(BaseModel):
    name: str
    value: float

class RollHistoryItem(BaseModel):
    substat: str
    value: float
    roll_value: float

class ArtifactState(BaseModel):
    type: str
    main_stat: MainStat
    substats: list[Substat]
    crit_value: float | None = None

class ArtifactResponse(BaseModel):
    before: ArtifactState
    after: ArtifactState
    roll_history: list[RollHistoryItem]

