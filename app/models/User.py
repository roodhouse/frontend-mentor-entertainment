from app.db import Base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import validates, relationship
import bcrypt

salt = bcrypt.gensalt()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    email = Column(String(50), nullable=False, unique=True)
    password = Column(String(100), nullable=False)

    show_bookmarks = relationship('UserShowBookmark', back_populates='user')

    @validates('email')
    def validate_email(self, key, email):
        #make sure email address has @ character
        assert '@' in email

        return email

    @validates('password')
    def validate_password(self, key, password):
        assert len(password) > 4

        return bcrypt.hashpw(password.encode('utf-8'), salt)