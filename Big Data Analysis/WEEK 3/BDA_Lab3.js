
use new_bda


db.createCollection("Student")


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


db.Student.update({"Rollno":"010"},{$set:{"Emailid":"akash@gmail.com"}},{multi: true})


db.Student.update({"Rollno":"011"},{$set:{"Name":"FEM"}},{multi: true})


db.getCollection('Student').find().pretty()
