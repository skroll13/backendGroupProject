
sequelize model:generate --name users --attributes userName:string,password:string,userEmail:string



sequelize model:generate --name nationalParks --attributes parkName:string,description:string,state:string,userID:integer



sequelize model:generate --name blurbs --attributes userID:integer,parkID:integer,blurbContent:string