const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    {
      id: 1,
      firstname: "Elemmson",
      lastname: "Ifeanyi"
    },
    {
      id: 2,
      firstname: "Ella",
      lastname: "Onyii"
    },
    {
      id: 3,
      firstname: "Precious",
      lastname: "Melah"
    },
    {
      id: 4,
      firstname: "Okon",
      lastname: "Ernest"
    },
    {
      id: 5,
      firstname: "Francis",
      lastname: "Obi"
    }
  ];
  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
