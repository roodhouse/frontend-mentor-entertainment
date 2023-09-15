from app.db import Base
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

class Trend(Base):
    __tablename__ = 'trending'
    id = Column(Integer, primary_key=True)
    show_id = Column(Integer, ForeignKey('shows.id'))
    trending_small = Column(String(250), nullable=False)
    trending_large = Column(String(250), nullable=False)
    show = relationship('Show', back_populates='trend')
