from app.db import Base
from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship

class UserShowBookmark(Base):
    __tablename__ = 'user_show_bookmarks'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    show_id = Column(Integer, ForeignKey('shows.id'), nullable=False)
    bookmarked_at = Column(DateTime, nullable=False)

    # define relationships
    user = relationship('User', back_populates='show_bookmarks')
    show = relationship('Show', back_populates='user_bookmarks')