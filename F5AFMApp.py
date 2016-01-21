import os
from flask import Flask, url_for, send_from_directory, get_flashed_messages, session, request, render_template
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from configure_database import Base, F5Device, AFMStat, StatValue

engine = create_engine('sqlite:///F5AFM_App.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

#spawn Flask application
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

@app.route('/devices/')
def deviceList():
    devices = session.query(F5Device).all()
    print devices
    return render_template('devicelist.html', devices=devices)

@app.route('/device/<int:device_id>')
def device(device_id):
    return "%s" % device_id

@app.route('/device/<int:device_id>/stats/<int:stats_id>')
def statPage(device_id, stats_id):
    text = ''
    text += "%s, %s" %(device_id, stats_id)
    return text

@app.route('/device/<int:device_id>/stats/new')
def newStat():
	return "This page will allow you to add stats. :)"

@app.route('/device/new')
def newDevice():
	return "This page will allow you to add devices. :)"

 

if __name__=='__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
