from app.models import User, Show, Trend, Bookmark
from app.db import Session, Base, engine

# drop & rebuild tables
Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)

db = Session()

# insert users
db.add_all([
    User(email='john@rughdesign.com', password='password123'),
    User(email='laura@rughdesign.com', password='password123'),
    User(email='rugh@gmail.com', password='password123')
])

db.commit()

# insert shows
shows = [
    Show(title='Beyond Earth', category='Movie', rating='PG', year=2019, regular_small='./assets/thumbnails/beyond-earth/regular/small.jpg', regular_med='./assets/thumbnails/beyond-earth/regular/medium.jpg', regular_lg='./assets/thumbnails/beyond-earth/regular/large.jpg', trending=True),
    Show(title='Bottom Gear', category='Movie', rating='PG', year=2021, regular_small='./assets/thumbnails/bottom-gear/regular/small.jpg', regular_med='./assets/thumbnails/bottom-gear/regular/medium.jpg', regular_lg='./assets/thumbnails/bottom-gear/regular/large.jpg', trending=True),
    Show(title='Undiscovered Cities', category='TV Series', rating='E', year=2019, regular_small='./assets/thumbnails/undiscovered-cities/regular/small.jpg', regular_med='./assets/thumbnails/undiscovered-cities/regular/medium.jpg', regular_lg='./assets/thumbnails/undiscovered-cities/regular/large.jpg', trending=True),
    Show(title='1998', category='Movie', rating='18+', year=2021, regular_small='./assets/thumbnails/1998/regular/small.jpg', regular_med='./assets/thumbnails/1998/regular/medium.jpg', regular_lg='./assets/thumbnails/1998/regular/large.jpg', trending=True),
    Show(title='Dark Side of the Moon', category='TV Series', rating='PG', year=2018, regular_small='./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg', regular_med='./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg', regular_lg='./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg', trending=False),
    Show(title='The Great Lands', category='Movie', rating='E', year=2019, regular_small='./assets/thumbnails/the-great-lands/regular/small.jpg', regular_med='./assets/thumbnails/the-great-lands/regular/medium.jpg', regular_lg='./assets/thumbnails/the-great-lands/regular/large.jpg', trending=False),
    Show(title='The Diary', category='TV Series', rating='PG', year=2019, regular_small='./assets/thumbnails/the-diary/regular/small.jpg', regular_med='./assets/thumbnails/the-diary/regular/medium.jpg', regular_lg='./assets/thumbnails/the-diary/regular/large.jpg', trending=False),
    Show(title='Earth’s Untouched', category='Movie', rating='18+', year=2017, regular_small='./assets/thumbnails/earths-untouched/regular/small.jpg', regular_med='./assets/thumbnails/earths-untouched/regular/medium.jpg', regular_lg='./assets/thumbnails/earths-untouched/regular/large.jpg', trending=False),
    Show(title='No Land Beyond', category='Movie', rating='E', year=2019, regular_small='./assets/thumbnails/no-land-beyond/regular/small.jpg', regular_med='./assets/thumbnails/no-land-beyond/regular/medium.jpg', regular_lg='./assets/thumbnails/no-land-beyond/regular/large.jpg', trending=False),
    Show(title='During the Hunt', category='TV Series', rating='PG', year=2016, regular_small='./assets/thumbnails/during-the-hunt/regular/small.jpg', regular_med='./assets/thumbnails/during-the-hunt/regular/medium.jpg', regular_lg='./assets/thumbnails/during-the-hunt/regular/large.jpg', trending=False),
    Show(title='Autosport the Series', category='TV Series', rating='18+', year=2016, regular_small='./assets/thumbnails/autosport-the-series/regular/small.jpg', regular_med='./assets/thumbnails/autosport-the-series/regular/medium.jpg', regular_lg='./assets/thumbnails/autosport-the-series/regular/large.jpg', trending=False),
    Show(title='Same Answer II', category='Movie', rating='E', year=2017, regular_small='./assets/thumbnails/same-answer-2/regular/small.jpg', regular_med='./assets/thumbnails/same-answer-2/regular/medium.jpg', regular_lg='./assets/thumbnails/same-answer-2/regular/large.jpg', trending=False),
    Show(title='Below Echo', category='TV Series', rating='PG', year=2016, regular_small='./assets/thumbnails/below-echo/regular/small.jpg', regular_med='./assets/thumbnails/below-echo/regular/medium.jpg', regular_lg='./assets/thumbnails/below-echo/regular/large.jpg', trending=False),
    Show(title='The Rockies', category='TV Series', rating='E', year=2015, regular_small='./assets/thumbnails/the-rockies/regular/small.jpg', regular_med='./assets/thumbnails/the-rockies/regular/medium.jpg', regular_lg='./assets/thumbnails/the-rockies/regular/large.jpg', trending=False),
    Show(title='Relentless', category='Movie', rating='PG', year=2017, regular_small='./assets/thumbnails/relentless/regular/small.jpg', regular_med='./assets/thumbnails/relentless/regular/medium.jpg', regular_lg='./assets/thumbnails/relentless/regular/large.jpg', trending=False),
    Show(title='Community of Ours', category='TV Series', rating='18+', year=2018, regular_small='./assets/thumbnails/community-of-ours/regular/small.jpg', regular_med='./assets/thumbnails/community-of-ours/regular/regular.jpg', regular_lg='./assets/thumbnails/community-of-ours/regular/large.jpg', trending=False),
    Show(title='Van Life', category='Movie', rating='PG', year=2015, regular_small='./assets/thumbnails/van-life/regular/small.jpg', regular_med='./assets/thumbnails/van-life/regular/medium.jpg', regular_lg='./assets/thumbnails/van-life/regular/large.jpg', trending=False),
    Show(title='The Heiress', category='Movie', rating='PG', year=2021, regular_small='./assets/thumbnails/the-heiress/regular/small.jpg', regular_med='./assets/thumbnails/the-heiress/regular/medium.jpg', regular_lg='./assets/thumbnails/the-heiress/regular/large.jpg', trending=False),
    Show(title='Off the Track', category='Movie', rating='18+', year=2017, regular_small='./assets/thumbnails/off-the-track/regular/small.jpg', regular_med='./assets/thumbnails/off-the-track/regular/medium.jpg', regular_lg='./assets/thumbnails/off-the-track/regular/large.jpg', trending=False),
    Show(title='Whispering Hill', category='Movie', rating='E', year=2017, regular_small='./assets/thumbnails/whispering-hill/regular/small.jpg', regular_med='./assets/thumbnails/whispering-hill/regular/medium.jpg', regular_lg='./assets/thumbnails/whispering-hill/regular/large.jpg', trending=False),
    Show(title='112', category='TV Series', rating='PG', year=2013, regular_small='./assets/thumbnails/112/regular/small.jpg', regular_med='./assets/thumbnails/112/regular/medium.jpg', regular_lg='./assets/thumbnails/112/regular/large.jpg', trending=False),
    Show(title='Lone Heart', category='Movie', rating='E', year=2017, regular_small='./assets/thumbnails/lone-heart/regular/small.jpg', regular_med='./assets/thumbnails/lone-heart/regular/medium.jpg', regular_lg='./assets/thumbnails/lone-heart/regular/large.jpg', trending=False),
    Show(title='Production Line', category='TV Series', rating='PG', year=2018, regular_small='./assets/thumbnails/production-line/regular/small.jpg', regular_med='./assets/thumbnails/production-line/regular/medium.jpg', regular_lg='./assets/thumbnails/production-line/regular/large.jpg', trending=False),
    Show(title='Dogs', category='TV Series', rating='E', year=2016, regular_small='./assets/thumbnails/dogs/regular/small.jpg', regular_med='./assets/thumbnails/dogs/regular/medium.jpg', regular_lg='./assets/thumbnails/dogs/regular/large.jpg', trending=False),
    Show(title='Asia in 24 Days', category='TV Series', rating='PG', year=2020, regular_small='./assets/thumbnails/asia-in-24-days/regular/small.jpg', regular_med='./assets/thumbnails/asia-in-24-days/regular/medium.jpg', regular_lg='./assets/thumbnails/asia-in-24-days/regular/large.jpg', trending=False),
    Show(title='The Tasty Tour', category='TV Series', rating='PG', year=2016, regular_small='./assets/thumbnails/the-tasty-tour/regular/small.jpg', regular_med='./assets/thumbnails/the-tasty-tour/regular/medium.jpg', regular_lg='./assets/thumbnails/the-tasty-tour/regular/large.jpg', trending=False),
    Show(title='Darker', category='Movie', rating='18+', year=2017, regular_small='./assets/thumbnails/darker/regular/small.jpg', regular_med='./assets/thumbnails/darker/regular/medium.jpg', regular_lg='./assets/thumbnails/darker/regular/large.jpg', trending=False),
    Show(title='Unresolved Cases', category='TV Series', rating='18+', year=2018, regular_small='./assets/thumbnails/unresolved-cases/regular/small.jpg', regular_med='./assets/thumbnails/unresolved-cases/regular/medium.jpg', regular_lg='./assets/thumbnails/unresolved-cases/regular/large.jpg', trending=False),
    Show(title='Mission: Saturn', category='Movie', rating='PG', year=2017, regular_small='./assets/thumbnails/mission-saturn/regular/small.jpg', regular_med='./assets/thumbnails/mission-saturn/regular/medium.jpg', regular_lg='./assets/thumbnails/mission-saturn/regular/large.jpg', trending=False)
]

db.add_all(shows)
db.commit()

# insert trending shows
trending_shows = [
    Trend(show_id=1, trending_small='./assets/thumbnails/beyond-earth/trending/small.jpg', trending_large='./assets/thumbnails/beyond-earth/trending/large.jpg'),
    Trend(show_id=2, trending_small='./assets/thumbnails/bottom-gear/trending/small.jpg', trending_large='./assets/thumbnails/bottom-gear/trending/large.jpg'),
    Trend(show_id=3, trending_small='./assets/thumbnails/undiscovered-cities/trending/small.jpg', trending_large='./assets/thumbnails/undiscovered-cities/trending/large.jpg'),
    Trend(show_id=4, trending_small='./assets/thumbnails/1998/trending/small.jpg', trending_large='./assets/thumbnails/1998/trending/large.jpg'),
    Trend(show_id=5, trending_small='./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg', trending_large='./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg')
]

db.add_all(trending_shows)
db.commit()

db.close()