import os
from typing import Optional

from fastapi import FastAPI
from dotenv import load_dotenv

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = FastAPI()

load_dotenv()


credential = credentials.ApplicationDefault()
firebase_admin.initialize_app(credential, {'projectId': os.environ.get('IDPROJECT')})

db = firestore.client()

print(db)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.get("/products/")
def get_products():
    products = {"id": "prod1", "name": "Camiseta 1"}
    return products
