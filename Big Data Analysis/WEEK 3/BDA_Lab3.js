1)

use new_bda





db.createCollection("Student")



2)

db.Student.insert({

    Name: "Nitish",

    Rollno:"065",

    Age:20,

    ContactNo:"9380692117",

    Emailid:"nitishb.cs18@bmsce.ac.in"})





db.Student.insert([{ Name: "Nikhil", Rollno:"061", Age:20, ContactNo:"9898989898", Emailid:"nikhil.cs18@bmsce.ac.in"},

                   {Name:"Pranav", Rollno:"071", Age:20, ContactNo:"9898979778",Emailid:"pranav.cs18@bmsce.ac.in"}])







db.Student.insert([{ Name: "Akshay", Rollno:"010", Age:20, ContactNo:"9380696544", Emailid:"akshay.cs18@bmsce.ac.in"}, 

                   {Name: "ABC", Rollno:"099", Age:20, ContactNo:"9198989898", Emailid:"abc.cs18@bmsce.ac.in"}])



3)

db.Student.update({"Rollno":"010"},{$set:{"Emailid":"akash@gmail.com"}},{multi: true})



4)

db.Student.update({"Rollno":"011"},{$set:{"Name":"FEM"}},{multi: true})


db.getCollection('Student').find().pretty()


5)

C:\mongodb-database-tools-windows-x86_64-100.1.1\bin>mongoexport --db=new_bda --collection=Student --type=csv --fields=Rollno,Name,Age,ContactNo,Emailid --out=D:\BDA\student.csv
2021-04-05T16:28:45.744+0530    connected to: mongodb://localhost/
2021-04-05T16:28:45.785+0530    exported 6 records

6)

db.dropDatabase()


7)

mongoimport -d Studentdb -c student --type csv --file=D:\BDA\student.csv --headerline
2021-04-05T16:40:00.078+0530    connected to: mongodb://localhost/
2021-04-05T16:40:00.122+0530    6 document(s) imported successfully. 0 document(s) failed to import.
