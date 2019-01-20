### steps to setup

#### we will be using python3
sudo apt-get update <br>
sudo apt-get install git -y <br>
sudo apt-get install python-pip -y <br>
sudo pip install Flask <br>
export FLASK_APP=run.py <br>
pip install flask_cors

#### to run use following command
> flask run


#### To kill flask server on a port

> sudo apt-get install psmisc<br>
run sudo fuser -k 5000/tcp
