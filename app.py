from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello():
    return "Welcome to Python Flask!"

@app.route("/index")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
