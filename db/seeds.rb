# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

puts "Creating users..."

joe = User.create!(email: "joe@test.com", password: "123456", display_name: "Joe")
sasha = User.create!(email: "sasha@test.com", password: "123456", display_name: "Sasha")

