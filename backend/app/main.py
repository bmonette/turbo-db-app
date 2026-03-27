from fastapi import FastAPI

app = FastAPI(title="Turbo DB App API")


@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Turbo DB backend is running"}
