app.get("/insert", async (req, res) => {
  const p0 = new Productx({
    pId: 0,
    pImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Asus_x21_ultrabook.jpg/1024px-Asus_x21_ultrabook.jpg",
    pName: "pqrs",
    predefDate: new Date("2023-12-31T12:00:00Z"),
    predefTime: "00:00:00",
    started: true,
    active: true,
    users: [],
    live: [],
  });
  try {
    await p0.save();
    res.send("inserted!!");
  } catch (err) {
    console.log(err);
  }
});