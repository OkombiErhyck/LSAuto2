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

app.use(express.json());
app.use(CookieParser());
app.use("/uploads", express.static(__dirname+"/uploads"));
app.use(cors({
    credentials: true,
    origin: "https://ls-auto2-nd3l.vercel.app", 
}));


async function uploadToS3(buffer, originalFilename, mimetype) {
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
    Body: buffer,
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
        jwt.sign({email:userDoc.email, id:userDoc._id, name:userDoc.name}, jwtSecret, {}, (err, token) => {
             if (err) throw err;
        
        res.cookie("token", token, { sameSite: 'none', secure: true }).json(userDoc);

    });

      } else {
        res.status(422).json("pass not ok");
      }
    } else {
      res.status(404).json("not found");
    }
  });

  
  app.get("/profile", (req,res) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
    mongoose.connect(process.env.MONGO_URL);
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, user) => {
               if (err) throw err;
               
               res.json(user);
         });
    } else {
        res.json(null);
    }
  });


app.post("/logout", (req,res) => {
  
  res.cookie("token", "").json(true);
});


const photosMiddleware = multer({ storage: multer.memoryStorage(), limits: { fileSize: 80000000 } });

app.options("/upload", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.send();
});

app.post("/upload", photosMiddleware.array('photos', 100), async (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { buffer, originalname, mimetype } = req.files[i];
    if (buffer.length > 1000000) {
      const url = await uploadToS3(buffer, originalname, mimetype);
      uploadedFiles.push(url);
    } else {
      const filename = Date.now() + '-' + originalname;
      const path = __dirname + '/uploads/' + filename;
      fs.writeFileSync(path, buffer);
      uploadedFiles.push('/uploads/' + filename);
    }
  }
  res.json(uploadedFiles);
});




app.post("/places", (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "https://ls-auto2-nd3l.vercel.app");
  const {token} = req.cookies;
  const {title, marca, model, km, anul, addedPhotos, description, perks,
    culoare,
    nume,
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
        combustibil
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