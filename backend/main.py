from fastapi import FastAPI
from artifact import (
    new_random_artifact,
    MainStat,
    Substat,
    RollHistoryItem,
    ArtifactState,
    ArtifactResponse,
)
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return FileResponse("static/index.html")


@app.get("/artifact")
def generate_artifact():
    artifact = new_random_artifact()

    before = ArtifactState(
        type=artifact.artifact_type,
        main_stat=MainStat(name=artifact.main_stat, value=artifact.main_stat_value),
        substats=[Substat(name=s, value=v) for s, v in artifact.substats.items()],
        crit_value=artifact.calculate_crit_value(),
    )

    artifact.roll_to_max()

    after = ArtifactState(
        type=artifact.artifact_type,
        main_stat=MainStat(name=artifact.main_stat, value=artifact.main_stat_value),
        substats=[
            Substat(name=k, value=v, rolls=artifact.substats_upgrade_counter[k])
            for k, v in artifact.substats.items()
        ],
        crit_value=artifact.calculate_crit_value(),
    )

    roll_history = [
        RollHistoryItem(
            substat=roll.substat,
            value=roll.value,
            roll_value=roll.roll_value,
        )
        for roll in artifact.roll_history
    ]

    return ArtifactResponse(
        before=before,
        after=after,
        roll_history=roll_history,
    )
