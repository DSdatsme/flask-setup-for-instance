# Flask Execute on Instance

Repo contains a sample code to be used to create a webservice and which in turn will do some kind of execution on host machine.

## Steps to Setup

### we will be using python3

```bash
sudo apt-get update <br>
sudo apt-get install git -y <br>
sudo apt-get install python-pip -y <br>
sudo pip install Flask <br>
export FLASK_APP=run.py <br>
pip install flask_cors
```

### to run use following command

```bash
flask run
```

### To kill flask server on a port

```bash
sudo apt-get install psmisc
run sudo fuser -k 5000/tcp
```

## Flow

* Clone the code on virtual machine of your desired cloud provider.
* Make changes in [api/run.py](api/run.py) file. The changes you want to make are in '@app.route' 's parameter.
Give it a desired name of you choice. This will be used while sending request to that webservice.
Example: <ip_adderss>/my_app_route
* Next thing you want to change is the code inside the method. Write your own logic what you want to do inside the method below the line where you edited your '@app.route'.
* That's it! Now run the flask app considering you have followed all the setup steps.

> You can ignore the `ui` folder, it's just some starter code.

## TLDR

Trigger a webservice hosted in flask from a cloud function or lambda.
