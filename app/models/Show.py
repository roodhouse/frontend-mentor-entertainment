from app.db import Base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.ext.hybrid import hybrid_property

class Show(Base):
    __tablename__ = 'shows'
    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)
    category = Column(String(100), nullable=False)
    rating = Column(String(50), nullable=False)
    year = Column(Integer, nullable=False)
    regular_small = Column(String(250), nullable=False)
    regular_med = Column(String(250), nullable=False)
    regular_lg = Column(String(250), nullable=False)
    trending = Column(Boolean, nullable=False, default=False)

    # define the relationship
    user_bookmarks = relationship('UserShowBookmark', back_populates='show')
    trend = relationship('Trend', back_populates='show')

    @hybrid_property
    def trending_data(self):
        if self.trend:
            return [
                {
                    'id': trend.id,
                    'showId': trend.show_id,
                    'trendingSmall': trend.trending_small,
                    'trendingLarge': trend.trending_large
                }
                for trend in self.trend
            ]
        else:
            return None