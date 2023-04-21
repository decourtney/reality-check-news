const mongoose = require("mongoose");

const db = require("./connection");
const {
  User,
  Profile,
  Article,
  Media,
  Category,
  Comment,
  Reaction,
} = require("../models");

db.once("open", async () => {
  await Category.deleteMany();
  const categories = await Category.insertMany([
    { name: "Entertainment" },
    { name: "Sports" },
    { name: "Politics" },
    { name: "Weather" },
    { name: "Technology" },
    { name: "Business" },
    { name: "Health" },
  ]);
  console.log("categories seeded");

  const profileData = [
    {
      name: "User Profile",
      bio: "I am a software engineer from California.",
      location: "San Francisco, CA",
    },
    {
      name: "User Profile",
      bio: "I am a graphic designer from New York.",
      location: "Brooklyn, NY",
    },
    {
      name: "User Profile",
      bio: "I am a writer from London.",
      location: "London, UK",
    },
  ];

  const userData = [
    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "johndoe@gmail.com",
      password: "password123",
      profile: new mongoose.Types.ObjectId(),
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      username: "janedoe",
      email: "janedoe@gmail.com",
      password: "password456",
      profile: new mongoose.Types.ObjectId(),
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      username: "bobsmith",
      email: "bobsmith@gmail.com",
      password: "password789",
      profile: new mongoose.Types.ObjectId(),
    },
  ];

  await Profile.deleteMany();
  await User.deleteMany();
  await Article.deleteMany();
  await Comment.deleteMany();
  // Seed Profile data
  const users = await Profile.create(profileData)
    .then(async (profiles) => {
      console.log("Profile data seeded:");

      // Assign profile IDs to users
      userData[0].profile = profiles[0]._id;
      userData[1].profile = profiles[1]._id;
      userData[2].profile = profiles[2]._id;

      // Seed User data with associated Profile
      await User.create(userData)
        .then(async (users) => console.log("User data seeded"))
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));

  const articles = async () => {
    const users = await User.find();
    const cats = await Category.find();

    const articleData = [
      {
        user: users[0]._id,
        title: "First Article",
        content: "This is the content of the first article.",
        categories: [cats[0]._id],
        comments: [],
      },
      {
        user: users[1]._id,
        title: "Second Article",
        content: "This is the content of the second article.",
        categories: [cats[1]._id],
        comments: [],
      },
    ];

    const commentsData = [
      {
        user: users[0]._id,
        content: "This is a comment on the first article.",
      },
      {
        user: users[1]._id,
        content: "This is a comment on the second article.",
      },
      {
        user: users[2]._id,
        content: "This is another comment on the second article.",
      },
    ];

    const createdArticles = await Article.create(articleData);

    // Associate comments with articles
    for (let i = 0; i < commentsData.length; i++) {
      const comment = await Comment.create({
        ...commentsData[i],
        article: createdArticles[i % 2]._id, // alternate between first and second article
      });

      // Associate comment ID with article
      createdArticles[i % 2].comments.push(comment._id);
      await createdArticles[i % 2].save();
    }

    console.log("Article data seeded");
  };

  await articles();

  process.exit();
});
