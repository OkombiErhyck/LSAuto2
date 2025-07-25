const express = require('express');
const cors = require("cors");
const mongoose  = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
require("dotenv").config();
const app = express();
const CookieParser = require("cookie-parser");
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');
const fs =require("fs");
const Place =require("./models/Place.js");
const multer = require('multer');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({ limit: '50mb' });
app.use(jsonParser);


const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "123456789";
const bucket = 'lsauto';


app.use(cors({
  origin: "https://ls-auto2-nd3l.vercel.app", 
  credentials: true, 
}));
app.use(CookieParser());
app.use(express.json());
app.use("/uploads", express.static(__dirname+"/uploads"));
 


async function uploadToS3(path, originalFilename, mimetype) {
  const client = new S3Client({
    region: 'eu-north-1',
    credentials: {

      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },

  });

  const parts =originalFilename.split('-');
  const ext = parts[parts.length - 1];
  const newFilename = Date.now() + '-' + ext;
 await client.send(new PutObjectCommand({
    Bucket: bucket,
    Body: fs.readFileSync(path),
    Key: newFilename,
    ContentType: mimetype,
    ACL: 'public-read',
  }));
  return `https://${bucket}.s3.amazonaws.com/${newFilename}`;
}




app.get("/test", (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
    res.json("test ok");
});


app.post("/register", async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
    const {name,email,password} = req.body;

    try { 
    const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
    });


    res.json(userDoc);
} catch (e) {
    res.status(422).json(e);
}


});

app.post("/login", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({ email: userDoc.email, id: userDoc._id, name: userDoc.name }, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        
        res.set('Authorization', `Bearer ${token}`)
          .cookie("token", token, {domain: ".lsauto.com" , sameSite: 'none', secure: true, httpOnly: true })
          .json(userDoc);
      });
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.status(404).json("not found");
  }
});


  
app.get("/profile", (req, res) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, decoded) => {
      if (err) {
        res.clearCookie("token").json(null);
      } else {
        // Token is valid, user is logged in
        const userDoc = await User.findById(decoded.id);
        res.json(userDoc);
      }
    });
  } else {
    res.json(null);
  }
});



app.post("/logout", (req,res) => {
  
  res.cookie("token", "").json(true);
});


const photosMiddleware = multer({dest:'/tmp',  limits: { fileSize: 80000000 }});
app.options("/upload", (req, res) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "POST");
 res.header("Access-Control-Allow-Headers", "Content-Type");
 res.send();
});
 
app.post("/upload", photosMiddleware.single('photo'), async (req, res) => {
  const { path, originalname, mimetype } = req.file;
  const url = await uploadToS3(path, originalname, mimetype);
  res.json(url);
});


   

app.post('/places/:placeId/clicks', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app
    const placeId = req.params.placeId;

    // Update the click count in the database
    const updatedPlace = await Place.findByIdAndUpdate(
      placeId,
      { $inc: { clicks: 1 } }, // Increment the click count by 1
      { new: true } // To return the updated document
    );

    if (!updatedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }

    // Save the updated place to the database
    await updatedPlace.save();

    res.sendStatus(200); // Success
  } catch (error) {
    console.error('Error updating click count:', error);
    res.sendStatus(500); // Internal Server Error
  }
});




app.post("/places", (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const {token} = req.cookies;
  const {title, marca, model, km, anul, addedPhotos, description, perks,
    culoare,
    nume,
    locatie,
    dealer,
    mail,
    telefon,
    cilindre,
    tractiune,
    transmisie,
    seriesasiu,
    caroserie,
    putere,
    normaeuro,
    combustibil} = req.body;
  jwt.verify(token, jwtSecret, {}, (err, userData) => {
    if (err) throw err;
    const placeDoc = Place.create({
      owner: userData.id,
      title,
      marca,
      anul,
      model,
      km,
      nume,
    mail,
    telefon,
      photos:addedPhotos,
      description,
      perks,
      culoare,
      cilindre,
      tractiune,
      transmisie,
      seriesasiu,
      caroserie,
      putere,
      locatie,
    dealer,
      normaeuro,
      combustibil

    });
    res.json(placeDoc);

     
  });
});





app.get("/user-places", (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const {token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err,userData) => {
    const {id} = userData;
    res.json(await Place.find({owner:id}));
  });
});


app.get("/places/:id", async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const {id} = req.params;
  res.json( await Place.findById(id));
});


app.put("/places" , async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const {token} = req.cookies;
  const {
    id, title, marca, model, km, anul, addedPhotos, description, perks,culoare,
    cilindre,
    tractiune,
    transmisie,
    seriesasiu,
    caroserie,
    putere,
    normaeuro,
    combustibil,
    nume,
    mail,
    telefon,
    locatie,
    dealer,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.findById(id);
    if (userData.id === placeDoc.owner.toString()) {
      placeDoc.set({
        
        title,
        marca,
        anul,
        model,
        km,
        photos:addedPhotos,
        description,
        perks,
        culoare,
        cilindre,
        tractiune,
        transmisie,
        nume,
    mail,
    telefon,
        seriesasiu,
        caroserie,
        putere,
        normaeuro,
        combustibil,
        locatie,
    dealer,
        clicks: placeDoc.clicks + 1,
      });
      await placeDoc.save();
      res.json("ok");
    }
  });
});


app.get("/places", async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  res.json( await Place.find() );
});







// Endpoint for resetting password
app.post('/reset-password', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const { email, newPassword } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update user's password
  await User.updateOne({ email }, { password: hashedPassword });

  res.status(200).json({ message: 'Password reset successful' });
});





app.delete("/places/:id", (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const {id} = req.params;
  Place.findByIdAndDelete(id, (err, deletedPlace) => {
    if (err) {
      console.log(err);
      res.status(500).send("Failed to delete place.");
    } else {
      console.log(deletedPlace);
      res.json(deletedPlace);
    }
  });
});



app.listen(4000);
