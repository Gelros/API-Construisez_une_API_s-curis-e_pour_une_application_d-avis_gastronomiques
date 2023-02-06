const Sauces = require("../models/Sauces");

exports.like = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id })
    .then((obj) => {
      //LIKE**********
      if (!obj.usersLiked.includes(req.body.userId) && req.body.like === 1) {
        Sauces.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: 1 },
            $push: { usersLiked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "like: + 1" }))
          .catch((error) => res.status(400).json({ error }));
      }

      if (obj.usersLiked.includes(req.body.userId) && req.body.like === 0) {
        Sauces.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: -1 },
            $pull: { usersLiked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "like: 0" }))
          .catch((error) => res.status(400).json({ error }));
      }
      //********************

      //DISLIKE********
      if (
        !obj.usersDisliked.includes(req.body.userId) &&
        req.body.like === -1
      ) {
        Sauces.updateOne(
          { _id: req.params.id },
          {
            $inc: { dislikes: 1 },
            $push: { usersDisliked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "dislike: + 1" }))
          .catch((error) => res.status(400).json({ error }));
      }

      if (obj.usersDisliked.includes(req.body.userId) && req.body.like === 0) {
        Sauces.updateOne(
          { _id: req.params.id },
          {
            $inc: { dislikes: -1 },
            $pull: { usersDisliked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: "dislike: 0" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(404).json({ error }));
};
