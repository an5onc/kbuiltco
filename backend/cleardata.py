import database
from models import Entry
import logging

logging.basicConfig(level=logging.INFO)

def clear_entries():
    db = database.SessionLocal()
    try:
        deleted = db.query(Entry).delete()
        db.commit()
        logging.info(f"Deleted {deleted} entries.")
    except Exception as e:
        logging.error(f"Error deleting entries: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    clear_entries()