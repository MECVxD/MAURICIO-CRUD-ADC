# **Requirements**
- Docker
- Node.js
- MySQL
  -  If you don't have MySQL on your computer, you can install it with Docker by using this command:

    `sudo docker run --name mysql-5.6 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.6`

    remember mysql use te root user

# **Excecute the app**
1. Clone this repo in your computer
2. Install dependencies with `npm install`
3. Create your own .env file based on the .env.example file
4. Run whit comand `npm run dev`
5. Try the application with postman or insomnia, based on the examples that propose down

# **Examples**
## **-GET**
### Request
URL `localhost:8181/v1/students/`
### Response
```
{
  "status": 200,
  "msg": "Resource retrieved succesfully",
  "data": [
    [
      {
        "id": 1,
        "firstname": "Mauricio",
        "lastname": "Covarrubias"
      }
    ]
```
## **-POST**
### Request
URL `localhost:8181/v1/students/`

```
{
	"id": 4,
	"firstname": "Roberto",
	"lastname": "Carlos"
}
```
### Response
```
{
  "status": 201,
  "msg": "Resource created succesfully"
}
```
## **-PUT**
### Request
URL use an id of the data we want to update `localhost:8181/v1/students/4`
```
{
	"id": 4,
	"firstname": "Roberto",
	"lastname": "Perez"
}
```
### Response
```
{
  "status": 200,
  "msg": "Resource updated succesfully"
}
```
## **-DELETE**
### Request
URL use an id of the data we want to delete `localhost:8181/v1/students/4`
### Response         
```
{
  "status": 200,
  "msg": "Resource deleted succesfully"
}
```
# Create Container With Docker-Compose
To create the docker compose, is important change the data of the .env file. Execute this command

`docker-compose up`

# Execute Tests
Run the test files with this command

`npm test`