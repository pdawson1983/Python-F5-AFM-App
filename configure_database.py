import sys
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

# Declarative System used for mapping database
Base = declarative_base()

#F5Device holds information specific to each F5 device
class F5Device(Base):
    __tablename__ = 'f5_device'

    id = Column(Integer, primary_key=True)
    ipAddress = Column(String(20), nullable=False)
    hostName = Column(String(50))
    details = Column(String(250))
    apiUserName = Column(String(50))
    apiPassword = Column(String(50))

#AFMStat holds information about the various AFM stats and contains the URI to gather the data through the F5 API.
class AFMStat(Base):
    __tablename__ = 'afm_stat'

    id = Column(Integer, primary_key=True)
    f5Device_Id = Column(Integer, ForeignKey('f5_device.id'))
    statType = Column(String(20))
    statDescription = Column(String(250))
    statURL = Column(String(250), nullable=False)

#StatValue holds date, time and value information for the various 
class StatValue(Base):
    __tablename__ = 'stat_value'

    id = Column(Integer, primary_key=True)
    afmStat_id = Column(Integer, ForeignKey('afm_stat.id'))
    dateTime = Column(DateTime)
    statValue = Column(Integer)

#Create database named F5AFM_App.db
engine = create_engine('sqlite:///F5AFM_App.db')
#Apply all metadata to database, F5AFM_App.db.
Base.metadata.create_all(engine)
