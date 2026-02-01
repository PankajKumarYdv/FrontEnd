from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware

origins = [
		"http://localhost",
    "http://127.0.0.1:5500",  # your frontend
    "http://localhost:5500",  # sometimes Live Server uses this
] 
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # or ["*"] to allow all
    allow_credentials=True,
    allow_methods=["*"],              # allow all HTTP methods
    allow_headers=["*"],              # allow all headers
)


@app.get("/")
def hell():
    return {"name" : "Pankaj"}