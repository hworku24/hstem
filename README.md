# Being Human in STEM

This is a Databases project for Being Human in STEM initiative at Amherst College.

* Authors: Hanaa Charania, Hewan Worku, Nayeon Shin, Rachel Lin
* Tech stack:
  - Front-end: React, Chakra UI
  - Back-end: Django, Django REST Framework, SQL, PostgreSQL

## How to run
- Front-end: https://hstem.vercel.app
- Back-end (hasn't been successfully deployed):
  1. Install pipenv
  2. Run:
    ```
    # ./hstemdb
    $ pipenv shell
    $ pipenv install
    $ cd backend/
    $ python manage.py makemigrations
    $ python manage.py migrate
    $ python manage.py runserver
    ```
