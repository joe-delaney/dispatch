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

# Friends
joey = User.create!(email: "joey@friends.com", password: "123456", display_name: "Joey Tribiani", title: "Actor on Days of Our Lives")
rachel = User.create!(email: "rachel@friends.com", password: "123456", display_name: "Rachel Green", title: "Buyer for Ralph Lauren")
ross = User.create!(email: "ross@friends.com", password: "123456", display_name: "Ross Geller", title: "Paleontologist")
chandler = User.create!(email: "chandler@friends.com", password: "123456", display_name: "Chandler Bing", title: "Transponster")
phoebe = User.create!(email: "phoebe@friends.com", password: "123456", display_name: "Phoebe Buffay", title: "Masseuse / Singer")
monica = User.create!(email: "monica@friends.com", password: "123456", display_name: "Monica Geller", title: "Lead Chef")

# HIMYM
ted = User.create!(email: "ted@himym.com", password: "123456", display_name: "Ted Mosby", title: "Architect")
lily = User.create!(email: "lily@himym.com", password: "123456", display_name: "Lily Aldrin", title: "Art Buyer")
marshall = User.create!(email: "marshall@himym.com", password: "123456", display_name: "Marshall Eriksen", title: "Environmental Lawyer")
barney = User.create!(email: "barney@himym.com", password: "123456", display_name: "Barney Stinson", title: "Employee at Goliath National Bank")
robin = User.create!(email: "robin@himym.com", password: "123456", display_name: "Robin Scherbatsky", title: "News Anchor")


# Knicks
ewing = User.create!(email: "patrickewing@knicks.com", password: "123456", display_name: "Patrick Ewing", title: "Hall of Famer")
barrett = User.create!(email: "RJbarrett@knicks.com", password: "123456", display_name: "RJ Barrett", title: "Shooting guard")
starks = User.create!(email: "johnstarks@knicks.com", password: "123456", display_name: "John Starks", title: "Knicks legend")

# dogs
duke = User.create!(email: "duke@dogs.com", password: "123456", display_name: "Duke", title: "Samoyed")
scooby = User.create!(email: "scooby@dogs.com", password: "123456", display_name: "Scooby", title: "Golden Doodle")
lucy = User.create!(email: "lucy@dogs.com", password: "123456", display_name: "Lucy", title: "Australian Shepard")
scout = User.create!(email: "scout@dogs.com", password: "123456", display_name: "Scout", title: "Border Collie")

# harry potter
harry = User.create!(email: "harry@hogwarts.com", password: "123456", display_name: "Harry Potter", title: "The Chosen One")
ron = User.create!(email: "ron@hogwarts.com", password: "123456", display_name: "Ron Weasley", title: "One of many Weasleys")
hermione = User.create!(email: "hermione@hogwarts.com", password: "123456", display_name: "Hermione Granger", title: "Star student")
voldemort = User.create!(email: "voldemort@hogwarts.com", password: "123456", display_name: "Voldemort", title: "The one who shall not be named")
dumbledore = User.create!(email: "dumbledore@hogwarts.com", password: "123456", display_name: "Albus Dumbledore", title: "Head of Hogwarts")
snape = User.create!(email: "snape@hogwarts.com", password: "123456", display_name: "Professor Snape", title: "Defense Against the Dark Arts professor")

