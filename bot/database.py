import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://exi_user:exi_password@localhost:5432/exi_db')

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    from sqlalchemy import Column, Integer, String, DateTime, Float
    
    id = Column(Integer, primary_key=True)
    discord_id = Column(String, unique=True, index=True)
    username = Column(String)
    avatar_url = Column(String, nullable=True)
    xp = Column(Float, default=0)
    level = Column(Integer, default=1)
    created_at = Column(DateTime)

def init_db():
    Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
