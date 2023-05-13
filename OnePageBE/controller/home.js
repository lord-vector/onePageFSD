const homePage = async (req, res) => {
  try {
    res.send({
      header: "Test",
      subHeader: "Test Sub Header",
      button: { text: "button", link: "xyz" },
      cards: [
        { title: "first", content: "first content" },
        { title: "second", content: "second content" },
        { title: "third", content: "third content" },
        { title: "fourth", content: "fourth content" },
      ],
    });
  } catch (err) {
    res.send({ message: err });
  }
};

module.exports = { homePage };