puts "Creating channels..."
general = Channel.create!(creator_id: joe.id, name: "general", topic: "General information", description: "To be used for general info and announcements")
office = Channel.create!(creator_id: joe.id, name: "The Office", topic: "Dunder Mifflin", description: "Providing all of your paper needs")
avengers = Channel.create!(creator_id: joe.id, name: "Avengers", topic: "Stopping supervillains", description: "Secure channel for saving the world")
bikini_bottom = Channel.create!(creator_id: joe.id, name: "Bikini Bottom", topic: "Underwater shenanigans", description: "Friends of the sponge who lives in a pineapple under the sea")
friends = Channel.create!(creator_id: joe.id, name: "Friends", topic: "Central Perk", description: "I'll be there for you")
himym = Channel.create!(creator_id: joe.id, name: "How I Met Your Mother", topic: "5 friends in NYC", description: "Follow Ted on his quest to find love")
knicks = Channel.create!(creator_id: joe.id, name: "Knicks", topic: "Go NY Go NY Go", description: "Trying to win the NBA Championship")
dogs = Channel.create!(creator_id: joe.id, name: "Dogs", topic: "Woof Woof", description: "Woof woof Woof woof Woof woof bark bark")
harrypotter = Channel.create!(creator_id: harry.id, name: "Hogwarts", topic: "Casting spells", description: "Learning witchcraft and wizardry")


puts "Creating subscriptions..."

# General 
s1 = Subscription.create!(subscriber_id: joe.id, subscribable_id: general.id, subscribable_type: "Channel")
s2 = Subscription.create!(subscriber_id: joe1.id, subscribable_id: general.id, subscribable_type: "Channel")
s3 = Subscription.create!(subscriber_id: joe2.id, subscribable_id: general.id, subscribable_type: "Channel")
s4 = Subscription.create!(subscriber_id: joe3.id, subscribable_id: general.id, subscribable_type: "Channel")
s5 = Subscription.create!(subscriber_id: sasha.id, subscribable_id: general.id, subscribable_type: "Channel")
s6 = Subscription.create!(subscriber_id: shannon.id, subscribable_id: general.id, subscribable_type: "Channel")
s7 = Subscription.create!(subscriber_id: mike.id, subscribable_id: general.id, subscribable_type: "Channel")
s8 = Subscription.create!(subscriber_id: tom.id, subscribable_id: general.id, subscribable_type: "Channel")
s9 = Subscription.create!(subscriber_id: jeff.id, subscribable_id: general.id, subscribable_type: "Channel")
s10 = Subscription.create!(subscriber_id: anna.id, subscribable_id: general.id, subscribable_type: "Channel")

# The Office
s11 = Subscription.create!(subscriber_id: joe.id, subscribable_id: office.id, subscribable_type: "Channel")
s12 = Subscription.create!(subscriber_id: michael.id, subscribable_id: office.id, subscribable_type: "Channel")
s13 = Subscription.create!(subscriber_id: jim.id, subscribable_id: office.id, subscribable_type: "Channel")
s14 = Subscription.create!(subscriber_id: pam.id, subscribable_id: office.id, subscribable_type: "Channel")
s15 = Subscription.create!(subscriber_id: dwight.id, subscribable_id: office.id, subscribable_type: "Channel")
s16 = Subscription.create!(subscriber_id: kelly.id, subscribable_id: office.id, subscribable_type: "Channel")
s16 = Subscription.create!(subscriber_id: stanley.id, subscribable_id: office.id, subscribable_type: "Channel")

# Avengers
s17 = Subscription.create!(subscriber_id: joe.id, subscribable_id: avengers.id, subscribable_type: "Channel")
s18 = Subscription.create!(subscriber_id: captain.id, subscribable_id: avengers.id, subscribable_type: "Channel")
s19 = Subscription.create!(subscriber_id: ironman.id, subscribable_id: avengers.id, subscribable_type: "Channel")
s20 = Subscription.create!(subscriber_id: thor.id, subscribable_id: avengers.id, subscribable_type: "Channel")
s21 = Subscription.create!(subscriber_id: hulk.id, subscribable_id: avengers.id, subscribable_type: "Channel")
s22 = Subscription.create!(subscriber_id: tchalla.id, subscribable_id: avengers.id, subscribable_type: "Channel")
s23 = Subscription.create!(subscriber_id: scarletwitch.id, subscribable_id: avengers.id, subscribable_type: "Channel")
s24 = Subscription.create!(subscriber_id: blackwidow.id, subscribable_id: avengers.id, subscribable_type: "Channel")

