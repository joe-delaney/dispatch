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

puts "Creating Group Messages..."
dm1 = GroupMessage.create!()
dm2 = GroupMessage.create!()
dm3 = GroupMessage.create!()
dm4 = GroupMessage.create!()
dm5 = GroupMessage.create!()
dm6 = GroupMessage.create!()

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

#dm1
s61 = Subscription.create!(subscriber_id: joe.id, subscribable_id: dm1.id, subscribable_type: "GroupMessage")
s62 = Subscription.create!(subscriber_id: sasha.id, subscribable_id: dm1.id, subscribable_type: "GroupMessage")

#dm2
s63 = Subscription.create!(subscriber_id: joe.id, subscribable_id: dm2.id, subscribable_type: "GroupMessage")
s64 = Subscription.create!(subscriber_id: ironman.id, subscribable_id: dm2.id, subscribable_type: "GroupMessage")

#dm3
s65 = Subscription.create!(subscriber_id: joe.id, subscribable_id: dm3.id, subscribable_type: "GroupMessage")
s66 = Subscription.create!(subscriber_id: sasha.id, subscribable_id: dm3.id, subscribable_type: "GroupMessage")
s67 = Subscription.create!(subscriber_id: shannon.id, subscribable_id: dm3.id, subscribable_type: "GroupMessage")

#dm4
s68 = Subscription.create!(subscriber_id: joe.id, subscribable_id: dm4.id, subscribable_type: "GroupMessage")
s69 = Subscription.create!(subscriber_id: jeff.id, subscribable_id: dm4.id, subscribable_type: "GroupMessage")
s70 = Subscription.create!(subscriber_id: anna.id, subscribable_id: dm4.id, subscribable_type: "GroupMessage")
s71 = Subscription.create!(subscriber_id: spongebob.id, subscribable_id: dm4.id, subscribable_type: "GroupMessage")

#dm5
s72 = Subscription.create!(subscriber_id: joe.id, subscribable_id: dm5.id, subscribable_type: "GroupMessage")
s73 = Subscription.create!(subscriber_id: voldemort.id, subscribable_id: dm5.id, subscribable_type: "GroupMessage")

#dm6
s74 = Subscription.create!(subscriber_id: sasha.id, subscribable_id: dm6.id, subscribable_type: "GroupMessage")
s75 = Subscription.create!(subscriber_id: shannon.id, subscribable_id: dm6.id, subscribable_type: "GroupMessage")

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

# # Avengers
m21 = Message.create!(author_id: captain.id, text: "Avengers. Assemble.", messagable_id: avengers.id, messagable_type: "Channel")
m22 = Message.create!(author_id: ironman.id, text: "I am Iron Man", messagable_id: avengers.id, messagable_type: "Channel")
m23 = Message.create!(author_id: thor.id, text: "You people are so petty. And tiny.", messagable_id: avengers.id, messagable_type: "Channel")
m24 = Message.create!(author_id: hulk.id, text: "I'm always angry", messagable_id: avengers.id, messagable_type: "Channel")
m25 = Message.create!(author_id: tchalla.id, text: "Wakanda will no longer watch from the shadows. We can not. We must not. We will work to be an example of how we, as brothers and sisters on this earth, should treat each other. ", messagable_id: avengers.id, messagable_type: "Channel")
m26 = Message.create!(author_id: blackwidow.id, text: "Yes, the world is a vulnerable place, and yes, we helped make it that way. But we’re also the ones best qualified to defend it. So if you want to arrest me, arrest me. You’ll know where to find me.", messagable_id: avengers.id, messagable_type: "Channel")
m27 = Message.create!(author_id: scarletwitch.id, text: "Don't Worry, Darling. I Have Everything Under Control.", messagable_id: avengers.id, messagable_type: "Channel")

# # Spongebob
m28 = Message.create!(author_id: spongebob.id, text: "I'm Ready. I'm Ready. I'm Ready", messagable_id: bikini_bottom.id, messagable_type: "Channel")
m29 = Message.create!(author_id: patrick.id, text: "Oh Boy, 3 AM!", messagable_id: bikini_bottom.id, messagable_type: "Channel")
m30 = Message.create!(author_id: plankton.id, text: "I'll get that Krabby Patty formula Krabs", messagable_id: bikini_bottom.id, messagable_type: "Channel")
m32 = Message.create!(author_id: mrkrabs.id, text: "I love money", messagable_id: bikini_bottom.id, messagable_type: "Channel")
m33 = Message.create!(author_id: squidward.id, text: "Spongebob, leave me alone", messagable_id: bikini_bottom.id, messagable_type: "Channel")
m34 = Message.create!(author_id: spongebob.id, text: "The Krusty Krab pizza is the pizza for you and me", messagable_id: bikini_bottom.id, messagable_type: "Channel")

