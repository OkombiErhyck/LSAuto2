import React, { useEffect } from "react";
import { useState } from "react";
import "./write.css";
import axios from "axios";
import Perks from "../Perks"
import PhotosUpLoader from "../PhotosUpLoader";
import { Navigate, useParams } from "react-router-dom";


export default function Write() {
  const cars = [
    {
      brand: "Acura",
      models: ["Legend", "Integra", "NSX", "Vigor", "CL", "RL", "MDX", "RSX", "TL", "TSX", "ZDX", "ILX", "RDX", "RLX"]
    } ,
    {
      brand: "Abarth",
      models: ["500", "595", "695", "124 Spider"]
      },
      {
        brand: "Alfa Romeo",
        models: [
        "24 HP",
        "12 HP",
        "15 HP",
        "40-60 HP",
        "20-30 HP",
        "RM",
        "6C",
        "8C",
        "Alfasud",
        "Alfetta",
        "33",
        "75",
        "90",
        "164",
        "Spider",
        "GT",
        "GTV",
        "Giulia",
        "Giulietta",
        "Montreal",
        "SZ",
        "RZ",
        "155",
        "156",
        "147",
        "166",
        "Brera",
        "Spider (939)",
        "8C Competizione",
        "MiTo",
        "Giulietta (940)",
        "4C",
        "Stelvio",
        "Giulia (952)"
        ]
        },
        {
          brand: "Aston Martin",
          models: [
            "Aston Martin DB1",
            "Aston Martin DB2",
            "Aston Martin DB3",
            "Aston Martin DB4",
            "Aston Martin DB5",
            "Aston Martin DB6",
            "Aston Martin DB7",
            "Aston Martin DB9",
            "Aston Martin DBS",
            "Aston Martin DBX",
            "Aston Martin One-77",
            "Aston Martin Rapide",
            "Aston Martin Vanquish",
            "Aston Martin Vantage",
            "Aston Martin Virage",
            "Aston Martin Valhalla"
          ]
        },
    {
      brand: "Audi",
      models: [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "Q2",
      "Q3",
      "Q5",
      "Q7",
      "Q8",
      "TT",
      "R8",
      "RS3",
      "RS4",
      "RS5",
      "RS6",
      "RS7",
      "S1",
      "S2",
      "S3",
      "S4",
      "S5",
      "S6",
      "S7",
      "S8",
      "SQ2",
      "SQ5",
      "SQ7",
      "SQ8",
      "E-Tron",
      "E-Tron GT"
      ]
      },
      {
        brand: "Bentley",
        models: [
        "3 Litre",
        "4½ Litre",
        "4 Litre",
        "8 Litre",
        "Mark V",
        "R Type",
        "S1",
        "S2",
        "S3",
        "Continental S1",
        "Continental S2",
        "Continental S3",
        "T1",
        "T2",
        "Corniche",
        "Mulsanne",
        "Turbo R",
        "Continental R",
        "Azure",
        "Brooklands",
        "Arnage",
        "Continental GT",
        "Flying Spur",
        "Bentayga",
        "Continental Supersports"
        ]
        },
    {
      brand: 'BMW',
      models: ["Seria 1",

      "118",
      "120",
      "125",
      "M135",
      "Seria 2",
      
      "218",
      "220",
      "225",
      "M235",
      "Seria 3",
      ,
      "318",
      "320",
      "325",
      "330",
      "335",
      "M340",
      "Seria 4",
      
      "420",
      "430",
      "440",
      "M4",
      "Seria 5",
      
      "520",
      "525",
      "530",
      "535",
      "540",
      "M550",
      "Seria 6",
      
      "640",
      "650",
      "M6",
      "Seria 7",
      
      "730",
      "740",
      "750",
      "M760",
      "Seria 8",
      
      "840",
      "850",
      "M8",
      "X1",
      
      "X2",
      
      
      "X3",
      
      
      "X4",
      
      
      "X5",
      
      
      "X6",
      
      
      "X7",
      
      
      "Z4",
      
      
      
      
      "M2",
      
      
      "M3",
      
      
      "M4",
      "M5",
      
      "M6",
      "M8",
      
      ]
    },
    {
      brand: "Bugatti",
      models: [
      "Type 2",
      "Type 5",
      "Type 7",
      "Type 13",
      "Type 15",
      "Type 17",
      "Type 18",
      "Type 22",
      "Type 23",
      "Type 29",
      "Type 30",
      "Type 35",
      "Type 37",
      "Type 40",
      "Type 41 Royale",
      "Type 43",
      "Type 44",
      "Type 46",
      "Type 49",
      "Type 50",
      "Type 51",
      "Type 53",
      "Type 54",
      "Type 55",
      "Type 57",
      "Type 59",
      "Type 101",
      "Type 252",
      "EB110",
      "Veyron",
      "Chiron",
      "Divo",
      "Centodieci"
      ]
      },
      {
        brand: "Buick",
        models: ["Model B", "Model C", "Model D", "Model F", "Model G", "Model K", "Model S", "Model T", "Model 10", "Model 14", "Model 16", "Model 17", "Model 21", "Model 23", "Model 24", "Model 25", "Model 26", "Model 27", "Model 28", "Model 29", "Model 30", "Model 31", "Model 32", "Model 33", "Model 34", "Model 35", "Model 36", "Model 40", "Model 41", "Model 43", "Model 44", "Model 45", "Model 46", "Model 48", "Model 49", "Model 50", "Model 51", "Model 53", "Model 54", "Model 55", "Model 56", "Model 57", "Model 58", "Model 59", "Model 60", "Model 61", "Model 63", "Model 67", "Model 70", "Model 71", "Model 72", "Model 73", "Model 74", "Model 75", "Model 76", "Model 77", "Model 79", "Model 80", "Model 81", "Model 87", "Model 90", "Model 91", "Model 94", "Model 96", "Model 97", "Model 129", "Model 131", "Model 133", "Model 134", "Model 141", "Model 143", "Model 144", "Model 145", "Model 146", "Model 153", "Model 154", "Model 163", "Model 164", "Model 165", "Model 170", "Model 171", "Model 173", "Model 175", "Model 190", "Model 191", "Model 193", "Model 195", "Model 196", "Model 200", "Model 201", "Model 202", "Model 210", "Model 220", "Model 221", "Model 222", "Model 223", "Model 225", "Model 226", "Model 227", "Model 228", "Model 229", "Model 230", "Model 231", "Model 232", "Model 233", "Model 234", "Model 235", "Model 236", "Model 239", "Model 240", "Model 241", "Model 242", "Model 243", "Model 244", "Model 245", "Model 248", "Model 249", "Model 250", "Model 251", "Model 252", "Model 253", "Model 254", "Model 255", "Model 256", "Model 257", "Model 258", "Model 259", "Model 263", "Model 264", "Model 265", "Model 266", "Model 267", "Model 268", "Model 269", "Model 270", "Model 272", "Model 273", "Model 274", "Model 275", "Model 280", "Model 281", "Model 282", "Model 283", "Model 284", "Model 285", "Model 286", "Model 287", "Model 288", "Model 289", "Model 290"]
      },
      {
        brand: "Cadillac",
        models: [
        "Model A",
        "Model B",
        "Model C",
        "Model D",
        "Model Thirty",
        "V-8",
        "Series 60",
        "Series 61",
        "Series 62",
        "Series 63",
        "Series 65",
        "Series 70",
        "Series 72",
        "Series 75",
        "Fleetwood",
        "Calais",
        "DeVille",
        "Eldorado",
        "Seville",
        "Catera",
        "Escalade",
        "XLR",
        "STS",
        "CTS",
        "SRX",
        "ATS",
        "CT6",
        "XT4",
        "XT5",
        "XT6",
        "Escalade ESV",
        "Escalade EXT",
        "BLS",
        "SLS",
        "Allanté",
        "Cimarron",
        "Concours",
        "DTS",
        "Fleetwood Brougham",
        "STS-V",
        "XLR-V",
        "Eldorado Biarritz",
        "Eldorado Brougham",
        "Eldorado Touring Coupe",
        "Eldorado Seville",
        "Fleetwood Seventy-Five",
        "Fleetwood Sixty-Special",
        "Fleetwood Limousine",
        "Seville Elegante",
        "Seville STS",
        "STS Platinum",
        "XLR Platinum"
        ]
        },
        {
          brand: "Chevrolet",
          models: ["150", "210", "400", "Aero", "Astro", "Avalanche", "Aveo", "Bel Air", "Beretta", "Biscayne", "Blazer", "Brookwood", "C-10", "C/K", "Camaro", "Caprice", "Captiva", "Cavalier", "Celebrity", "Chevelle", "Chevette", "Citation", "City Express", "Classic", "Cobalt", "Colorado", "Corsica", "Corvair", "Corvette", "Cruze", "El Camino", "Epica", "Equinox", "Express", "G-Series", "HHR", "Impala", "K5 Blazer", "Kalos", "Kingswood", "Lacetti", "Laguna", "Lumina", "Malibu", "Matiz", "Metro", "Monte Carlo", "Monza", "Nova", "Optra", "Orlando", "Prizm", "R/V", "S-10", "Silverado", "Sonic", "Spark", "SS", "SSR", "Suburban", "Tahoe", "Tracker", "TrailBlazer", "Traverse", "Trax", "Uplander", "Vega", "Venture", "Volt"]
        },
        {
          brand: "Chrysler",
          models: ["Airflow", "Imperial", "New Yorker", "Town & Country", "300", "Pacifica", "Crossfire", "Aspen", "Sebring", "Concorde", "PT Cruiser", "Voyager", "Grand Voyager", "LHS", "Cirrus", "LeBaron", "Fifth Avenue", "TC by Maserati", "Daytona", "Intrepid", "Avenger", "Neon", "Saratoga", "Vision", "Prowler", "Viper"]
          },
    {
      brand: "Citroën",
   models: ["Type A", "Type B", "Type C", "Type 5CV", "Type C2", "Type C3", "2CV", "Type H", "DS", "Ami 6", "Méhari", "GS", "CX", "Visa", "BX", "AX", "XM", "ZX", "Xantia", "C15", "Evasion", "Saxo", "Berlingo", "Xsara", "C3", "C8", "C5", "C2", "C4", "C1", "C6", "C-Crosser", "Nemo", "DS3", "DS4", "DS5", "C4 Cactus", "C3 Picasso", "C4 Picasso", "Spacetourer", "C3 Aircross", "C5 Aircross", "DS 3", "DS 4", "DS 5", "DS 7 Crossback", "DS 9"]
    },
    {
      brand: "Dacia",
      models: [  "Duster",  "Spring", "Jogger","Logan", "Sandero", "Lodgy", "Dokker", "Nova", "Solenza", "Supernova", "Solenza", "1304  ", "1305  ", "1307 ", "1309  ", "1306  ", "1308  ", "1300  ", "1310  ", "1304  ", "1305  ",    "1309  ", "1306  ", "1308  ",  , "1307  ", "1309  "  ]
      },
      {
        brand: "Daewoo",
        models: ["Lanos", "Leganza", "Nubira", "Matiz", "Espero", "Musso", "Tacuma", "Kalos", "Magnus", "Rezzo", "Gentra", "Winstorm", "Alpheon"]
      },
      {
        brand: "Daihatsu",
        models: ["Altis", "Applause", "Atrai", "Be-go", "Boon", "Charade", "Copen", "Cuore", "Delta", "Esse", "Fellow Max", "Feroza", "Gran Max", "Hijet", "Leeza", "Materia", "Max", "Midget", "Mira", "Move", "Naked", "Rocky", "Rugger", "Sirion", "Sonica", "Storia", "Taft", "Tanto", "Terios", "Thor", "Wake"]
        },
    {
      
        brand: "Dodge",
        models: [
        "Challenger",
        "Charger",
        "Dart",
        "Durango",
        "Grand Caravan",
        "Journey",
        "Magnum",
        "Neon",
        "Ram",
        "Viper"
        ]
  
    },
    {
      brand: "Ferrari",
      models: [
      "125 S",
      "166 Inter",
      "212 Export",
      "250 Europa",
      "340 America",
      "375 America",
      "410 Superamerica",
      "500 Superfast",
      "275 GTB/4",
      "365 GTB/4 Daytona",
      "308 GTB/GTS",
      "512 BB",
      "288 GTO",
      "Testarossa",
      "F40",
      "F50",
      "Enzo",
      "599 GTB Fiorano",
      "458 Italia",
      "California",
      "LaFerrari",
      "812 Superfast",
      "Portofino",
      "SF90 Stradale"
      ]
      },
      {
        brand: "Fiat",
        models: ["3 ½ CV", "4 HP", "8 HP", "10 HP", "12 HP", "16-20 HP", "24-32 HP", "Zero", "501", "502", "503", "505", "507", "508 Balilla", "509", "510", "512", "514", "515", "518", "519S", "520", "521", "522", "524", "525", "527", "1100", "1400", "1500", "1800", "2100", "2300", "500", "600", "850", "1100/1200", "1300/1500", "124", "125", "126", "127", "128", "130", "131", "132", "133", "147/Spazio", "238", "242", "500L", "500X", "Argenta", "Barchetta", "Brava", "Bravo", "Campagnola", "Cinquecento", "Croma", "Dino", "Doblo", "Ducato", "Fiorino", "Freemont", "Fullback", "Grande Punto", "Idea", "Linea", "Marea", "Multipla", "Nuova 500", "Palio", "Panda", "Punto", "Qubo", "Regata", "Ritmo/Strada", "Scudo", "Seicento", "Siena", "Stilo", "Tempra", "Tipo", "Ulysse", "Uno", "Viaggio", "X1/9"]
      },
      {
        brand: "Ford",
        models: [
        "Model A",
        "Model T",
        "Model B",
        "Model C",
        "Model K",
        "Model N",
        "Model R",
        "Model S",
        "Model 48",
        "Model 50",
        "Model 68",
        "Model 81A",
        "Model 91A",
        "Model 18",
        "Model 40",
        "Model 74",
        "Model 78",
        "Model 01A",
        "Model 11A",
        "Deluxe",
        "Custom",
        "Crestline",
        "Mainline",
        "Mondeo",
        "Fairlane",
        "Galaxie",
        "Ranchero",
        "Thunderbird",
        "F-Series",
        "Bronco",
        "Mustang",
        "Maverick",
        "Pinto",
        "Tempo",
        "Taurus",
        "Explorer",
        "Expedition",
        "Escape",
        "Focus",
        "Fiesta",
        "Edge",
        "Flex",
        "Fusion",
        "Kuga",
        "Transit",
        "Ranger",
        "GT"
        ]
        },
        {
          brand: "GMC",
          models: [
          "Acadia",
          "Caballero",
          "Canyon",
          "Envoy",
          "Jimmy",
          "Rally",
          "Safari",
          "Savana",
          "Sierra",
          "Sonoma",
          "Suburban",
          "Terrain",
          "Typhoon",
          "Yukon"
          ]
          },
          {
            brand: "Honda",
            models: ["Accord", "Acty", "Airwave", "Ascot", "Avancier", "Ballade", "Beat", "BR-V", "Capa", "City", "Civic", "Civic Type R", "Clarity", "Concerto", "CR-V", "CR-X", "CR-Z", "Crosstour", "CRV", "CRX", "Domani", "Element", "Elysion", "Fit", "Freed", "HR-V", "Insight", "Inspire", "Integra", "Jade", "Jazz", "Legend", "Life", "Logo", "Mobilio", "N360", "N-One", "NSX", "Odyssey", "Orthia", "Partner", "Passport", "Pilot", "Prelude", "Rafaga", "Ridgeline", "S2000", "S660", "Saber", "Shuttle", "SMX", "Stepwgn", "Stream", "T360", "That's", "Today", "Torneo", "Vamos", "Vezel", "Vigor", "Zest"]
            },
            {
              brand: "Hyundai",
              models: [
              "Accent",
              "Atos",
              "Azera",
              "Centennial",
              "Elantra",
              "Entourage",
              "Equus",
              "Excel",
              "Genesis",
              "Getz",
              "Grandeur",
              "H1",
              "H100",
              "i10",
              "i20",
              "i30",
              "i40",
              "ix20",
              "ix35",
              "ix55",
              "Kona",
              "Lavita",
              "Matrix",
              "Palisade",
              "Pony",
              "Santa Fe",
              "Santro",
              "Sonata",
              "Stellar",
              "Terracan",
              "Tiburon",
              "Trajet",
              "Tucson",
              "Veloster",
              "Venue",
              "Veracruz",
              "Verna",
              "Xcent"
              ]
              },
              {
                brand: "Infiniti",
                models: ["Q50", "Q60", "Q70", "QX30", "QX50", "QX60", "QX70", "QX80", "G20", "G35", "G37", "I30", "I35", "J30", "M30", "M35", "M45"]
              },
              {
                brand: "Isuzu",
                models: ["117 Coupe", "Amigo", "Ascender", "Aska", "Axiom", "Bellett", "Bighorn", "D-Max", "Gemini", "Hombre", "Impulse", "Midi", "MU", "N-Series", "Oasis", "Piazza", "Rodeo", "Trooper", "VehiCROSS", "Wizard"]
                },
                {
                  brand: "Iveco",
                  models: ["Daily", "Eurocargo", "Stralis", "Trakker", "TurboStar", "TurboTech"]
                  },
                  {
                    brand: "Jaguar",
                    models: [
                    "SS Jaguar 100",
                    "Jaguar Mark 1",
                    "Jaguar Mark 2",
                    "Jaguar E-Type",
                    "Jaguar XJ",
                    "Jaguar XJS",
                    "Jaguar XJ220",
                    "Jaguar XK8/XKR",
                    "Jaguar S-Type",
                    "Jaguar X-Type",
                    "Jaguar XK",
                    "Jaguar XF",
                    "Jaguar XJ (X351)",
                    "Jaguar F-Type",
                    "Jaguar XE",
                    "Jaguar I-PACE",
                    "Jaguar F-PACE"
                    ]
                    },
                    {
                      brand: "Jeep",
                      models: [
                      "Willys MB",
                      "CJ-2A",
                      "CJ-3A",
                      "CJ-3B",
                      "CJ-5",
                      "CJ-6",
                      "CJ-7",
                      "CJ-8",
                      "Jeepster",
                      "Commando",
                      "Wagoneer",
                      "Cherokee",
                      "J-Series",
                      "Scrambler",
                      "Comanche",
                      "Grand Wagoneer",
                      "Wrangler YJ",
                      "Cherokee XJ",
                      "Wrangler TJ",
                      "Grand Cherokee ZJ",
                      "Wrangler LJ",
                      "Liberty",
                      "Grand Cherokee WJ",
                      "Wrangler JK",
                      "Compass",
                      "Patriot",
                      "Grand Cherokee WK",
                      "Commander",
                      "Wrangler JL",
                      "Gladiator"
                      ]
                      },
     
                      {
                        brand: "Kia",
                        models: ["Brisa", "Capital", "Concord", "Forte", "K5", "K7", "K9", "K900", "Magentis", "Mohave", "Opirus", "Optima", "Picanto", "Potentia", "Pregio", "Pride", "Quoris", "Ray", "Rio", "Rocsta", "Rondo", "Sedona", "Seltos", "Shuma", "Sorento", "Soul", "Spectra", "Sportage", "Stinger", "Stonic", "Telluride"]
                        },
                        {
                          brand: "Lamborghini",
                          models: [
                            "350 GT",
                            "400 GT",
                            "Miura",
                            "Espada",
                            "Islero",
                            "Jarama",
                            "Urraco",
                            "Countach",
                            "Silhouette",
                            "Jalpa",
                            "LM002",
                            "Diablo",
                            "Murciélago",
                            "Gallardo",
                            "Reventón",
                            "Urus",
                            "Aventador",
                            "Sesto Elemento",
                            "Veneno",
                            "Huracán",
                            "Centenario",
                            "Terzo Millennio",
                            "Sián FKP 37",
                            "Essenza SCV12",
                            "SC20",
                            "Countach LPI 800-4"
                          ]
                        },
                        {
                          brand: "Lancia",
                          models: [
                          "Alpha 12HP",
                          "Beta",
                          "Dedra",
                          "Delta",
                          "Flaminia",
                          "Flavia",
                          "Fulvia",
                          "Gamma",
                          "Kappa",
                          "Lambda",
                          "Lybra",
                          "Montecarlo",
                          "Musia",
                          "Phedra",
                          "Prisma",
                          "Stratos",
                          "Thema",
                          "Theta",
                          "Voyager",
                          "Y10",
                          "Ypsilon",
                          "Zeta"
                          ]
                          },
                          {
                            brand: "Land Rover",
                            models: [
                              "Defender",
                              "Discovery",
                              "Discovery Sport",
                              "Range Rover",
                              "Range Rover Sport",
                              "Range Rover Evoque",
                              "Range Rover Velar",
                              "Freelander",
                              "Series I",
                              "Series II",
                              "Series III",
                              "Range Rover Classic"
                            ]
                          },                               
                          {
                            brand: "Lexus",
                            models: [
                            "LS",
                            "GS",
                            "ES",
                            "IS",
                            "RC",
                            "LC",
                            "LFA",
                            "GX",
                            "LX",
                            "UX",
                            "NX",
                            "RX",
                            "CT",
                            "HS",
                            "SC"
                            ]
                            },
                            {
                              brand: "Lincoln",
                              models: [
                                "Continental",
                                "Mark Series",
                                "Town Car",
                                "Navigator",
                                "Aviator",
                                "Blackwood",
                                "LS",
                                "MKC",
                                "MKS",
                                "MKT",
                                "MKX",
                                "MKZ",
                                "Nautilus",
                                "Zephyr"
                              ]
                            },
                            {
                              brand: "Lotus",
                              models: [
                              "Seven",
                              "Elite",
                              "Elan",
                              "Europa",
                              "Esprit",
                              "Eclat",
                              "Excel",
                              "Elise",
                              "Exige",
                              "340R",
                              "2-Eleven",
                              "3-Eleven",
                              "Evora",
                              "Evija"
                              ]
                              },
                              {
                                brand: "Maserati",
                                models: ["Tipo 26", "Tipo V4", "8C 2500", "A6", "3500 GT", "5000 GT", "Sebring", "Mistral", "Ghibli", "Indy", "Bora", "Khamsin", "Merak", "Biturbo", "Quattroporte", "Spyder", "GranTurismo", "GranCabrio", "Levante", "MC20"]
                                },
                                {
                                  brand: "Mazda",
                                  models: [
                                  "R360",
                                  "Carol",
                                  "Familia",
                                  "Capella",
                                  "RX-2",
                                  "RX-3",
                                  "RX-4",
                                  "Luce",
                                  "Cosmo",
                                  "Savanna",
                                  "626",
                                  "RX-7",
                                  "929",
                                  "MX-6",
                                  "MPV",
                                  "MX-3",
                                  "MX-5 Miata",
                                  "Millenia",
                                  "B-Series",
                                  "Tribute",
                                  "626",
                                  "MPV",
                                  "Protege",
                                  "Protege5",
                                  "Premacy",
                                  "RX-8",
                                  "CX-7",
                                  "CX-9",
                                  "Mazda2",
                                  "Mazda3",
                                  "Mazda5",
                                  "Mazda6",
                                  "MX-5",
                                  "CX-3",
                                  "CX-5",
                                  "CX-30",
                                  "MX-30",
                                  "BT-50"
                                  ]
                                  },
                                  {
                                    brand: "Mercedes-Benz",
                                    models: [
                                      "A",
                                      "A160",
"A180",
"A200",
"A220",
"A250",
"A35 AMG",
"A45 AMG",
"B",
"B150",
"B160",
"B170",
"B180",
"B200",
"B220",
"B250",
"C",
"C180",
"C200",
"C220",
"C230",
"C240",
"C250",
"C280",
"C300",
"C320",
"C350",
"C400",
"C43 AMG",
"C450 AMG",
"C63 AMG",
"CLA",
"CLA180",
"CLA200",
"CLA220",
"CLA250",
"CLA35 AMG",
"CLA45 AMG",
"CLS",
"CLS320",
"CLS350",
"CLS400",
"CLS450",
"CLS500",
"CLS550",
"CLS55 AMG",
"CLS63 AMG",
"E",
"E200",
"E220",
"E230",
"E240",
"E250",
"E270",
"E280",
"E300",
"E320",
"E350",
"E400",
"E430",
"E450",
"E500",
"E550",
"E55 AMG",
"E63 AMG",
"G",
"G280",
"G300",
"G320",
"G350",
"G400",
"G500",
"G550",
"G55 AMG",
"G63 AMG",
"G65 AMG",
"GLA",
"GLA180",
"GLA200",
"GLA220",
"GLA250",
"GLA35 AMG",
"GLA45 AMG",
"GLB",
"GLB200",
"GLB220",
"GLB250",
"GLB35 AMG",
"GLC",
"GLC200",
"GLC220",
"GLC250",
"GLC300",
"GLC350",
"GLC400",
"GLC43 AMG",
"GLC450 AMG",
"GLC63 AMG",
"GLE",
"GLE250",
"GLE350",
"GLE400",
"GLE450",
"GLE500",
"GLE550",
"GLE53 AMG",
"GLE63 AMG",
"GLS",
"GLS350",
"GLS400",
"GLS450",
"GLS500",
"GLS550",
"GLS580",
"GLS63 AMG",
"S",
"S250",
"S280",
"S300",
"S320",
"S350",
"S400",
"S420",
"S430",
"S450",
"S500",
"S550",
"S560",
"S600",
"S63 AMG",
"S65 AMG",
"SL",
"SL280",
"SL300",
"SL320",
"SL350",
"SL400",
"SL450",
"SL500",
"SL550",
"SL600",
"SL63 AMG",
"SL65 AMG",
"SLC",
"SLC180",
"SLC200",
"SLC250",
"SLC300",
"SLC43 AMG",
"SLK",
"SLK200",
"SLK230",
"SLK250",
"SLK280",
"SLK300",
"SLK320",
"SLK350",
"SLK55 AMG",
"AMG GT",
"AMG GT S",
"AMG GT C",
"AMG GT R",
"Maybach",
"Maybach S560",
"Maybach S650",
"EQE",
"EQS",
"EQC",
"X",
"X220",
"X250",
"X350"
                                    
                                    ]
                                    },
                                    {
                                      brand: "MG",
                                      models: ["MG 3", "MG 5", "MG 6", "MG GS", "MG HS", "MG ZS", "MG ZT", "MG TF", "MG RV8", "MG F", "MG TF LE500", "MG XPower SV"]
                                      },
                                      {
                                        brand: "Mini Cooper",
                                        models: [
                                        "Mini Cooper",
                                        "Mini Cooper S",
                                        "Mini Cooper SE",
                                        "Mini Cooper Convertible",
                                        "Mini Cooper S Convertible",
                                        "Mini Cooper SE Convertible",
                                        "Mini Cooper Clubman",
                                        "Mini Cooper S Clubman",
                                        "Mini Cooper SE Clubman",
                                        "Mini Cooper Countryman",
                                        "Mini Cooper S Countryman",
                                        "Mini Cooper SE Countryman",
                                        "Mini Cooper Paceman",
                                        "Mini Cooper S Paceman"
                                        ]
                                        }
                                        ,
                                        {
                                          brand: "Mitsubishi",
                                          models: ["3000GT", "ASX", "Carisma", "Challenger", "Colt", "Diamante", "Eclipse", "Galant", "Grandis", "L200", "Lancer", "Mirage", "Outlander", "Pajero", "Space Star"]
                                          },
    
    {
      brand: "Nissan",
      models: [
      "350Z",
      "370Z",
      "Almera",
      "Altima",
      "Armada",
      "Bluebird",
      "Cedric",
      "Cefiro",
      "Cube",
      "Datsun",
      "Fairlady",
      "Frontier",
      "GT-R",
      "Juke",
      "Kicks",
      "Leaf",
      "Maxima",
      "Micra",
      "Murano",
      "Navara",
      "Note",
      "NP300",
      "NV",
      "Pathfinder",
      "Patrol",
      "Pixo",
      "Pulsar",
      "Qashqai",
      "Rogue",
      "Sentra",
      "Silvia",
      "Skyline",
      "Sylphy",
      "Teana",
      "Terrano",
      "Titan",
      "Versa",
      "X-Trail",
      "Xterra",
      "Z",
      ]
      },
      {
        brand: "Opel",
        models: ["4 PS", "5 PS", "8 PS", "10 PS", "12 PS", "14 PS", "16 PS", "18 PS", "20/22 PS", "25 PS", "30/32 PS", "35 PS", "40/45 PS", "50 PS", "60 PS", "70 PS", "80 PS", "90 PS", "1.2 Liter", "1.3 Liter", "1.8 Liter", "1.9 Liter", "2 Liter", "2.2 Liter", "2.4 Liter", "2.5 Liter", "2.6 Liter", "2.8 Liter", "3 Liter", "3.2 Liter", "4/12 PS", "Admiral", "Agila", "Ampera", "Antara", "Arena", "Ascona", "Astra", "Calibra", "Campo", "Cascada", "Combo", "Commodore", "Corsa", "Crossland X", "Diplomat", "Frontera", "GT", "Insignia", "Kadett", "Kapitän", "Karl", "Manta", "Meriva", "Mokka", "Monterey", "Monza", "Movano", "Omega", "Olympia", "Rekord", "Senator", "Signum", "Sintra", "Speedster", "Tigra", "Vectra", "Vivaro", "Zafira"]
      },
      {
        brand: "Peugeot",
        models: [
        "104",
        "106",
        "107",
        "108",
        "202",
        "203",
        "204",
        "205",
        "206",
        "207",
        "208",
        "3008",
        "301",
        "304",
        "305",
        "306",
        "307",
        "308",
        "309",
        "4007",
        "4008",
        "402",
        "403",
        "404",
        "405",
        "406",
        "407",
        "408",
        "5008",
        "504",
        "505",
        "508",
        "604",
        "605",
        "607",
        "806",
        "807",
        "RCZ"
        ]
        },
        {
          brand: "Porsche",
          models: ["356", "911", "912", "914", "924", "928", "944", "968", "Boxster", "Carrera GT", "Cayenne", "Cayman", "Macan", "Panamera", "Taycan"]
          },
          {
            brand: "Renault",
            models: ["4CV", "Dauphine", "Floride", "Caravelle", "R8", "R10", "R16", "R17", "R5", "R18", "Fuego", "R9", "R11", "R21", "R19", "Clio", "Megane", "Twingo", "Safrane", "Laguna", "Espace", "Kangoo", "Scenic", "Modus", "Vel Satis", "Avantime", "Captur", "Zoe", "Kadjar", "Talisman", "Koleos", "Arkana", "Duster", "Megane E-Tech Electric", "Mégane E-Tech Hybrid", "Arkana E-Tech Hybrid"]
          },
          {
            brand: "Rolls Royce",
            models: ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan"]
          },
          {
            brand: "Rover",
            models: ["P3", "P4", "P5", "P6", "SD1", "200", "400", "600", "800", "25", "45", "75"]
            },
            {
              brand: "Saab",
              models: [
              "92",
              "93",
              "94 Sonett",
              "95",
              "96",
              "97 Sonett",
              "99",
              "900",
              "9000",
              "9-2X",
              "9-3",
              "9-4X",
              "9-5",
              "9-7X"
              ]
              },
              {
                brand: "Seat",
                models: ["Mii", "Ibiza", "Leon", "Arona", "Ateca", "Tarraco", "Alhambra", "Toledo", "Exeo", "Cordoba", "Marbella", "Malaga", "Ronda", "Fura", "Terra", "Inca", "Altea", "Altea XL", "Altea Freetrack", "Ibiza ST", "Leon ST", "Leon X-Perience", "Mii Electric", "Leon Cupra", "Ibiza Cupra", "Toledo II", "Leon Cupra R", "Ibiza FR", "Leon FR", "Alhambra 4Motion", "Leon Cross Sport", "Leon Cristobal"]
                },
                {
                  brand: "Skoda",
                  models: ["100", "105", "110", "120", "125", "130", "135", "136", "440", "445", "450", "1000 MB", "110 R", "130 RS", "Estelle", "Favorit", "Felicia", "Forman", "Octavia", "Rapid", "Roomster", "Superb", "Yeti", "Citigo", "Fabia", "Kamiq", "Karoq", "Kodiaq", "Scala", "Enyaq iV"]
                },
                {
                  brand: "Smart",
                  models: ["Fortwo", "Forfour", "Roadster", "Crossblade", "City Coupe", "City Cabrio", "Cabriolet"]
                  },
                  {
                    brand: "SsangYong",
                    models: ["Musso", "Korando", "Tivoli", "Rexton", "Actyon", "Rodius", "Kyron", "Chairman", "Stavic", "Kallista", "Korando Turismo", "XLV", "Rexton G4", "Tivoli XLV", "Musso Grand"]
                    },
          
                    {
                      brand: "Subaru",
                      models: [
                      "1000",
                      "1100",
                      "1400 DL/GL",
                      "1600",
                      "1800",
                      "360",
                      "Alcyone SVX",
                      "Baja",
                      "Bighorn",
                      "BRAT",
                      "Dex",
                      "Dias Wagon",
                      "Domingo",
                      "Exiga",
                      "Forester",
                      "G3X Justy",
                      "Impreza",
                      "Impreza WRX",
                      "Impreza WRX STI",
                      "Justy",
                      "Justy IV",
                      "Legacy",
                      "Leone",
                      "Levorg",
                      "Libero",
                      "Lucra",
                      "Outback",
                      "Pleo",
                      "Pleo Plus",
                      "R1",
                      "R2",
                      "Rex",
                      "Sambar",
                      "Stella",
                      "Sumo",
                      "SVX",
                      "Traviq",
                      "Trezia",
                      "Vivio",
                      "WRX",
                      "WRX STI",
                      "XT",
                      "XV Crosstrek"
                      ]
                      },
                      {
                        brand: "Suzuki",
                        models: [
                        "Alto",
                        "Baleno",
                        "Cappuccino",
                        "Carry",
                        "Celerio",
                        "Ciaz",
                        "Ertiga",
                        "Forenza",
                        "Grand Vitara",
                        "Ignis",
                        "Jimny",
                        "Kizashi",
                        "Liana",
                        "MR Wagon",
                        "Palette",
                        "SX4",
                        "Swift",
                        "Swift Sport",
                        "Vitara",
                        "Wagon R+"
                        ]
                        },
                        {
                          brand: "Tesla",
                          models: ["Roadster", "Model S", "Model X", "Model 3", "Model Y", "Cybertruck", "Semi"]
                          },
                          {
                            brand: "Toyota",
                            models: [
                            "4Runner",
                            "86",
                            "Avalon",
                            "C-HR",
                            "Camry",
                            "Celica",
                            "Corolla",
                            "Corolla Cross",
                            "Corolla iM",
                            "Corolla Matrix",
                            "Corona",
                            "Cressida",
                            "Echo",
                            "FJ Cruiser",
                            "GR 86",
                            "Highlander",
                            "Land Cruiser",
                            "Matrix",
                            "Mirai",
                            "MR2",
                            "MR2 Spyder",
                            "Paseo",
                            "Pickup",
                            "Previa",
                            "Prius",
                            "Prius c",
                            "Prius Prime",
                            "Prius v",
                            "RAV4",
                            "Sequoia",
                            "Sienna",
                            "Solara",
                            "Starlet",
                            "Supra",
                            "Tacoma",
                            "Tercel",
                            "Tundra",
                            "Venza",
                            "Yaris",
                            "Yaris Cross",
                            "Yaris iA"
                            ]
                            },
      {
      brand: 'Volkswagen',
      models: ['Atlas', 'Beetle', 'CC', 'e-Golf', 'Eos', 'Golf', 'GTI', 'Jetta', 'Passat', 'Tiguan', 'Touareg', 'Arteon', 'Routan']
      },
      {
      brand: 'Volvo',
      models: ['S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90', 'C30', 'C70', 'S40', 'V50', 'XC70']
      }
    
  // Add more car brands and models here...
]
  const {id} = useParams();
  console.log({id});
  const [title,setTitle] = useState("");
  const [nume,setNume] = useState("");
  const [mail,setMail] = useState("");
  const [telefon,setTelefon] = useState("");
  const [culoare,setCuloare] = useState("");
  const [tractiune,setTractiune] = useState("");
  const [transmisie,setTransmisie] = useState("");
  const [caroserie,setCaroserie] = useState("");
  const [combustibil,setCombustibil] = useState("");
  const [seriesasiu,setSeriesasiu] = useState("");
  const [putere,setPutere] = useState("");
  const [normaeuro,setNormaeuro] = useState("");
  const [cilindre,setCilindre] = useState("");
  const [km,setKm] = useState("");
  const [marca,setMarca] = useState("");
  const [model,setModel] = useState("");
  const [anul,setAnul] = useState("");
   const [addedPhotos, setAddedPhotos] = useState([]);
  const [description,setDescription] = useState("");
  const [perks,setPerks] = useState ([]);
  const [redirect,setRedirect] = useState("");
  useEffect(() => {
     if (!id) {
      return;
     }
     axios.get("/places/"+id).then(response => {
      const {data} = response;
      setCuloare(data.culoare);
      setNume(data.nume);
      setMail(data.mail);
      setTelefon(data.telefon);
      setTractiune(data.tractiune);
      setTransmisie(data.transmisie);
      setCaroserie(data.caroserie);
      setCombustibil(data.combustibil);
      setSeriesasiu(data.seriesasiu);
      setPutere(data.putere);
      setNormaeuro(data.normaeuro);
      setCilindre(data.cilindre);
      setTitle(data.title);
      setMarca(data.marca);
      setModel(data.model);
      setAddedPhotos(data.photos);
      setAnul(data.anul);
      setKm(data.km);
      setDescription(data.description);
      setPerks(data.perks);
     });
  },[id]);

async function savePlace(ev) {
  ev.preventDefault();
  const placeData = {
    title ,marca ,model ,km ,anul 
    ,addedPhotos ,description ,perks,
    culoare,
    cilindre,
    nume,
    mail,
    telefon,
    tractiune,
    transmisie,
    seriesasiu,
    caroserie,
    putere,
    normaeuro,
    combustibil
  };
if (id) {
  //update
  await axios.put("/places", {
    id, ...placeData
     
  });
  setRedirect("/");
} else {
  //new place
  await axios.post("/places", placeData);
  setRedirect("/");
}
}

if (redirect) {
  return <Navigate to={redirect}/>
}

const generateModelOptions = () => {
  const selectedCar = cars.find(car => car.brand === marca);
  if (!selectedCar) {
    return <option  value="">Selecteaza model-ul</option>;
  }
  return (
    <>
      <option   value="">Selecteaza model-ul</option>
      {selectedCar.models.map(model => (
        <option key={model} value={model}>{model}</option>
      ))}
    </>
  );
};

  return (
    <React.Fragment>
    <div className="top"></div>
     
      <div className="write">
      <h2 style={{color:"var(--main)"}}>Adauga un anunt</h2>
        <form onSubmit={savePlace} className="writeForm">
        
          <div className="writeFormGroup ">
           
          <h5>Pret</h5>
          <input
              className="writeInput"
              placeholder="30000"
              type="text"
              autoFocus={true}
              value={title} onChange={ev => setTitle(ev.target.value)}
            />
             <h5>Marca</h5>
             <select
      className="writeInput"
      value={marca}
      onChange={ev => setMarca(ev.target.value)}
    >
      <option style={{color:"#000"}} value="">Selecteaza marca</option>
      {cars.map(car => (
        <option key={car.brand} value={car.brand}>{car.brand}</option>
      ))}
    </select>
            <h5>Model</h5>
            <select
      className="writeInput"
      value={model}
      onChange={ev => setModel(ev.target.value)}
    >
      {generateModelOptions()}
    </select>
             <h5>Caroserie</h5>
             <select className="writeInput" value={caroserie} onChange={ev => setCaroserie(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza caroseria</option>
  <option value="Coupe">Coupe</option>
  <option value="Compacta">Compacta</option>
  <option value="Berlina">Berlina</option>
  <option value="Monovolum">Monovolum</option>
  <option value="Suv">Suv</option>
  <option value="Crossover">Crossover</option>
  <option value="Break">Break</option>
  <option value="Pickup">Pickup</option>
  <option value="Hatchback">Hatchback</option>


</select>

            <h5>Putere</h5>
             <input
              className="writeInput"
              placeholder="250"
              type="text"
              value={putere} onChange={ev => setPutere(ev.target.value)}
            />
            <h5>Combustibil</h5>
            <select className="writeInput" value={combustibil} onChange={ev => setCombustibil(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza combustibil-ul</option>
  <option value="Benzina">Benzina</option>
  <option value="Benzina-Gaz">Benzina-Gaz</option>
  <option value="Diesel">Diesel</option>
  <option value="Electric">Electric</option>
  <option value="Hibrid">Hibrid</option>
  <option value="Hibrid-Diesel">Hibrid-Diesel</option>
  <option value="Etanol">Etanol</option>
  <option value="Gaz">Gaz</option>


</select>
            <h5>Serie Sasiu</h5>
             <input
              className="writeInput"
              placeholder=""
              type="text"
              value={seriesasiu} onChange={ev => setSeriesasiu(ev.target.value)}
            />
            <h5>Tractiune</h5>
            <select className="writeInput" value={tractiune} onChange={ev => setTractiune(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza tractiunea</option>
  <option value="Fata">Fata</option>
  <option value="Spate">Spate</option>
  <option value="4x4">4x4</option>
  
   

</select>
            <h5>Culoare</h5>
            <select className="writeInput" value={culoare} onChange={ev => setCuloare(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selectează culoarea</option>
  <option value="Alb">Alb</option>
  <option value="Negru">Negru</option>
  <option value="Gri">Gri</option>
  <option value="Argintiu">Argintiu</option>
  <option value="Auriu">Auriu</option>
  <option value="Maro">Maro</option>
  <option value="Rosu">Roșu</option>
  <option value="Portocaliu">Portocaliu</option>
  <option value="Galben">Galben</option>
  <option value="Verde">Verde</option>
  <option value="Albastru">Albastru</option>
  <option value="Violet">Violet</option>
  <option value="Roz">Roz</option>
</select>

            
            <h5>Norma Euro</h5>
            <select className="writeInput" value={normaeuro} onChange={ev => setNormaeuro(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza Norma Euro</option>
  <option value="euro0">Non euro</option>
  <option value="euro1">Euro 1</option>
  <option value="euro2">Euro 2</option>
  <option value="euro3">Euro 3</option>
  <option value="euro4">Euro 4</option>
  <option value="euro5">Euro 5</option>
  <option value="euro6">Euro 6</option>
  <option value="euro7">Euro 7</option>
</select>
            <h5>Transmisie</h5>
            <select className="writeInput" value={transmisie} onChange={ev => setTransmisie(ev.target.value)}>
  <option style={{color:"#000"}} value="">Selecteaza Transmisia</option>
  <option value="CVT">CVT</option>
  <option value="Automata"> Automata</option>
 
  <option value="Manuala">Manuala</option>
   
</select>
             <h5>Cilindre</h5>
             <input
              className="writeInput"
              placeholder="1997cc"
              type="text"
              value={cilindre} onChange={ev => setCilindre(ev.target.value)}
            />
            <h5>Nume pentu contact</h5>
             <input
              className="writeInput"
              placeholder="Nume"
              type="text"
              value={nume} onChange={ev => setNume(ev.target.value)}
            />
            <h5>Telefon</h5>
             <input
              className="writeInput"
              placeholder="07xxxxxxxx"
              type="text"
              value={telefon} onChange={ev => setTelefon(ev.target.value)}
            />
            <h5>eMail</h5>
             <input
              className="writeInput"
              placeholder="abc@xyz.com"
              type="text"
              value={mail} onChange={ev => setMail(ev.target.value)}
            />

             <h5>Kilometri</h5>
             <input
              className="writeInput"
              placeholder="10000"
              type="text"
              value={km} onChange={ev => setKm(ev.target.value)}
            />
             <h5>Anul de fabricatie</h5>
             <input
              className="writeInput"
              placeholder="2012"
              type="text"
              value={anul} onChange={ev => setAnul(ev.target.value)}
            />
             
             <PhotosUpLoader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
             <br></br>
            <Perks selected={perks} onChange={setPerks}/>
          
          </div>
             
            
        

           
          <div className="writeFormGroup">

          <h4>Descriere</h4>
          <textarea
  className="writeInput writeText"
  placeholder="Detalii despre vehicul"
  type="text"
  value={description}
  onChange={ev => setDescription(ev.target.value)}
  onKeyDown={ev => {
    if (ev.keyCode === 13) {
      // The Enter key was pressed, handle the new line here
      console.log('New line detected!');
    }
  }}
/>

          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
      
    </React.Fragment>
  );
}
