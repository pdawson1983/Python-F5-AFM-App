from flask import Flask, url_for

app = Flask(__name__)

@app.route('/')
def home():
    text = '<a href=%s>link</a>' % url_for('home')
    return text



if __name__=='__main__':
    app.run(host='0.0.0.0', port=80, debug=True)

