# CTRL+F5 to refresh css style on a website !!!!!!!
import os
import sqlite3

from flask import Flask, g
from flask import render_template

app = Flask(__name__)

app.config.update(dict(
    SECRET_KEY = 'bardzosekretnawartosc',   # wartość wykorzystywana do obsługi sesji
    DATABASE = os.path.join(app.root_path, 'db.sqlite'),  # scieżka do pliku bazy
    SITE_NAME = 'Noughts and Crosses'  # nazwa aplikacji
))


def get_db():
    '''Tworzenie połączenia z bazą danych'''
    if not g.get('db'):  # jezeli brak połączenia to je tworzymy
        conn = sqlite3.connect(app.config['DATABASE'])
        conn.row_factory = sqlite3.Row
        g.db = conn  # zapisujemy połączenie w kontekście aplikacji
    return g.db  # zwracamy połączenie z bazą


@app.teardown_appcontext
def close_db(error):
    '''Zamykanie połączenia z bazą'''
    if g.get('db'):
        g.db.close()

@app.route('/play')
def play():
    return render_template('play.html')


# @app.route('/', methods=['GET', 'POST'])
@app.route('/')
def index():
    return render_template('index.html')

# error=None
#     if request.method=='POST':
#         zadanie = request.form['zadanie'].strip()
#         if len(zadanie) >0:
#             zrobione = '0'
#             data_dodania = datetime.now()
#             db = get_db()  # utworzenie obiektu bazy danych
#             db.execute('INSERT INTO zadania VALUES (?, ?, ?, ?);',
#                        [None, zadanie, zrobione, data_dodania])
#             db.commit()
#             flash('Dodano nowe zadanie.')
#             return redirect(url_for('zadania'))
#         error= 'Nie możesz dodać pustego zadania'  # komunikat o błędzie
#
#     db = get_db()
#     kursor = db.execute('SELECT * FROM zadania ORDER BY data_dodania DESC;')
#     zadania = kursor.fetchall()  #fetchall zwraca dane w formie listy
#     return render_template('zadania.html', zadania=zadania, error=error)
if __name__ == '__main__':
    app.run(debug=True)