#Friends
m35 = Message.create!(author_id: ross.id, text: "We were on a break!", messagable_id: friends.id, messagable_type: "Channel")
m36 = Message.create!(author_id: monica.id, text: "They don’t know that we know they know we know.", messagable_id: friends.id, messagable_type: "Channel")
m37 = Message.create!(author_id: rachel.id, text: "Well, maybe I don’t need your money. Wait, wait, I said maybe!", messagable_id: friends.id, messagable_type: "Channel")
m38 = Message.create!(author_id: phoebe.id, text: "Come on, Ross, you’re a paleontologist. Dig a little deeper.", messagable_id: friends.id, messagable_type: "Channel")
m39 = Message.create!(author_id: joey.id, text: "What’s not to like? Custard: good. Jam: good. Meat: good!", messagable_id: friends.id, messagable_type: "Channel")
m40 = Message.create!(author_id: chandler.id, text: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.", messagable_id: friends.id, messagable_type: "Channel")
m41 = Message.create!(author_id: ross.id, text: "Pivot!", messagable_id: friends.id, messagable_type: "Channel")
m42 = Message.create!(author_id: phoebe.id, text: "They don’t know that we know they know we know.", messagable_id: friends.id, messagable_type: "Channel")
m43 = Message.create!(author_id: joey.id, text: "Joey doesn't share food", messagable_id: friends.id, messagable_type: "Channel")

#HIMYM
m44 = Message.create!(author_id: ted.id, text: "Because sometimes even if you know how something’s gonna end, that doesn’t mean you can’t enjoy the ride.", messagable_id: himym.id, messagable_type: "Channel")
m45 = Message.create!(author_id: barney.id, text: "Whenever I’m sad, I stop being sad and be awesome instead.", messagable_id: himym.id, messagable_type: "Channel")
m46 = Message.create!(author_id: robin.id, text: "The future is scary, but you can’t just run back to the past because it’s familiar. Yes, it’s tempting, but it’s a mistake.", messagable_id: himym.id, messagable_type: "Channel")
m47 = Message.create!(author_id: marshall.id, text: "That cake. Best cake I ever had. Seriously, my stomach was like, ‘Hey bro, I don’t know what you’re eating cause I don’t have any eyes but it’s basically awesome, so keep sending it down Gullet Alley.’", messagable_id: himym.id, messagable_type: "Channel")
m48 = Message.create!(author_id: lily.id, text: "So really the biggest mistake would be not to make that mistake, because then you’ll go your whole life not knowing if something was a mistake or not.", messagable_id: himym.id, messagable_type: "Channel")
m49 = Message.create!(author_id: ted.id, text: "I finally found the one, Marshall. Her name is Bacon.", messagable_id: himym.id, messagable_type: "Channel")
m50 = Message.create!(author_id: robin.id, text: "The best I can give you is a fake smile and dead eyes.", messagable_id: himym.id, messagable_type: "Channel")
m51 = Message.create!(author_id: marshall.id, text: "Lily, there are a million reasons why I love you. You make me laugh, you take care of me when I’m sick, you’re sweet, caring and you even created an egg dish and named it after me. She puts a little Italian dressing on the eggs before she cooks them, it’s called Eggs Marshall and it’s awesome. But the main reason is you’re my best friend, Lily. You’re the best friend I’ve ever had.", messagable_id: himym.id, messagable_type: "Channel")
m52 = Message.create!(author_id: barney.id, text: "Believe it or not, I was not always as awesome as I am today.", messagable_id: himym.id, messagable_type: "Channel")

#Knicks 
m53 = Message.create!(author_id: ewing.id, text: "Go Hoyas and Go Knicks", messagable_id: knicks.id, messagable_type: "Channel")
m54 = Message.create!(author_id: barrett.id, text: "Putting in work to win next year", messagable_id: knicks.id, messagable_type: "Channel")

#Dogs
m55 = Message.create!(author_id: duke.id, text: "Woof woof woof", messagable_id: dogs.id, messagable_type: "Channel")
m56 = Message.create!(author_id: scout.id, text: "Bark bark", messagable_id: dogs.id, messagable_type: "Channel")
m57 = Message.create!(author_id: lucy.id, text: "WOOOOOOF", messagable_id: dogs.id, messagable_type: "Channel")
m58 = Message.create!(author_id: scooby.id, text: "Ruff ruff Ruff ruff", messagable_id: dogs.id, messagable_type: "Channel")
m59 = Message.create!(author_id: duke.id, text: "Woof woof woof Woof", messagable_id: dogs.id, messagable_type: "Channel")


#Hogwarts
m60 = Message.create!(author_id: harry.id, text: "I solemnly swear I am up to no good.", messagable_id: harrypotter.id, messagable_type: "Channel")
m61 = Message.create!(author_id: ron.id, text: "You're a little scary sometimes, you know that? Brilliant... but scary.", messagable_id: harrypotter.id, messagable_type: "Channel")
m62 = Message.create!(author_id: hermione.id, text: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.", messagable_id: harrypotter.id, messagable_type: "Channel")
m63 = Message.create!(author_id: voldemort.id, text: "There is no good and evil. There is only power. And those too weak to seek it", messagable_id: harrypotter.id, messagable_type: "Channel")
m64 = Message.create!(author_id: dumbledore.id, text: "It does not do well to dwell on dreams and forget to live.", messagable_id: harrypotter.id, messagable_type: "Channel")
m65 = Message.create!(author_id: snape.id, text: "There will be no foolish wand-waving or silly incantations in this class. As such, I don't expect many of you to appreciate the subtle science and exact art that is potion-making. However, for those select few who possess the predisposition, I can teach you how to bewitch the mind and ensnare the senses. I can tell you how to bottle fame, brew glory, and even put a stopper in death. Then again, maybe some of you have come to Hogwarts in possession of abilities so formidable that you feel confident enough to not pay attention!", messagable_id: harrypotter.id, messagable_type: "Channel")
m66 = Message.create!(author_id: harry.id, text: "I’m going to keep going until I succeed—or I die. Don’t think I don’t know how this might end. I’ve known it for years.", messagable_id: harrypotter.id, messagable_type: "Channel")

#dm1
m67 = Message.create!(author_id: joe.id, text: "Hi", messagable_id: dm1.id, messagable_type: "GroupMessage")
m68 = Message.create!(author_id: sasha.id, text: "Hello", messagable_id: dm1.id, messagable_type: "GroupMessage")
m69 = Message.create!(author_id: sasha.id, text: "How are you doing?", messagable_id: dm1.id, messagable_type: "GroupMessage")
m70 = Message.create!(author_id: joe.id, text: "I'm great, how are you!", messagable_id: dm1.id, messagable_type: "GroupMessage")
m71 = Message.create!(author_id: sasha.id, text: "Doing well!", messagable_id: dm1.id, messagable_type: "GroupMessage")

#dm2
m72 = Message.create!(author_id: joe.id, text: "Hi", messagable_id: dm2.id, messagable_type: "GroupMessage")
m73 = Message.create!(author_id: ironman.id, text: "Hello", messagable_id: dm2.id, messagable_type: "GroupMessage")
m74 = Message.create!(author_id: ironman.id, text: "How are you doing?", messagable_id: dm2.id, messagable_type: "GroupMessage")
m75 = Message.create!(author_id: joe.id, text: "I'm great, how are you!", messagable_id: dm2.id, messagable_type: "GroupMessage")
m76 = Message.create!(author_id: ironman.id, text: "Doing well!", messagable_id: dm2.id, messagable_type: "GroupMessage")

#dm3
m77 = Message.create!(author_id: joe.id, text: "Hi", messagable_id: dm2.id, messagable_type: "GroupMessage")
m78 = Message.create!(author_id: sasha.id, text: "Hello", messagable_id: dm2.id, messagable_type: "GroupMessage")
m79 = Message.create!(author_id: shannon.id, text: "How is everyone doing?", messagable_id: dm2.id, messagable_type: "GroupMessage")
m80 = Message.create!(author_id: joe.id, text: "I'm great, how are you!", messagable_id: dm2.id, messagable_type: "GroupMessage")
m81 = Message.create!(author_id: shannon.id, text: "Doing well!", messagable_id: dm2.id, messagable_type: "GroupMessage")

#dm4
m82 = Message.create!(author_id: joe.id, text: "Hi", messagable_id: dm2.id, messagable_type: "GroupMessage")
m83 = Message.create!(author_id: jeff.id, text: "Hello", messagable_id: dm2.id, messagable_type: "GroupMessage")
m84 = Message.create!(author_id: anna.id, text: "How is everyone doing?", messagable_id: dm2.id, messagable_type: "GroupMessage")
m85 = Message.create!(author_id: spongebob.id, text: "I'm great, how are you!", messagable_id: dm2.id, messagable_type: "GroupMessage")
m86 = Message.create!(author_id: anna.id, text: "Doing well!", messagable_id: dm2.id, messagable_type: "GroupMessage")

#dm5
m87 = Message.create!(author_id: joe.id, text: "Hi", messagable_id: dm5.id, messagable_type: "GroupMessage")
m88 = Message.create!(author_id: voldemort.id, text: "Hello", messagable_id: dm5.id, messagable_type: "GroupMessage")
m89 = Message.create!(author_id: voldemort.id, text: "How are you doing?", messagable_id: dm5.id, messagable_type: "GroupMessage")
m90 = Message.create!(author_id: joe.id, text: "I'm great, how are you!", messagable_id: dm5.id, messagable_type: "GroupMessage")
m91 = Message.create!(author_id: voldemort.id, text: "Doing well!", messagable_id: dm5.id, messagable_type: "GroupMessage")

#dm6
m92 = Message.create!(author_id: sasha.id, text: "Hi", messagable_id: dm6.id, messagable_type: "GroupMessage")
m93 = Message.create!(author_id: shannon.id, text: "Hello", messagable_id: dm6.id, messagable_type: "GroupMessage")
m94 = Message.create!(author_id: shannon.id, text: "How are you doing?", messagable_id: dm6.id, messagable_type: "GroupMessage")
m95 = Message.create!(author_id: sasha.id, text: "I'm great, how are you!", messagable_id: dm6.id, messagable_type: "GroupMessage")
m96 = Message.create!(author_id: shannon.id, text: "Doing well!", messagable_id: dm6.id, messagable_type: "GroupMessage")
