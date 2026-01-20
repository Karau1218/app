import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});

router.get(["/about", "/info"], (req, res) => {
 return res.status(200).json({

   message: "Campus directory routes",
    routes: ["GET /", "GET /about|/info", "GET/:id", "GET /search?city=&open=&program="]
    })

 });
export default router;