#Spongebob
s25 = Subscription.create!(subscriber_id: joe.id, subscribable_id: bikini_bottom.id, subscribable_type: "Channel")
s26 = Subscription.create!(subscriber_id: spongebob.id, subscribable_id: bikini_bottom.id, subscribable_type: "Channel")
s27 = Subscription.create!(subscriber_id: patrick.id, subscribable_id: bikini_bottom.id, subscribable_type: "Channel")
s28 = Subscription.create!(subscriber_id: sandycheeks.id, subscribable_id: bikini_bottom.id, subscribable_type: "Channel")
s29 = Subscription.create!(subscriber_id: plankton.id, subscribable_id: bikini_bottom.id, subscribable_type: "Channel")
s30 = Subscription.create!(subscriber_id: mrkrabs.id, subscribable_id: bikini_bottom.id, subscribable_type: "Channel")
s31 = Subscription.create!(subscriber_id: squidward.id, subscribable_id: bikini_bottom.id, subscribable_type: "Channel")

#Friends
s32 = Subscription.create!(subscriber_id: joe.id, subscribable_id: friends.id, subscribable_type: "Channel")
s33 = Subscription.create!(subscriber_id: ross.id, subscribable_id: friends.id, subscribable_type: "Channel")
s34 = Subscription.create!(subscriber_id: rachel.id, subscribable_id: friends.id, subscribable_type: "Channel")
s35 = Subscription.create!(subscriber_id: chandler.id, subscribable_id: friends.id, subscribable_type: "Channel")
s36 = Subscription.create!(subscriber_id: monica.id, subscribable_id: friends.id, subscribable_type: "Channel")
s37 = Subscription.create!(subscriber_id: phoebe.id, subscribable_id: friends.id, subscribable_type: "Channel")
s38 = Subscription.create!(subscriber_id: joey.id, subscribable_id: friends.id, subscribable_type: "Channel")

#HIMYM
s39 = Subscription.create!(subscriber_id: joe.id, subscribable_id: himym.id, subscribable_type: "Channel")
s40 = Subscription.create!(subscriber_id: barney.id, subscribable_id: himym.id, subscribable_type: "Channel")
s41 = Subscription.create!(subscriber_id: ted.id, subscribable_id: himym.id, subscribable_type: "Channel")
s42 = Subscription.create!(subscriber_id: robin.id, subscribable_id: himym.id, subscribable_type: "Channel")
s43 = Subscription.create!(subscriber_id: marshall.id, subscribable_id: himym.id, subscribable_type: "Channel")
s44 = Subscription.create!(subscriber_id: lily.id, subscribable_id: himym.id, subscribable_type: "Channel")

#Knicks
s45 = Subscription.create!(subscriber_id: joe.id, subscribable_id: knicks.id, subscribable_type: "Channel")
s46 = Subscription.create!(subscriber_id: ewing.id, subscribable_id: knicks.id, subscribable_type: "Channel")
s47 = Subscription.create!(subscriber_id: barrett.id, subscribable_id: knicks.id, subscribable_type: "Channel")
s48 = Subscription.create!(subscriber_id: starks.id, subscribable_id: knicks.id, subscribable_type: "Channel")

#dogs
s49 = Subscription.create!(subscriber_id: joe.id, subscribable_id: dogs.id, subscribable_type: "Channel")
s50 = Subscription.create!(subscriber_id: duke.id, subscribable_id: dogs.id, subscribable_type: "Channel")
s51 = Subscription.create!(subscriber_id: scooby.id, subscribable_id: dogs.id, subscribable_type: "Channel")
s52 = Subscription.create!(subscriber_id: lucy.id, subscribable_id: dogs.id, subscribable_type: "Channel")
s53 = Subscription.create!(subscriber_id: scout.id, subscribable_id: dogs.id, subscribable_type: "Channel")

