const homePage = async (req, res) => {
  try {
    res.send({
      header: "One Page Bootstrap Website Template",
      subHeader: "We are team of talented designers",
      button: { text: "Get Started", link: "/" },
      cards: [
        {
          title: "Flight Booking",
          content: "make your trip easy with our easy flight booking",
        },
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
