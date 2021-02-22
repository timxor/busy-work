# python-flask-api
python-flask-api

python version: 3.9.1

1. app.py
2. requirments.txt
3. Dockerfile
4. docker-compose.yaml
5. README.md
6. LICENSE

## Download, install & run

1. ```docker-compose up```
2. open browser to: ```localhost:5000/```
3. Install: ```pip install -r requirements.txt```
4. Run: ```python app.py```
5. Create appointment: ``` ```
6. Get appointments: ``` ```


## JSON API Endpoints

1. ```http://localhost:5000/create_appointment```
    input:
      - date/time (required)
      - userID (required)

    curl example: ```curl --header "Content-Type: application/json" \
                          --request POST \
                          --data '{"datetime":"2021-02-08 14:00:00","userID":"tim@acceptanceai.com"}' \
                          http://localhost:5000/create_appointment```


2. ```http://localhost:5000/get_appointments```
    input:
      - userID (required)



## Versions

1. python3 --version: 3.9.1
