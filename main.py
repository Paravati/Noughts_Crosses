# CTRL+F5 to refresh css style on a website !!!!!!!
from flask import Flask, g
from flask import render_template

app = Flask(__name__)


@app.route('/play')
def play():
    return render_template('play.html')


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
