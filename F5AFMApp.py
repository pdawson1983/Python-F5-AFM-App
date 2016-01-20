import os
from flask import Flask, url_for, send_from_directory, get_flashed_messages, session, request, render_template

app = Flask(__name__)
#Added Favicon Support
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')
#Point default Traffic to home template
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route
if __name__=='__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