#Harry Potter
# s54 = Subscription.create!(subscriber_id: joe.id, subscribable_id: harrypotter.id, subscribable_type: "Channel")
s55 = Subscription.create!(subscriber_id: harry.id, subscribable_id: harrypotter.id, subscribable_type: "Channel")
s56 = Subscription.create!(subscriber_id: ron.id, subscribable_id: harrypotter.id, subscribable_type: "Channel")
s57 = Subscription.create!(subscriber_id: hermione.id, subscribable_id: harrypotter.id, subscribable_type: "Channel")
s58 = Subscription.create!(subscriber_id: voldemort.id, subscribable_id: harrypotter.id, subscribable_type: "Channel")
s59 = Subscription.create!(subscriber_id: dumbledore.id, subscribable_id: harrypotter.id, subscribable_type: "Channel")
s60 = Subscription.create!(subscriber_id: snape.id, subscribable_id: harrypotter.id, subscribable_type: "Channel")

puts "Creating messages..."

#General
m1 = Message.create!(author_id: joe.id, text: "Welcome to the general slack channel", messagable_id: general.id, messagable_type: "Channel")
m2 = Message.create!(author_id: sasha.id, text: "How is everyone doing?", messagable_id: general.id, messagable_type: "Channel")
m3 = Message.create!(author_id: shannon.id, text: "What's up team!", messagable_id: general.id, messagable_type: "Channel")
m4 = Message.create!(author_id: jeff.id, text: "Ready to get to work", messagable_id: general.id, messagable_type: "Channel")
m5 = Message.create!(author_id: joe.id, text: "Feel free to reach out with any questions", messagable_id: general.id, messagable_type: "Channel")
m6 = Message.create!(author_id: sasha.id, text: "Thanks Joe!", messagable_id: general.id, messagable_type: "Channel")

#The Office
m7 = Message.create!(author_id: michael.id, text: "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.", messagable_id: office.id, messagable_type: "Channel")
m8 = Message.create!(author_id: kelly.id, text: "I talk a lot, so I’ve learned to tune myself out.", messagable_id: office.id, messagable_type: "Channel")
m9 = Message.create!(author_id: michael.id, text: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", messagable_id: office.id, messagable_type: "Channel")
m10 = Message.create!(author_id: stanley.id, text: "If I don’t have some cake soon, I might die.", messagable_id: office.id, messagable_type: "Channel")
m11 = Message.create!(author_id: michael.id, text: "The worst thing about prison was the dementors.", messagable_id: office.id, messagable_type: "Channel")
m12 = Message.create!(author_id: jim.id, text: "Bears. Beets. Battlestar Galactica", messagable_id: office.id, messagable_type: "Channel")
m13 = Message.create!(author_id: dwight.id, text: "Identity theft is not a joke, Jim! Millions of families suffer every year.", messagable_id: office.id, messagable_type: "Channel")
m14 = Message.create!(author_id: michael.id, text: "I am running away from my responsibilities. And it feels good.", messagable_id: office.id, messagable_type: "Channel")
m15 = Message.create!(author_id: pam.id, text: "There’s a lot of beauty in ordinary things. Isn’t that kind of the point?", messagable_id: office.id, messagable_type: "Channel")
m16 = Message.create!(author_id: michael.id, text: "I am Beyoncé, always.", messagable_id: office.id, messagable_type: "Channel")
m17 = Message.create!(author_id: dwight.id, text: "I am faster than 80 percent of all snakes.", messagable_id: office.id, messagable_type: "Channel")
m18 = Message.create!(author_id: michael.id, text: "It takes an advanced sense of humor. I don't expect everybody to understand.", messagable_id: office.id, messagable_type: "Channel")
m19 = Message.create!(author_id: dwight.id, text: "You only live once? False. You live every day. You only die once.", messagable_id: office.id, messagable_type: "Channel")
m20 = Message.create!(author_id: kelly.id, text: "I am one of the few people who looks hot eating a cupcake.", messagable_id: office.id, messagable_type: "Channel")
