const cityList = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "San Francisco",
  "Indianapolis",
  "Columbus",
  "Fort Worth",
  "Charlotte",
  "Seattle",
  "Denver",
  "El Paso",
  "Detroit",
  "Washington",
  "Boston",
  "Memphis",
  "Nashville",
  "Portland",
  "Oklahoma City",
  "Las Vegas",
  "Baltimore",
  "Louisville",
  "Milwaukee",
  "Albuquerque",
  "Tucson",
  "Fresno",
  "Sacramento",
  "Mesa",
  "Kansas City",
  "Atlanta",
  "Long Beach",
  "Omaha",
  "Raleigh",
  "Colorado Springs",
  "Miami",
  "Virginia Beach",
  "Oakland",
  "Minneapolis",
  "Tulsa",
  "Arlington",
  "Tampa",
  "New Orleans",
  "Wichita",
  "Cleveland",
  "Bakersfield",
  "Aurora",
  "Anaheim",
  "Honolulu",
  "Santa Ana",
  "Riverside",
  "Corpus Christi",
  "Lexington",
  "Stockton",
  "St. Louis",
  "Saint Paul",
  "Henderson",
  "Pittsburgh",
  "Cincinnati",
  "Anchorage",
  "Greensboro",
  "Plano",
  "Newark",
  "Lincoln",
  "Orlando",
  "Irvine",
  "Toledo",
  "Jersey City",
  "Chula Vista",
  "Durham",
  "Fort Wayne",
  "St. Petersburg",
  "Laredo",
  "Buffalo",
  "Madison",
  "Lubbock",
  "Chandler",
  "Scottsdale",
  "Reno",
  "Glendale",
  "Norfolk",
  "Winston-Salem",
  "North Las Vegas",
  "Gilbert",
  "Chesapeake",
  "Irving",
  "Hialeah",
  "Garland",
  "Fremont",
  "Richmond",
  "Boise",
  "Baton Rouge",
  "Des Moines",
  "Spokane",
  "San Bernardino",
  "Modesto",
  "Tacoma",
  "Fontana",
  "Santa Clarita",
  "Birmingham",
  "Oxnard",
  "Fayetteville",
  "Moreno Valley",
  "Rochester",
  "Glendale",
  "Huntington Beach",
  "Salt Lake City",
  "Grand Rapids",
  "Amarillo",
  "Yonkers",
  "Aurora",
  "Montgomery",
  "Akron",
  "Little Rock",
  "Huntsville",
  "Augusta",
  "Port St. Lucie",
  "Grand Prairie",
  "Columbus",
  "Tallahassee",
  "Overland Park",
  "Tempe",
  "McKinney",
  "Mobile",
  "Cape Coral",
  "Shreveport",
  "Frisco",
  "Knoxville",
  "Worcester",
  "Brownsville",
  "Vancouver",
  "Fort Lauderdale",
  "Sioux Falls",
  "Ontario",
  "Chattanooga",
  "Providence",
  "Newport News",
  "Rancho Cucamonga",
  "Santa Rosa",
  "Oceanside",
  "Salem",
  "Elk Grove",
  "Peoria",
  "Pembroke Pines",
  "Eugene",
  "Garden Grove",
  "Cary",
  "Fort Collins",
  "Corona",
  "Springfield",
  "Jackson",
  "Alexandria",
  "Hayward",
  "Lancaster",
  "Lakewood",
  "Clarksville",
  "Palmdale",
  "Salinas",
  "Springfield",
  "Hollywood",
  "Pasadena",
  "Sunnyvale",
  "Macon",
  "Kansas City",
  "Pomona",
  "Escondido",
  "Killeen",
  "Naperville",
  "Joliet",
  "Bellevue",
  "Rockford",
  "Savannah",
  "Paterson",
  "Torrance",
  "Bridgeport",
  "McAllen",
  "Mesquite",
  "Syracuse",
  "Midland",
  "Pasadena",
  "Murfreesboro",
  "Miramar",
  "Dayton",
  "Fullerton",
  "Olathe",
  "Orange",
  "Thornton",
  "Roseville",
  "Denton",
  "Waco",
  "Surprise",
  "Carrollton",
  "West Valley City",
  "Charleston",
  "Warren",
  "Hampton",
  "Gainesville",
  "Visalia",
  "Coral Springs",
  "Columbia",
  "Cedar Rapids",
  "Sterling Heights",
  "New Haven",
  "Stamford",
  "Concord",
  "Kent",
  "Santa Clara",
  "Elizabeth",
  "Round Rock",
  "Thousand Oaks",
  "Lafayette",
  "Athens",
  "Topeka",
  "Simi Valley",
  "Fargo",
  "Norman",
  "Columbia",
  "Abilene",
  "Wilmington",
  "Hartford",
  "Victorville",
  "Pearland",
  "Vallejo",
  "Ann Arbor",
  "Berkeley",
  "Allentown",
  "Richardson",
  "Odessa",
  "Arvada",
  "Cambridge",
  "Sugar Land",
  "Beaumont",
  "Lansing",
  "Evansville",
  "Rochester",
  "Independence",
  "Fairfield",
  "Provo",
  "Clearwater",
  "College Station",
  "West Jordan",
  "Carlsbad",
  "El Monte",
  "Murrieta",
  "Temecula",
  "Springfield",
  "Palm Bay",
  "Costa Mesa",
  "Westminster",
  "North Charleston",
  "Miami Gardens",
  "Manchester",
  "High Point",
  "Downey",
  "Clovis",
  "Pompano Beach",
  "Pueblo",
  "Elgin",
  "Lowell",
  "Antioch",
  "West Palm Beach",
  "Everett",
  "Ventura",
  "Centennial",
  "Lakeland",
  "Gresham",
  "Richmond",
  "Billings",
  "Inglewood",
  "Broken Arrow",
  "Sandy Springs",
  "Jurupa Valley",
  "Hillsboro",
  "Waterbury",
  "Santa Maria",
  "Boulder",
  "Greeley",
  "Daly City",
  "Meridian",
  "Lewisville",
  "Davie",
  "West Covina",
  "League City",
  "Tyler",
  "Norwalk",
  "San Mateo",
  "Green Bay",
  "Wichita Falls",
  "Sparks",
  "Lakewood",
  "Burbank",
  "Rialto",
  "Allen",
  "El Cajon",
  "Las Cruces",
  "Renton",
  "Davenport",
  "South Bend",
  "Vista",
  "Tuscaloosa",
  "Clinton",
  "Edison",
  "Woodbridge",
  "San Angelo",
  "Kenosha",
  "Vacaville",
  "Toronto",
  "Montreal",
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Mississauga",
  "Winnipeg",
  "Hamilton",
  "Quebec City",
  "Kitchener",
  "London",
  "Victoria",
  "Halifax",
  "Oshawa",
  "Windsor",
  "Saskatoon",
  "Regina",
  "St. John's",
  "Barrie",
  "Kelowna",
  "Sherbrooke",
  "Guelph",
  "Abbotsford",
  "Kingston",
  "Sudbury",
  "Saguenay",
  "Trois-Rivieres",
  "Chicoutimi",
  "Saint John",
  "Thunder Bay",
  "Moncton",
  "Saint John's",
  "Charlottetown",
  "Fredericton",
  "Yellowknife",
  "Whitehorse",
  "Iqaluit",
  "Sid is so cool"
];

module.exports = cityList;