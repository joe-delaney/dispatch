# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

puts "Creating users..."

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

