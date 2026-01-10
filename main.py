from fastapi import FastAPI
from artifact import new_random_artifact
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse("static/index.html")


@app.get("/artifact")
def generate_artifact():
    artifact = new_random_artifact()

    before = {
        "type": artifact.type,
        "main_stat": artifact.main_stat,
        "substats": artifact.substats.copy(),
    }

    artifact.roll_to_max()

    after = {
        "type": artifact.type,
        "main_stat": artifact.main_stat,
        "substats": artifact.substats,
        "crit_value": artifact.calculate_crit_value(),
    }

    roll_history = [
        {
            "substat": roll.substat,
            "value": roll.value,
            "roll_value": roll.roll_value,
        }
        for roll in artifact.roll_history
    ]

    return {
        "before": before,
        "after": after,
        "roll_history": roll_history,
    }
