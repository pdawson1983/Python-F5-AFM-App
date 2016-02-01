import os
from flask import Flask, url_for, send_from_directory, flash, get_flashed_messages, session, request, render_template, redirect
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from configure_database import Base, F5Device, AFMStat, StatValue

engine = create_engine('sqlite:///F5AFM_App.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

#spawn Flask application
app = Flask(__name__)
app.secret_key = '13641ijkqrewf9dflkq359faan230fanoacv92r3noj2398cncq92njfqwfughq9f0823nbr9fjawh90q23rlkijqhwef98qroh'
#Added Favicon Support
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')
#Point default Traffic to home template
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/device/')
@app.route('/devices/')
def deviceList():
    devices = session.query(F5Device).all()
    return render_template('devicelist.html', devices=devices)

@app.route('/device/new', methods=['GET','POST'])
def newDevice():
	if request.method == 'POST':
		post = request.get_json()
		device = F5Device(hostName = post.get('hostName'), ipAddress = post.get('ipAddress'), details = post.get('details'), apiUserName = post.get('apiUserName'), apiPassword = post.get('apiPassword'))
		session.add(device)
		session.commit()
		flash("Added New Device - %s" %device.hostName)
		return redirect(url_for('deviceList'))
	else:
		return render_template('newdevice.html')

@app.route('/device/<int:device_id>')
def device(device_id):
    device = session.query(F5Device).filter_by(id = device_id).one()
    return  render_template('device.html', device=device)

@app.route('/device/<int:device_id>/stats/<int:stats_id>')
def statPage(device_id, stats_id):
    text = ''
    text += "%s, %s" %(device_id, stats_id)
    return text

@app.route('/device/<int:device_id>/stats/new')
def newStat(device_id):
	return render_template('newstat.html')



 

if __name__=='__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
