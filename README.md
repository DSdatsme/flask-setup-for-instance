### steps to setup

#### we will be using python3
sudo apt-get update
sudo apt-get install git -y
sudo apt-get install python-pip -y
sudo pip install Flask
export FLASK_APP=run.py
pip install flask_cors

#### to run use following command
> flask run


#### To kill flask server on a port

> sudo apt-get install psmisc

> run sudo fuser -k 5000/tcp
