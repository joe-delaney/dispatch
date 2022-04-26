# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all

puts "Creating users..."

# General
joe = User.create!(email: "joe@test.com", password: "123456", display_name: "Joe", title: "Full Stack Engineer")
joe1 = User.create!(email: "joe1@test.com", password: "123456", display_name: "Joe Delaney", title: "Dog  Enthusiast")
joe2 = User.create!(email: "joe2@test.com", password: "123456", display_name: "Joseph Delaney", title: "Knicks Fan")
joe3 = User.create!(email: "joe3@test.com", password: "123456", display_name: "JD", title: "World Traveler")
sasha = User.create!(email: "sasha@test.com", password: "123456", display_name: "Sasha", title: "iOS Developer")
shannon = User.create!(email: "shannon@test.com", password: "123456", display_name: "Shannon", title: "Singer")
mike = User.create!(email: "mike@test.com", password: "123456", display_name: "Mike D", title: "Cat Dad")
tom = User.create!(email: "tom@test.com", password: "123456", display_name: "Tommy", title: "Financial Guru")
jeff = User.create!(email: "jeff@test.com", password: "123456", display_name: "Jeffrey", title: "Hat Enthusiast")
anna = User.create!(email: "anna@test.com", password: "123456", display_name: "Anna", title: "Golden Doodle Trainer")

# The Office
michael = User.create!(email: "michael@dundermifflin.com", password: "123456", display_name: "Michael Scott", title: "Branch Manager")
jim = User.create!(email: "jim@dundermifflin.com", password: "123456", display_name: "Jim Halpert", title: "Salesman")
pam = User.create!(email: "pam@dundermifflin.com", password: "123456", display_name: "Pam Beasley", title: "Receptionist")
dwight = User.create!(email: "dwight@dundermifflin.com", password: "123456", display_name: "Dwight Schrute", title: "Assistant to the Regional Manager")
stanley = User.create!(email: "stanley@dundermifflin.com", password: "123456", display_name: "Stanley Hudson", title: "Salesman")
kelly = User.create!(email: "kelly@dundermifflin.com", password: "123456", display_name: "Kelly Kapoor", title: "Customer Service Specialist")

# Avengers
captain = User.create!(email: "captain@avengers.com", password: "123456", display_name: "Steve Rodgers", title: "Captain America")
ironman = User.create!(email: "ironman@avengers.com", password: "123456", display_name: "Tony Stark", title: "Iron Man")
thor = User.create!(email: "thor@avengers.com", password: "123456", display_name: "Thor Odinson", title: "God of Thunder")
hulk = User.create!(email: "hulk@avengers.com", password: "123456", display_name: "Bruce Banner", title: "The Incredible Hulk")
tchalla = User.create!(email: "tchalla@avengers.com", password: "123456", display_name: "T'challa", title: "Black Panther")
blackwidow = User.create!(email: "blackwidow@avengers.com", password: "123456", display_name: "Natasha Romanov", title: "Black Widow")
scarletwitch = User.create!(email: "scarletwitch@avengers.com", password: "123456", display_name: "Wanda Maximoff", title: "Scarlet Witch")

# Spongebob
spongebob = User.create!(email: "spongebob@bikinibottom.com", password: "123456", display_name: "Spongebob Squarepants", title: "Krusty Krab Employee")
patrick = User.create!(email: "patrick@bikinibottom.com", password: "123456", display_name: "Patrick Star", title: "Professional napper")
mrkrabs = User.create!(email: "mrkrabs@bikinibottom.com", password: "123456", display_name: "Mr. Krabs", title: "Owner of the Krusty Krab")
squidward = User.create!(email: "squidward@bikinibottom.com", password: "123456", display_name: "Squidward Tentacles", title: "Clarinet Expert")
sandycheeks = User.create!(email: "sandycheeks@bikinibottom.com", password: "123456", display_name: "Sandy Cheeks", title: "Scientist")
plankton = User.create!(email: "plankton@bikinibottom.com", password: "123456", display_name: "Sheldon J. Plankton", title: "Owner of the Chum Bucket")

puts "Creating channels..."
general = Channel.create(creator_id: joe.id, name: "general", topic: "General information", description: "To be used for general info and announcements")
general = Channel.create(creator_id: joe.id, name: "The Office", topic: "Dunder Mifflin", description: "Providing all of your paper needs")
general = Channel.create(creator_id: joe.id, name: "Avengers", topic: "Stopping supervillains", description: "Secure channel for saving the world")
general = Channel.create(creator_id: joe.id, name: "Bikini Bottom", topic: "Underwater shenanigans", description: "Friends of the sponge who lives in a pineapple under the sea")



